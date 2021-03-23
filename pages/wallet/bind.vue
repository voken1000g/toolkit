<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Set Voken Wallet Address
      </template>

      <template #text>
        For Voken Blockchain Migration, both beta and the main network.
      </template>
    </layout-hero-simple>

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
