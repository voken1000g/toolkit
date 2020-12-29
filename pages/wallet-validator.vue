<template>
  <layout-w class='pb-36'>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
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
    </layout-w-prose>

    <div class='w-full md:max-w-2xl mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base'
         :class='addressStatus'
    >
      <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
        <img v-show='isAddress' :src='avatar.svgDataUriFromSeed(address)' alt='address avatar'>
        <div v-show='!isAddress'
             class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
             :class='{ "text-red-300": addressStatus === "error"}'
        >
          <fa v-show='!address' :icon="['fas', 'seedling']" />
          <fa v-show='address && !isAddress' :icon="['fas', 'times']" />
        </div>
      </div>

      <label for='address'
             class='block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left'>
        {{ $t('wallet.VOKEN_wallet_address') }}
      </label>

      <input type='text'
             name='address'
             id='address'
             class='input-indigo w-full mt-1 py-3 px-6 font-mono text-sm md:text-base'
             v-model='address'
             :placeholder='$t("wallet.Input_here_to_auto_verify_")'>
    </div>
  </layout-w>
</template>

<script>
import vokenAddress from '@voken/address'
import avatar from '@voken/avatar'
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'

export default {
  name: 'wallet-validator',
  components: { LayoutWProse, LayoutW },
  layout: 'centerIndigo',
  data() {
    return {
      avatar: avatar,
      address: ''
    }
  },
  computed: {
    isAddress() {
      return this.addressStatus === "success"
    },
    addressStatus() {
      if (this.address) {
        if (vokenAddress.isAddress(this.address)) {
          return 'success'
        } else {
          return 'error'
        }
      }

      return null
    }
  }
}
</script>
