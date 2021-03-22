<template>
  <div>
    <early-bird-hero />
    <early-bird-swap />
    <early-bird-data class="bg-indigo-50" />
    <early-bird-rules />
    <early-bird-faq class="bg-indigo-50" />
  </div>
</template>

<script>
export default {
  name: "early-bird",
  middleware: ['web3', 'etherGasSync', 'voken', 'vokenEarlyBirdSale'],
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
