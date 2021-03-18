<template>
  <div class='bg-gradient-to-br from-white to-indigo-200' @click='hideNavAll'>
    <div class='bg-bubble min-h-screen w-full'>
      <div class='mx-auto'>
        <site-nav />
        <nuxt />
        <site-footer />
      </div>
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
.bg-bubble {
  background: url("../assets/bg/bubble.svg") no-repeat;
  @apply bg-cover;
}
</style>
