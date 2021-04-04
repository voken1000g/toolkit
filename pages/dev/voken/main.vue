<template>
  <div>
    <layout-hero-simple>
      <template #title>
        #{{ $store.state.ether.blockNumberStr }}
      </template>

      <template #text>
        Dashboard for Developers
      </template>
    </layout-hero-simple>

    <div class="resp-wide py-16">

      <div class="flex items-end space-x-2">
        <div class="flex-grow" :class="addressStatus">
          <label for='default1'>
            ETH Address
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='default1'
                   class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                   v-model="address"
                   placeholder='ETH Address'/>

            <layout-input-esw/>
          </div>
        </div>

        <div class="flex-grow-0">
          <button type='button' class='w-full btn justify-center py-3 px-6 uppercase' @click="query">
            Query
          </button>
        </div>
      </div>

      <div class="mt-4 space-y-2">
        <dev-voken-agent :address="address" />
        <dev-voken-minter :address="address" />
      </div>

      <div v-show="account.address" class="resp-mt bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="div-striped-list-header space-x-2">
          <div>
            <h3>
              ETH Account
            </h3>
            <p class="font-mono">
              {{ account.address }}
            </p>
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                ETH balance
              </dt>
              <dd>
                <fa :icon="['fab', 'ethereum']" class="text-indigo-600"/>
                {{ account.etherBalance }} ETH
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                VokenTB balance
              </dt>
              <dd>
                {{ account.balance }} VokenTB
                <span v-show="account.balance > '0'">
                  <span v-if="account.balance === account.vesting" class="text-gray-400">
                    (vesting)
                  </span>
                  <span v-else-if="account.balance === account.available" class="text-gray-400">
                    (all available)
                  </span>
                  <span v-else>
                    ({{ account.available }} available)
                  </span>
                </span>
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Bank
              </dt>
              <dd>
                <div @click="addBank">
                  <comp-switch :isOn="account.isBank" />
                </div>
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Referrer
              </dt>
              <dd>
                <span v-if="!fnEthereum.isZeroAddress(account.referrer)">
                  {{ account.referrer }}
                </span>
                <span v-if="fnEthereum.isZeroAddress(account.referrer)">
                  N/A
                </span>
              </dd>
            </div>

          </dl>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import BigNumber from "bignumber.js"
import fnFormat from "~/utils/fnFormat"
import fnEthereum from "~/utils/fnEthereum"

export default {
  name: "dev-voken-main",
  middleware: ['web3', 'voken'],
  data() {
    return {
      isAgent: false,

      address: '',
      account: {
        address: '',
        etherBalance: '',
        balance: '',
        vesting: '',
        isBank: '',
        referrer: '',
      },
    }
  },
  mounted: async function() {
    await this.getIsAgent()
  },
  watch: {
    '$store.state.ether.account': async function() {
      await this.getIsAgent()
    }
  },
  computed: {
    fnEthereum() {
      return fnEthereum
    },
    ether() {
      return this.$store.state.ether
    },
    addressStatus() {
      if (this.address) {
        if (Web3.utils.isAddress(this.address)) {
          return 'success'
        }

        return 'error'
      }

      return null
    }
  },
  methods: {
    async getIsAgent() {
      await this.$store.state.voken.contract().methods.isAgent(this.ether.account).call()
        .then(this.onGetIsAgent)
        .catch(console.error)
    },
    async onGetIsAgent(isAgent) {
      await this.$store.dispatch('voken/SET_IS_AGENT', isAgent)
    },

    async query() {
      this.account.address = this.address
      await this.$store.state.voken.dataContract().methods.data(this.address)
        .call()
        .then(this.onQuery)
        .catch(error => {
          this.account.address = ''
          console.error('::: C[dev-voken] query', error)
        })
    },
    onQuery(payload) {
      this.account.etherBalance = Web3.utils.fromWei(payload.etherBalance, 'ether')
      this.account.balance = fnFormat.ns2Str(payload.balance, 9)
      this.account.vesting = fnFormat.ns2Str(payload.vesting, 9)
      this.account.available = fnFormat.ns2Str(
        new BigNumber(payload.balance).minus(new BigNumber(payload.vesting)).toString()
      )
      this.account.isBank = payload.isBank
      this.account.referrer = payload.referrer
    },



    async addBank() {
      await this.$store
        .state.voken.contract()
        .methods
        .addBank(this.address)
        .send({'from': this.ether.account})
        .on('transactionHash', console.log)
        .on('receipt', console.log)
        .on('confirmation', console.log)
        .on('error', console.log)
        .catch(console.error)
    }
  }
}
</script>

<style scoped>

</style>
