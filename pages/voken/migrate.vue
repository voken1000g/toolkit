<template>
  <div>
    <voken-migrate-hero />
    <voken-migrate-exe />
    <voken-migrate-faq class="bg-indigo-50" />
  </div>

</template>

<script>
import VueAvatar from '@voken/vue-avatar'

export default {
  name: "voken-migrate",
  middleware: ['web3', 'voken'],
  layout: 'white',
}
</script>

<style scoped>

</style>
