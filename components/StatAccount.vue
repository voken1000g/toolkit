<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
<!--      <layout-h2>-->
<!--        <template #title>-->
<!--          Account-->
<!--        </template>-->
<!--      </layout-h2>-->

      <div v-if="account" class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="div-striped-list-header space-x-2">
          <div>
            <h3>
              ETH Wallet Address
            </h3>
            <p class="font-mono">
              <a target="_blank" :href="fnEtherscan.address(account)">
                {{ account }}
              </a>
            </p>
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                Tx Nonce
              </dt>
              <dd>
                {{ nonce }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                ETH balance
              </dt>
              <dd>
                <fa :icon="['fab', 'ethereum']" class="text-indigo-600"/>
                <comp-number :value="etherBalance" :decimals="18" /> ETH
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Voken Address
              </dt>
              <dd>
                <span v-if="voken.address">
                  {{ voken.address }}
                </span>
                <span v-else>
                  N/A
                </span>
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                VokenTB balance
              </dt>
              <dd>
                <comp-number :value="voken.balance" :decimals="9" /> VokenTB
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                VokenTB vesting
              </dt>
              <dd>
                <comp-number :value="voken.vesting" :decimals="9" /> VokenTB
              </dd>
            </div>


            <div class="div-striped-list-card">
              <dt>
                VokenTB available
              </dt>
              <dd>
                <comp-number :value="voken.available" :decimals="9" /> VokenTB
              </dd>
            </div>

            <div v-if="$store.state.comm0.isProxy || $store.state.voken.account.isAgent" class="div-striped-list-card">
              <dt>
                Referrer
              </dt>
              <dd>
                <span v-if="fnEthereum.isZeroAddress(voken.referrer)">
                  N/A
                </span>
                <nuxt-link v-else :to="localePath('/stat/' + voken.referrer)">
                  {{ voken.referrer }}
                </nuxt-link>
              </dd>
            </div>


          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BigNumber from "bignumber.js"
import VokenAddress from "@voken/address"
import fnEthereum from "~/utils/fnEthereum"
import fnEtherscan from "~/utils/fnEtherscan"

export default {
  name: "StatAccount",
  data() {
    return {
      fnEthereum: fnEthereum,
      fnEtherscan: fnEtherscan,

      account: this.$route.params.account,
      nonce: 0,
      etherBalance: '0',

      vokenInt: '0',
      vokenBalance: '0',
      vokenVesting: '0',
      vokenReferrer: '',

      voken: {
        int: '0',
        address: null,
        balance: '0',
        vesting: '0',
        available: '0',
        referrer: null,
      },

    }
  },
  async mounted() {
    await this.query()
  },
  methods: {
    async query() {
      this.nonce = await this.$store.state.ether.web3().eth.getTransactionCount(this.account).catch(console.error)

      await this.$store.state.voken
        .dataContract().methods.data(this.account)
        .call()
        .then(this.onVokenData)
        .catch(error => {
          console.error('::: C[StatAccount] voken - data:', error)
        })
    },
    async onVokenData(payload) {
      this.etherBalance = payload.etherBalance
      if (payload.vokenInt > '0') {
        this.voken.address = VokenAddress.fromBNString(payload.vokenInt)
      }
      this.voken.balance = payload.balance
      this.voken.vesting = payload.vesting
      this.voken.available = new BigNumber(payload.balance).minus(payload.vesting).toString()
      this.voken.referrer = payload.referrer
    },
  }

}
</script>

<style scoped>

</style>
