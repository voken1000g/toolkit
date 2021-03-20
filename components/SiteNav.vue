<template>
  <nav class='nav bg-indigo-800'>
    <div class='resp-wide border-b border-indigo-700'>
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
              <svg v-show="!$store.state.nav.menuMobile" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>

              <!-- Icon when menu is open. -->
              <svg v-show="$store.state.nav.menuMobile" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Logo -->
          <nuxt-link :to="localePath('/')" class="flex-shrink-0 flex items-center space-x-4">
            <div class="text-indigo-300 text-3xl">
              <fa :icon="home.icon"/>
            </div>
            <div class="hidden lg:block font-sans text-indigo-300 text-2xl">
              {{ $t('nav.' + home.title ) }}
            </div>
          </nuxt-link>

          <!-- navigations -->
          <div class="hidden md:pl-4 md:flex md:items-center md:space-x-1">
            <flyout-wallet/>
            <flyout-messenger/>

            <nuxt-link v-for="link in navigations"
                       :key='link.path'
                       :to='localePath(link.path)'
                       class="nav-h"
            >
              {{ $t('nav.' + link.title) }}
            </nuxt-link>
          </div>
        </div>

        <!-- Right -->
        <div class="flex items-center space-x-4 lg:space-x-6">
          <flyout-user/>


          <!-- Ethereum Account Address / Network -->
          <nuxt-link :to="localePath('/overview')" v-if="!fnEthereum.isZeroAddress($store.state.ether.account)" class="eth-account flex-1 flex items-center justify-center">
            <div
              :class="{'eth-account-prod': $store.state.ether.productionMode, 'eth-account-test': !$store.state.ether.productionMode}"
            >
              {{ fnEthereum.address2Abbr($store.state.ether.account) }}
            </div>
            <div v-if="!$store.state.ether.productionMode"
                 class="eth-test-net"
            >
              {{ fnEthereum.chainId2NetworkName($store.state.ether.chainId) }}
            </div>
          </nuxt-link>

          <!-- GitHub -->
          <div class='hidden lg:block'>
            <a target='_blank' href='https://github.com/voken1000g/toolkit' class='text-3xl text-indigo-300 hover:text-white'>
              <fa :icon="['fab', 'github']"/>
            </a>
          </div>

          <!-- Language -->
          <div class="flex-shrink-0 flex items-center">
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
                  <fa :icon="['fas', 'globe-americas']"/>
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
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden"
         :class="{ block: $store.state.nav.menuMobile, hidden: !$store.state.nav.menuMobile }">

      <!-- Navigations -->
      <div class="p-3">
        <nuxt-link v-for='link in walletLinks'
                   :key='link.path'
                   :to='localePath(link.path)'
                   class="nav-v"
        >
          {{ $t(link.titleMobi) }}
        </nuxt-link>


        <nuxt-link v-for='link in messengerLinks'
                   :key='link.path'
                   :to='localePath(link.path)'
                   class="nav-v"
        >
          {{ $t(link.titleMobi) }}
        </nuxt-link>

        <nuxt-link v-for="link in navigations"
                   :key='link.path'
                   :to='localePath(link.path)'
                   class="nav-v"
        >
          {{ $t('nav.' + link.titleMobi) }}
        </nuxt-link>
      </div>

      <!-- Links -->
      <div class="p-3 border-t border-indigo-700">
<!--        <a target='_blank' href='https://github.com/voken1000g/toolkit' class='nav-v'>-->
<!--          GitHub-->
<!--        </a>-->
        <nuxt-link v-for="lang in languages"
                   :key="lang.code"
                   v-if="$i18n.locale !== lang.code"
                   class="nav-v"
                   :to="switchLocalePath(lang.code)">
          {{ lang.title }}
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import home from '~/utils/constants/home'
import FlyoutWallet from '~/components/FlyoutWallet'
import locales from '~/utils/constants/locales'
import navigations from '~/utils/constants/navigations'
import walletLinks from '~/utils/constants/walletLinks'
import messengerLinks from '~/utils/constants/messengerLinks'
import fnEthereum from '~/utils/fnEthereum'

export default {
  name: 'SiteNav',
  components: {FlyoutWallet},
  data() {
    return {
      languages: locales,
      navigations: navigations,
      walletLinks: walletLinks,
      messengerLinks: messengerLinks,
    }
  },
  computed: {
    home() {
      return home()
    },
    fnEthereum() {
      return fnEthereum
    },
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
