<template>
  <div>
    <div>
      <nuxt-link to="/base32">Base32 Decoder/Encoder</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  layout: 'middleCenter'
}
</script>

<style scoped>
a {
  @apply py-4 px-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md;
  @apply font-mono text-white;
}

a:hover {
  @apply to-pink-600;
}
</style>
