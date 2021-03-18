<template>
  <div class='bg-gradient-to-br from-white to-indigo-200' @click='hideNavMenu'>
    <div class='bg-ripple min-h-screen w-full'>
      <site-nav />
      <nuxt />
      <site-footer />
    </div>
  </div>
</template>
<script>
import SiteNav from '~/components/SiteNav'

export default {
  components: { SiteNav },
  methods: {
    hideNavMenu() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}
</script>

<style scoped>
.bg-ripple {
  background: url("../assets/bg/ripple.svg") no-repeat;
  @apply bg-cover;
}
</style>
