<template>
  <div class='bg-gradient-to-br from-white to-indigo-200' @click='hideNavAll'>
    <div class='bg-wallet min-h-screen w-full'>
      <site-nav />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import SiteNav from '~/components/SiteNav'

export default {
  components: { SiteNav },
  methods: {
    hideNavAll() {
      this.$store.dispatch('nav/HIDE_ALL')
    }
  }
}
</script>

<style scoped>
.bg-wallet {
  background: url("../assets/bg/ripple.svg") no-repeat;
  @apply bg-cover;
}

/**
 * bg-gradient-to-br from-white to-indigo-200
 */
</style>
