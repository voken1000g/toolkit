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

    <div class="resp-wide py-40 text-center">
      emmm....
    </div>
  </div>
</template>

<script>
export default {
  name: "dev-voken-account",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
}
</script>

<style scoped>

</style>
