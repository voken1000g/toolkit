<template>
  <div>
    <div class="resp-wide">
      <layout-voken-account class="py-16" />

      <overview-wallet />
    </div>
  </div>
</template>

<script>
export default {
  name: "user-index",
  // layout: 'white',
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
}
</script>

<style scoped>

</style>
