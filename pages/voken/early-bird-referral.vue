<template>
  <div>
    <sale-early-bird-referral-hero />
    <sale-early-bird-referral-link class="bg-indigo-50" />
    <sale-early-bird-referral-rules />
  </div>
</template>

<script>

export default {
  name: "early-bird-referral",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
  layout: 'white',
}
</script>

<style scoped>

</style>
