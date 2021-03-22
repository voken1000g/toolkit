<template>
  <div>
    <layout-hero-simple>
      <template #title>
        #{{ $store.state.ether.blockNumberStr }}
      </template>

      <template #text>
        Dashboard for Developers
      </template>
    </layout-hero-simple>

    <dev-voken />
  </div>
</template>

<script>
export default {
  name: "dev_voken",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
}
</script>

<style scoped>

</style>
