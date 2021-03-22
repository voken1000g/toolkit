<template>
  <div class="menu-flyout">
    <button type="button" class='button-flyout' @click.stop='toggleFlyout'>
      {{ $t('nav.Messenger') }}
    </button>

    <!-- Flyout menu -->
    <div v-show='$store.state.nav.flyoutMessenger' class="menu-flyout-layer -translate-x-0">
      <div class="flyout-wrapper">
        <div class="flyout-items">
          <nuxt-link v-for='link in navMessengerLinks' :key='link.path' :to='localePath(link.path)'>
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
import navMessengerLinks from '~/utils/constants/navMessengerLinks'

export default {
  name: 'NavFlyoutMessenger',
  data() {
    return {
      navMessengerLinks: navMessengerLinks
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
