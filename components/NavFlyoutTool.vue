<template>
  <div class="menu-flyout">
    <button type="button" class='button-flyout' @click.stop='toggleFlyout'>
      {{ $t('nav.Tool') }}
    </button>

    <!-- Flyout menu -->
    <div v-show='$store.state.nav.flyoutMessenger' class="menu-flyout-layer -translate-x-0">
      <div class="flyout-wrapper">
        <div class="flyout-items">
          <nuxt-link v-for='link in navToolLinks' :key='link.path' :to='localePath(link.path)'>
            <div class='div-icon'>
              <fa :icon='link.icon'/>
            </div>

            <div class="ml-4">
              <div class="item-title">
                {{ $t(link.title) }}
              </div>
              <p class="item-description">
                {{ $t(link.description) }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navToolLinks from '~/utils/constants/navToolLinks'

export default {
  name: 'NavFlyoutTool',
  data() {
    return {
      navToolLinks: navToolLinks
    }
  },
  methods: {
    toggleFlyout() {
      this.$store.dispatch('nav/TOGGLE_FLYOUT_MESSENGER')
    }
  }
}
</script>

<style scoped>

</style>
