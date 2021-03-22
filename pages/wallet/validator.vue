<template>
  <div class='resp-wide pb-72'>
    <article class='resp-mt prose lg:prose-lg xl:prose-xl max-w-none'>
      <h1>
        {{ $t('nav.Wallet_Validator') }}
      </h1>

      <p>
        {{ $t('wallet.A_valid_VOKEN_wallet_address_is_') }}
      </p>
      <ul>
        <li>
          {{ $t('wallet.Starts_with_a_lowercase') }} <code>v</code>
        </li>
        <li>
          {{ $t('wallet._33_characters') }}
        </li>
        <li>
          {{ $t('wallet.Base32_encoded_') }}{{ $t('wallet.by') }}
          <a target='_blank' href='https://voken.io/en/latest/npm/base32.html'>@voken/base32</a>
        </li>
        <li>
          {{ $t('wallet.Looks_like_') }}<code>vXKJe8F9T7hJ8kr1Dddg9b83eufmU6h2k</code>
        </li>
      </ul>
    </article>

    <div class='w-full md:max-w-2xl mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base'
         :class='{ "success": address && isAddress, "error": address && !isAddress }'
    >
      <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
        <vue-avatar v-show='isAddress' :value='address'/>
        <div v-show='!isAddress'
             class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
             :class='{ "text-red-300": address && !isAddress}'
        >
          <fa v-show='!address' :icon="['fas', 'seedling']"/>
          <fa v-show='address && !isAddress' :icon="['fas', 'times']"/>
        </div>
      </div>

      <label for='address-validate'
             class='block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left'>
        {{ $t('wallet.VOKEN_wallet_address') }}
      </label>

      <div class='relative mt-1'>
        <input type="text"
               id='address-validate'
               class='input-indigo w-full py-3 px-6 font-mono text-sm md:text-base'
               v-model='address'
               :placeholder='$t("wallet.Input_here_to_auto_verify_")'/>

        <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
          <fa class='fa-error' :icon="['fas', 'times']"/>
          <fa class='fa-success' :icon="['fas', 'check']"/>
          <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import vokenAddress from '@voken/address'
import VueAvatar from '@voken/vue-avatar'

export default {
  name: 'wallet-validator',
  layout: 'indigoRipple',
  components: {VueAvatar},
  head() {
    return {
      title: this.$t('nav.Wallet_Validator')
    }
  },
  data() {
    return {
      address: ''
    }
  },
  computed: {
    isAddress() {
      return vokenAddress.isAddress(this.address)
    }
  }
}
</script>
