<template>
  <div v-show="typeof status === 'number' && status > -1" :class="txInfoClassArr" class="space-x-2">
    <div class="w-1/4 flex items-center justify-center">
      <img v-if="status === 0" class="w-20 h-20" src="~/assets/image/spinner-gray.svg" alt="spinner"/>
      <img v-else-if="status === 1" class="w-20 h-20" src="~/assets/image/spinner-blue.svg" alt="spinner"/>
      <fa v-else-if="status === 2" class="mx-5 fa-3x" :icon="['fas', 'check-square']"/>
      <fa v-else-if="status > 2" class="mx-5 fa-3x" :icon="['fas', 'times-circle']"/>
    </div>

    <div class="w-full py-3">
      <div class="tx-title">
        {{ statusDisplay }}
      </div>

      <div v-if="hash" class="tx-hash">
        {{ hash }}
      </div>

      <div v-if="message" class="tx-message">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
/**
 * status:
 *  -1: Null
 *   0: Pending
 *   1: Confirming
 *   2: Success
 *   3: Error
 */

export default {
  name: "TxInfo",
  props: ['status', 'hash', 'confirmation', 'message'],
  computed: {
    txInfoClassArr() {
      let arr = ['tx-info']

      if (this.status === 0) {
        arr.push('tx-info-pending')
      } else if (this.status === 1) {
        arr.push('tx-info-confirming')
      } else if (this.status === 2) {
        arr.push('tx-info-success')
      } else if (this.status > 2) {
        arr.push('tx-info-error')
      }

      return arr
    },

    statusDisplay() {
      if (this.status === 0) {
        return this.$t('ether.tx.Pending')
      } else if (this.status === 1) {
        return this.$t('ether.tx.Confirming') + ' ... ' + this.confirmation + ' ' + this.$t('ether.tx.blocks')
      } else if (this.status === 2) {
        return this.$t('ether.tx.Success') + ' ... ' + this.confirmation + ' ' + this.$t('ether.tx.blocks')
      } else if (this.status > 2) {
        return this.$t('ether.tx.Error')
      }
    },

    hashDisplay() {
      if (this.hash) {
        return this.hash
      }

      return '...'
    }
  }
}
</script>
