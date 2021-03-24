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

    <early-bird-swap />
    <early-bird-data class="bg-indigo-50" />
    <early-bird-rules />
    <early-bird-faq class="bg-indigo-50" />
  </div>
</template>

<script>
export default {
  name: "early-bird",
  middleware: ['etherGasSync', 'web3', 'voken', 'vokenEarlyBirdSale'],
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
