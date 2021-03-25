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

    <dev-voken-resale />
  </div>
</template>

<script>
export default {
  name: "dev--voken-resale",
  middleware: ['web3', 'voken'],
  async mounted() {
    await this.$store.dispatch('vokenResale/SYNC_STATUS')
  },

}
</script>

<style scoped>

</style>
