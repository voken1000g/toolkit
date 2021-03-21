<template>
  <div>
    <early-bird-referral-hero />
    <early-bird-referral-link class="bg-indigo-50" />
    <early-bird-referral-rules />
    <early-bird-referral-rewards class="bg-indigo-50" />
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
