<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Funds
        </template>
      </layout-h2>

      <div class="resp-mt">
        <div class="grid lg:grid-cols-2 gap-2">
          <div v-for="(fund, index) in funds" :class="addressStatus(fund)">
            <label :for="'fund'+ index"></label>

            <div class='relative'>
              <input type='text'
                     :id="'fund' + index"
                     :ref="'fund' + index"
                     class='input-indigo w-full py-2 pl-4 pr-12 font-mono text-sm md:text-base'
                     v-model="funds[index]"
                     :placeholder="'Fund #' + index"/>

              <layout-input-esw/>
            </div>
          </div>
        </div>
        <div class="mt-4 mx-auto max-w-md">
          <div>
            <button class="w-1/3 xl:w-full btn btn-pink justify-center py-2 px-6 text-sm md:text-base uppercase" @click="set">
              Set
            </button>
          </div>

          <txn-info :value-obj="txSet" class="mt-2"/>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3"

export default {
  name: "DevVokenEarlyBirdFunds",
  data() {
    return {
      funds: [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
      ],

      txSet: {
        status: -1,
        hash: null,
        confirmation: 0,
        message: null
      },
    }
  },
  methods: {
    addressStatus(account) {
      if (account) {
        if (Web3.utils.isAddress(account)) {
          return 'success'
        }

        return 'error'
      }

      return null
    },
    async set() {
      for (let i = 0; i < 8; i++) {
        if (this.addressStatus(this.funds[i]) !== 'success') {
          document.getElementById('fund' + i).focus()
          return
        }
      }

      this.txSet.status = 0

      await this.$store
        .state.vokenEarlyBirdSale.contract()
        .methods
        .setTeamFunds(this.funds)
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onSetTransactionHash)
        .on('receipt', this.onSetReceipt)
        .on('confirmation', this.onSetConfirmation)
        .on('error', this.onSetError)
        .catch(this.onSetError)
    },

    async onSetTransactionHash(txHash) {
      this.txSet.status = 0
      this.txSet.hash = txHash
    },
    async onSetReceipt(receipt) {
      this.txSet.message = null

      if (receipt.status) {
        this.txSet.status = 1
      } else {
        this.txSet.status = 3
      }
    },
    async onSetConfirmation(confirmation) {
      if (this.txSet.status < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txSet.status = 1
        } else {
          this.txSet.status = 2
          //
        }

        this.txSet.confirmation = confirmation
      }
    },
    async onSetError(error) {
      this.txSet.status = 3
      this.txSet.message = error.message
    },
  }
}
</script>

<style scoped>

</style>
