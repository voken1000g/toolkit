<template>
  <div>
    <wallet-bind-hero />
    <wallet-bind-main />
    <wallet-bind-faq />
  </div>
</template>

<script>
export default {
  name: "bind",
  middleware: ['web3', 'voken'],
  head() {
    return {
      title: this.$t('nav.Wallet_Bind')
    }
  },
  layout: 'indigoBubble',
}
</script>

<style scoped>

</style>
