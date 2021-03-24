<template>
  <div class="text-center">
    <layout-voken-avatar/>

    <div v-show="address" class="mt-8 font-mono text-xs sm:text-sm md:text-base text-cool-gray-500 truncate">
      {{ vokenAccount.vokenAddress }}
    </div>

    <!-- Balance -->
    <div class="font-mono text-cool-gray-700" :class="balanceClass">
      <div class="text-xl md:text-2xl">
        {{ vokenAccount.balanceObj.d }}<span v-show="vokenAccount.balanceObj.f"
                                             class="text-lg md:text-xl">.{{ vokenAccount.balanceObj.f }}</span>
        <span class="text-lg md:text-xl">
          VokenTB
        </span>

        <!-- vesting -->
        <span v-show="vesting" class="font-sans text-base md:text-lg text-gray-400">
          {{ $t('voken._vesting_') }}
        </span>

        <!-- all available -->
        <span v-show="allAvailable" class="font-sans text-base md:text-lg text-gray-400">
          {{ $t('voken._all_available_') }}
        </span>
      </div>

      <!-- value -->
      <div v-show="value" class="mt-2">
        {{ $t('voken.Market_Value') }}
        ${{ vokenAccount.valueObj.d }}<span v-show="vokenAccount.valueObj.f"
                                             class="text-sm">.{{ vokenAccount.valueObj.f }}</span>
      </div>

      <!-- available -->
      <div v-show="available" class="mt-2 text-pink-600">
        {{ vokenAccount.availableObj.d }}<span v-show="vokenAccount.availableObj.f"
                                               class="text-sm">.{{ vokenAccount.availableObj.f }}</span>
        {{ $t('voken.available') }}
      </div>

      <!-- ETH Address -->
      <div v-show="vokenAccount.balance === '0'" class="mt-4 text-xs sm:text-sm md:text-base text-gray-500 truncate">
        {{ $store.state.ether.account }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutVokenAccount",
  props: {
    showAddress: {
      type: Boolean,
      required: false,
      default: false,
    },
    showValue: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    vokenAccount() {
      return this.$store.state.voken.account
    },
    address() {
      return this.showAddress && this.vokenAccount.vokenInt > '0'
    },
    vesting() {
      return this.vokenAccount.balance > '0' && this.vokenAccount.balance === this.vokenAccount.vesting
    },
    available() {
      return this.vokenAccount.available > '0' && this.vokenAccount.balance !== this.vokenAccount.available
    },
    allAvailable() {
      return this.vokenAccount.balance > '0' && this.vokenAccount.balance === this.vokenAccount.available
    },
    value() {
      return this.showValue && this.vokenAccount.value > '0'
    },
    balanceClass() {
      if (this.address) {
        return 'mt-8'
      }

      return 'resp-mt'
    },
  },
}
</script>

<style scoped>

</style>
