<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('voken.bind.Set_Voken_Wallet_Address') }}
      </template>

      <template #text>
        {{ $t('voken.bind.For_Voken_Blockchain_Migration__') }}
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
