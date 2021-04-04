<template>
  <div v-show="typeof valueObj.status === 'number' && valueObj.status > -1"
       class="tx-info space-x-2"
       :class="txInfoClass"
  >
    <div class="w-1/4 flex items-center justify-center">
      <img v-if="valueObj.status === 0" class="w-20 h-20" src="~/assets/image/spinner-gray.svg" alt="spinner"/>
      <img v-else-if="valueObj.status === 1" class="w-20 h-20" src="~/assets/image/spinner-blue.svg" alt="spinner"/>
      <fa v-else-if="valueObj.status === 2" class="mx-5 fa-3x" :icon="['fas', 'check-square']"/>
      <fa v-else-if="valueObj.status > 2" class="mx-5 fa-3x" :icon="['fas', 'times-circle']"/>
    </div>

    <div class="w-full py-3">
      <div class="tx-title">
        {{ statusDisplay }}
      </div>

      <div v-if="valueObj.hash" class="tx-hash">
        {{ valueObj.hash }}
      </div>

      <div v-if="valueObj.message" class="tx-message">
        {{ valueObj.message }}
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
  name: "TxnInfo",
  props: {
    valueObj: {
      type: Object,
      required: true
    },
  },
  computed: {
    txInfoClass() {
      if (this.valueObj.status < 0) {
        return null
      }

      switch (this.valueObj.status) {
        case 0:
          return 'tx-info-pending'
        case 1:
          return 'tx-info-confirming'
        case 2:
          return 'tx-info-success'
        default:
          return 'tx-info-error'
      }
    },

    statusDisplay() {
      if (this.valueObj.status === 0) {
        return this.$t('ether.tx.Pending')
      } else if (this.valueObj.status === 1) {
        return this.$t('ether.tx.Confirming') + ' ... ' + this.valueObj.confirmation + ' ' + this.$t('ether.tx.blocks')
      } else if (this.valueObj.status === 2) {
        return this.$t('ether.tx.Success') + ' ... ' + this.valueObj.confirmation + ' ' + this.$t('ether.tx.blocks')
      } else if (this.valueObj.status > 2) {
        return this.$t('ether.tx.Error')
      }
    },

    hashDisplay() {
      if (this.valueObj.hash) {
        return this.valueObj.hash
      }

      return '...'
    }
  }
}
</script>
