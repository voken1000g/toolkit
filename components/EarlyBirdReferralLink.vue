<template>
  <layout-bg-a class="py-16 lg:py-24">
    <div class="resp-wide">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {{ $t('earlyBird.referral.Referral_Link') }}
          </h2>
        </div>
      </div>

      <div v-show="vokenAddressReady" class="resp-mt mx-auto max-w-md flex items-center justify-center">
        <div class="w-1/2">
          <vue-qr class="border-cool-gray-300 border"
                  :text="referralLink"
                  :size=640
                  :margin=32
                  colorDark="#27303f"/>
        </div>
      </div>

      <div class="resp-mt mx-auto max-w-3xl">
        <label for='referral-link'></label>
        <input type='text'
               id='referral-link'
               ref="referral-link"
               :value="referralLink"
               class='input-indigo w-full py-3 px-4 font-mono text-sm md:text-base'
               placeholder='Please set your Voken address' readonly @click="copyReferralLink" />

        <div v-if="vokenAddressReady" class="mt-8 max-w-sm mx-auto">
          <button class="w-full btn btn-pink justify-center py-2 text-lg text-center break-normal"
                  @click="copyReferralLink"
          >
            {{ $t('earlyBird.referral.Copy') }}
          </button>
        </div>
        <div v-else class="mt-8 max-w-md mx-auto">
          <nuxt-link :to="localePath('/wallet/bind')"
                     class="w-full btn btn-pink justify-center py-2 text-lg text-center break-normal"
          >
            {{ $t('nav.Wallet_Bind') }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </layout-bg-a>
</template>

<script>
import VueQr from 'vue-qr'

export default {
  name: "EarlyBirdReferralLink",
  components: {VueQr},
  computed: {
    vokenAddressReady() {
      return this.$store.state.voken.account.vokenInt > '0'
    },
    referralLink() {
      if (this.vokenAddressReady) {
        return 'https://get.voken.io/r=' + this.$store.state.voken.account.vokenAddress
      }

      return ''
    },
  },
  methods: {
    copyReferralLink() {
      this.$refs['referral-link'].select()

      if (document.execCommand('copy')) {
        this.$toast.success('Copied')
      } else {
        this.$toast.error('Copy Failed')
      }
    },
  }
}
</script>

<style scoped>

</style>
