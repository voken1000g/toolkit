<template>
  <div class='bg-gradient-to-br from-indigo-100 to-white' @click='hideNavAll'>
    <div class='bg-wave min-h-screen w-full'>
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
.bg-wave {
  background: url("../assets/bg/wave-daigonal.svg") no-repeat;
  @apply bg-cover;
}
</style>
