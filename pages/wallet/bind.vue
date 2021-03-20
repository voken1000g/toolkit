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
  layout: 'indigoBubble',
}
</script>

<style scoped>

</style>
