<template>
  <div class="resp-wide py-60">
    <div>
      {{ $store.state.ether.account }}
    </div>
    <div class="mt-8">
      {{ $store.state.vokenResale.status }}
    </div>
    <div class="mt-8">
      {{ $store.state.vokenResale.account }}
    </div>
    <div class="mt-8">
      {{ $store.state.vokenResale.deadlineCountdown }}
    </div>
  </div>
</template>

<script>
export default {
  name: "resale",
  middleware: ['web3', 'vokenResale'],
}
</script>

<style scoped>

</style>
