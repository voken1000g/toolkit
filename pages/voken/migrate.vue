<template>
  <div>
    <voken-migrate-hero />
    <voken-migrate-main />
    <voken-migrate-faq class="bg-indigo-50" />
  </div>

</template>

<script>
export default {
  name: "voken-migrate",
  middleware: ['web3', 'voken'],
  layout: 'white',
}
</script>

<style scoped>

</style>
