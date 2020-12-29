<template>
  <div class='min-h-screen bg-gradient-to-br from-white to-indigo-200' @click='hideNavMenu'>
    <div class='mx-auto'>
      <site-nav/>
      <Nuxt/>
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
