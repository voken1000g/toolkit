<template>
  <nav class='bg-indigo-800'>
    <layout-w class='border-b border-indigo-700'>
      <div class='h-16 flex justify-between'>

        <!-- Left -->
        <div class='flex space-x-2'>
          <!-- Mobile menu button -->
          <div class='flex items-center md:hidden'>
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 focus:text-white"
              aria-label="Main menu"
              aria-expanded="false"
              @click.stop="toggleMobileMenu"
            >
              <!-- Icon when menu is closed. -->
              <svg v-show="!$store.state.nav.menuMobile" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>

              <!-- Icon when menu is open. -->
              <svg v-show="$store.state.nav.menuMobile" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Logo -->
          <nuxt-link :to="localePath('/')" class="flex-shrink-0 flex items-center space-x-4">
            <div class="text-indigo-300 text-3xl">
              <fa :icon="['fas', 'tools']" />
            </div>
            <div class="hidden lg:block font-sans text-indigo-300 text-2xl">
              VOKEN {{ $t('nav.Toolkit') }}
            </div>
          </nuxt-link>

          <!-- navigations -->
          <div class="hidden md:pl-4 md:flex md:items-center md:space-x-1">
            <flyout-wallet/>

            <template v-for="nav in navigations">
              <nuxt-link :to='localePath(nav.path)' class="nav-h">{{ $t('nav.' + nav.text) }}</nuxt-link>
            </template>
          </div>
        </div>

        <!-- Right -->
        <div class="flex items-center space-x-4 lg:space-x-6">

          <div class='text-3xl text-indigo-300'>
            <a target='_blank' href='https://github.com/voken1000g/toolkit' class='hover:text-white'>
              <fa :icon="['fab', 'github']" />
            </a>
          </div>

          <!-- Language -->
          <div class="hidden md:flex-shrink-0 md:flex md:items-center">
            <div class="relative">
              <!-- Language button -->
              <div>
                <button
                  class="flex text-3xl text-indigo-300 hover:text-white focus:outline-none focus:text-white"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                  @click.stop="toggleLangMenu"
                >
                  <fa :icon="['fas', 'globe-americas']" />
                </button>
              </div>

              <!-- Language panel -->
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div v-show="$store.state.nav.languageMenu"
                     class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50">
                  <div class="py-1 rounded-md bg-white shadow-xs"
                       role="menu"
                       aria-orientation="vertical"
                       aria-labelledby="user-menu"
                  >
                    <nuxt-link v-for="lang in languages"
                               :key="lang.code"
                               v-if="$i18n.locale !== lang.code"
                               class="profile-h"
                               :to="switchLocalePath(lang.code)">
                      {{ lang.title }}
                    </nuxt-link>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </layout-w>

    <!-- Mobile menu -->
    <div class="md:hidden"
         :class="{ block: $store.state.nav.menuMobile, hidden: !$store.state.nav.menuMobile }">

      <!-- navigations -->
      <div class="px-3 py-3">
        <nuxt-link :to='localePath("/")' class="nav-v">{{ $t('nav.Home') }}</nuxt-link>

        <nuxt-link v-for='link in walletLinks' :key='link.path' :to='localePath(link.path)' class="nav-v">{{ $t(link.title) }}</nuxt-link>

        <template v-for="nav in navigations">
          <nuxt-link :to='localePath(nav.path)' class="nav-v">{{ $t('nav.' + nav.text) }}</nuxt-link>
        </template>
      </div>

      <!-- Language -->
      <div class="py-3 border-t border-indigo-500">
        <div class="px-3">
          <nuxt-link v-for="lang in languages"
                     :key="lang.code"
                     v-if="$i18n.locale !== lang.code"
                     class="profile-v"
                     :to="switchLocalePath(lang.code)">
            {{ lang.title }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import LayoutW from '~/components/LayoutW'
import FlyoutWallet from '~/components/FlyoutWallet'
import navigations from '~/utils/constants/navigations'
import locales from '~/utils/constants/locales'
import walletLinks from '~/utils/constants/walletLinks'

export default {
  name: 'SiteNav',
  components: { FlyoutWallet, LayoutW },
  data() {
    return {
      walletLinks: walletLinks,
      navigations: navigations,
      languages: locales,
    }
  },
  computed: {
    version() {
      return this.$store.state.version
    }
  },
  methods: {
    toggleLangMenu() {
      this.$store.dispatch('nav/TOGGLE_LANGUAGE_MENU')
    },
    toggleMobileMenu() {
      this.$store.dispatch('nav/TOGGLE_MENU_MOBILE')
    }
  }
}
</script>

<style scoped>
.nav-h {
  @apply px-3 py-2 rounded-md text-sm font-medium leading-5 text-indigo-300;
}

.nav-h:hover {
  @apply text-white bg-indigo-700;
}

.nav-h:focus {
  @apply outline-none text-white bg-indigo-700;
}

.nav-h.nuxt-link-exact-active {
  @apply bg-indigo-900;
}

.nav-v {
  @apply mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-300;
}

.nav-v:first-child {
  @apply mt-0;
}

.nav-v:hover {
  @apply text-white bg-indigo-700;
}

.nav-v:focus {
  @apply outline-none text-white bg-indigo-700;
}

.nav-v.nuxt-link-exact-active {
  @apply bg-indigo-900;
}

.profile-h {
  @apply block px-4 py-2 text-sm leading-5 text-indigo-700;
}

.profile-h:hover {
  @apply bg-indigo-100;
}

.profile-h:focus {
  @apply outline-none bg-indigo-100;
}

.profile-v {
  @apply mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-400;
}

.profile-v:first-child {
  @apply mt-0;
}

.profile-v:hover {
  @apply text-white bg-indigo-700;
}

.profile-v:focus {
  @apply outline-none text-white bg-indigo-700;
}

</style>
