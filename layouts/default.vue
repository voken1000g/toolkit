<template>
  <div class='min-h-screen bg-gradient-to-br from-white to-indigo-200' @click='hideNavMenu'>
    <div class='mx-auto'>
      <site-nav />
      <nuxt />
      <site-footer />
    </div>
  </div>
</template>
<script>

export default {
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}
</script>
