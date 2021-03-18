<template>
  <div class='min-h-screen' @click='hideNavMenu'>
    <div class='mx-auto'>
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
