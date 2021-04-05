<template>
  <div class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Credit:
          <comp-number :value="$store.state.comm0.credit" :decimals="9"/>
          VokenTB
        </template>

        <template #text>
          <span v-if="$store.state.comm0.issued > '0'">
            <comp-number :value="$store.state.comm0.issued" :decimals="9"/>
            VokenTB Distributed
          </span>
        </template>
      </layout-h2>

      <div class="resp-mt mx-auto w-full max-w-3xl">
        <div class="" :class="addressStatus">
          <label for='comm0-to-address'>
            To
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='comm0-to-address'
                   ref='comm0-to-address'
                   class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                   v-model="address"
                   placeholder='ETH Wallet Address'/>

            <layout-input-esw/>
          </div>
        </div>

        <div class="mt-4" :class="amountStatus">
          <label for='comm0-to-amount'>
            Amount
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='comm0-to-amount'
                   ref='comm0-to-amount'
                   class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                   v-model="amount"
                   placeholder='less than 4,000 is recommended'/>

            <layout-input-esw/>
          </div>
        </div>

        <div v-show="showDistributeBtn" class="mt-4 flex justify-end">
          <button type='button' class='w-2/5 btn btn-pink justify-center py-3' @click="distribute">
            Distribute
          </button>
        </div>

        <txn-info :value-obj="txDistribute" class="mt-8" />
      </div>

    </div>
  </div>
</template>

<script>
import Web3 from "web3"
import BigNumber from "bignumber.js"
import fnFormat from "~/utils/fnFormat"

export default {
  name: "Comm0",
  data() {
    return {
      address: '',
      amount: '',

      showDistributeBtn: true,

      txDistribute: {
        status: -1,
        hash: null,
        confirmation: 0,
        message: null
      },
    }
  },
  watch: {
    amount() {
      const max = '50000'

      if (this.amount) {
        let amount = fnFormat.fixNumberStr(this.amount, 9)

        let bn = new BigNumber(amount)

        // max
        if (bn.gt(max)) {
          this.amount = max
          return
        }

        this.amount = amount
      }
    }
  },
  computed: {
    addressStatus() {
      if (this.address) {
        if (Web3.utils.isAddress(this.address)) {
          return 'success'
        }

        return 'error'
      }

      return null
    },
    amountStatus() {
      if (this.amount) {
        const bn = new BigNumber(this.amount)

        if (bn.gt(4000)) {
          return 'warn'
        }

        return 'success'
      }

      return null
    },
    amountValue() {
      return new BigNumber(this.amount).multipliedBy(10 ** 9).toNumber()
    }
  },
  methods: {
    async distribute() {
      if (this.addressStatus !== 'success') {
        this.$refs['comm0-to-address'].focus()
        return
      }

      if (!this.amountValue) {
        this.$refs['comm0-to-amount'].focus()
        return
      }

      this.showDistributeBtn = false

      this.txDistribute.status = 0

      await this.$store
        .state.comm0.contract()
        .methods
        .distribute(this.address, this.amountValue)
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onDistributeTransactionHash)
        .on('receipt', this.onDistributeReceipt)
        .on('confirmation', this.onDistributeConfirmation)
        .on('error', this.onDistributeError)
        .catch(this.onDistributeError)
    },

    async onDistributeTransactionHash(txHash) {
      this.txDistribute.status = 0
      this.txDistribute.hash = txHash
    },
    async onDistributeReceipt(receipt) {
      this.txDistribute.message = null

      if (receipt.status) {
        this.txDistribute.status = 1
      } else {
        this.txDistribute.status = 3
      }
    },
    async onDistributeConfirmation(confirmation) {
      if (this.txDistribute.status < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txDistribute.status = 1
        } else {
          this.txDistribute.status = 2

          await this.query()
        }

        this.txDistribute.confirmation = confirmation
      }
    },
    async onDistributeError(error) {
      this.showDistributeBtn = true

      this.txDistribute.status = 3
      this.txDistribute.message = error.message
    },
  }
}
</script>

<style scoped>

</style>
