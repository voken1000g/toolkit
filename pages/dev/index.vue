<template>
  <div>
    <dev-voken />
  </div>
</template>

<script>
export default {
  name: "dev-index",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
}
</script>

<style scoped>

</style>
