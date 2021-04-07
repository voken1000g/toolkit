<template>
  <div>
    <div class="grid grid-cols-3 gap-2">
      <button type='button'
              class='w-full btn justify-center py-3'
              @click="query"
      >
        isBank: {{ status }}
      </button>

      <button v-if="$store.state.voken.account.isAgent"
              type='button'
              class='w-full btn btn-pink justify-center py-3'
              @click="addBank"
      >
        ADD
      </button>

      <button v-if="$store.state.voken.account.isAgent"
              type='button'
              class='w-full btn btn-gray justify-center py-3'
              @click="removeBank"
      >
        REMOVE
      </button>
    </div>

    <div class="mt-2 mx-auto max-w-2xl space-y-2">
      <txn-info :value-obj="txAdd"/>
      <txn-info :value-obj="txRemove"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevVokenBank",
  props: {
    address: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      status: '...',

      txAdd: {
        status: -1,
        hash: null,
        confirmation: 0,
        message: null
      },
      txRemove: {
        status: -1,
        hash: null,
        confirmation: 0,
        message: null
      },
    }
  },
  watch: {
    address() {
      this.status = '...'
    },
  },
  methods: {
    async query() {
      await this.$store.state.voken.contract().methods.isBank(this.address).call()
        .then(this.onQuery)
        .catch(console.error)
    },
    onQuery(payload) {
      this.status = payload ? 'YES' : 'NO'
    },

    /**
     * Add
     */
    async addBank() {
      this.txAdd.status = 0

      await this.$store
        .state.voken.contract()
        .methods
        .addBank(this.address)
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onAddTransactionHash)
        .on('receipt', this.onAddReceipt)
        .on('confirmation', this.onAddConfirmation)
        .on('error', this.onAddError)
        .catch(this.onAddError)
    },

    async onAddTransactionHash(txHash) {
      this.txAdd.status = 0
      this.txAdd.hash = txHash
    },
    async onAddReceipt(receipt) {
      this.txAdd.message = null

      if (receipt.status) {
        this.txAdd.status = 1
      } else {
        this.txAdd.status = 3
      }
    },
    async onAddConfirmation(confirmation) {
      if (this.txAdd.status < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txAdd.status = 1
        } else {
          this.txAdd.status = 2

          await this.query()
        }

        this.txAdd.confirmation = confirmation
      }
    },
    async onAddError(error) {
      this.txAdd.status = 3
      this.txAdd.message = error.message
    },

    /**
     * Remove
     */
    async removeBank() {
      this.txRemove.status = 0

      await this.$store
        .state.voken.contract()
        .methods
        .removeBank(this.address)
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onRemoveTransactionHash)
        .on('receipt', this.onRemoveReceipt)
        .on('confirmation', this.onRemoveConfirmation)
        .on('error', this.onRemoveError)
        .catch(this.onRemoveError)
    },

    async onRemoveTransactionHash(txHash) {
      this.txRemove.status = 0
      this.txRemove.hash = txHash
    },
    async onRemoveReceipt(receipt) {
      this.txRemove.message = null

      if (receipt.status) {
        this.txRemove.status = 1
      } else {
        this.txRemove.status = 3
      }
    },
    async onRemoveConfirmation(confirmation) {
      if (this.txRemove.status < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txRemove.status = 1
        } else {
          this.txRemove.status = 2

          await this.query()
        }

        this.txRemove.confirmation = confirmation
      }
    },
    async onRemoveError(error) {
      this.txRemove.status = 3
      this.txRemove.message = error.message
    },
  }
}
</script>
