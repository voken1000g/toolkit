<template>
  <div class="resp-wide pb-72">
    <div class="resp-mt mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ $t('web3.Welcome_Onboard') }}
      </h2>

      <p class="mt-4 sm:mt-6 lg:mt-10 px-2 sm:px-4 lg:px-6 leading-8 text-lg text-cool-gray-600 text-center">
        {{ $t('web3.Please_scan__') }}
        <span v-if="metaMaskOnBoardReady">
          {{ $t('web3.or_install__Metamask__') }}
          {{ browser.name.slice(0, 1).toUpperCase() + browser.name.slice(1).toLowerCase() }}
          {{ $t('web3.browser') }}
        </span>
        <span v-else>
          {{ $t('web3.or_visit_from__') }}
        </span>
      </p>

      <div class="resp-mt flex items-center justify-center">
        <div class="w-1/2">
          <vue-qr class="border-cool-gray-300 border"
                  :text="locationHref"
                  :size=640
                  :margin=32
                  colorDark="#27303f" />
        </div>
      </div>


      <div class="resp-mt mx-auto max-w-lg">
        <button v-if="metaMaskOnBoardReady" class="w-full btn btn-pink justify-center py-3 text-lg"
                @click="getMetaMask"
        >
          {{ $t('web3.Install') }} MetaMask {{ $t('web3.Extension') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
import MetaMaskOnboarding from '@metamask/onboarding'
import {detect} from 'detect-browser'

// $route.query.url

export default {
  name: "onboard",
  components: {VueQr},
  data() {
    return {
      locationHref: location.href
    }
  },
  computed: {
    browser() {
      return detect()
    },
    metaMaskOnBoardReady() {
      return this.browser.name === 'chrome' || this.browser.name === 'firefox'
    }
  },
  methods: {
    async getMetaMask() {
      const onBoarding = new MetaMaskOnboarding()
      onBoarding.startOnboarding()
    }
  }

}
</script>
