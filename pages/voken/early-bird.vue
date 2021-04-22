<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('earlyBird.Early_bird_sale') }}
      </template>

      <template #text>
        {{ $t('earlyBird.Ethereum_smart_contracts_ensure__') }}
      </template>
    </layout-hero-simple>

    <early-bird2-swap />
    <early-bird2-data class="bg-indigo-50" />
    <early-bird2-rules />
    <early-bird2-faq class="bg-indigo-50" />
  </div>
</template>

<script>
export default {
  name: "early-bird",
  middleware: ['etherGasSync', 'web3', 'voken', 'vokenEarlyBirdSale2'],
  head() {
    return {
      title: this.$t('nav.Sale_EarlyBird')
    }
  },
  layout: 'white',
}
</script>

<style scoped>

</style>
