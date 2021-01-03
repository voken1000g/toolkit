<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <button type="button" class='button-flyout' @click.stop='toggleFlyout'>
      {{ $t('nav.Messenger') }}
    </button>

    <!-- Flyout menu -->
    <div v-show='$store.state.nav.flyoutMessenger'
         class="absolute z-10 left-0 transform -translate-x-0 mt-2 px-2 w-screen max-w-md sm:px-0 transition duration-200 ease-in-out"
    >
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div class="flyout-items relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
          <nuxt-link v-for='link in helperLinks' :key='link.path' :to='localePath(link.path)'>
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
import messengerLinks from '~/utils/constants/messengerLinks'

export default {
  name: 'FlyoutMessenger',
  data() {
    return {
      helperLinks: messengerLinks
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
.button-flyout {
  @apply px-3 py-2 rounded-md text-sm font-medium leading-5 text-indigo-300;
}

.button-flyout:hover {
  @apply text-white bg-indigo-700;
}

.button-flyout:focus {
  @apply outline-none;
}

.flyout-items a {
  @apply -m-3 p-3 flex items-start rounded-lg;
  @apply transition ease-in-out duration-150;
}

.flyout-items a.nuxt-link-exact-active {
  @apply bg-indigo-50;
}

.flyout-items a:hover {
  @apply bg-indigo-100;
}

.flyout-items a .div-icon {
  @apply mt-1 flex-shrink-0 h-8 w-8 flex items-center justify-center text-3xl text-indigo-600;
}

.item-title {
  @apply text-base font-medium text-gray-900;
}

.item-description {
  @apply mt-1 text-sm text-gray-500;
}
</style>
