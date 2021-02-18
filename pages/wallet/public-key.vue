<template>
  <layout-w class='pb-36'>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        {{ $t('nav.Wallet_Public_Key') }}
      </h1>

      <p class='text-green-500'>
        <span class='text-5xl'>
          <fa :icon="['fas', 'shield-alt']" />
        </span>
        <br>
        {{ $t('wallet.All_items_on_this_page_are_secure__') }}
      </p>
    </layout-w-prose>

    <div class='w-full mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base'>

      <div class='space-y-10 lg:space-y-0 lg:flex lg:items-end lg:justify-center lg:space-x-8'>
        <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto lg:mx-0 bg-white rounded-md shadow-md lg:shadow-lg'>
          <vue-avatar v-show='isAddress' :value='address'/>
          <div v-show='!isAddress'
               class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
          >
            <fa v-show='!isAddress' :icon="['fas', 'seedling']" />
          </div>
        </div>

        <!-- address -->
        <div class='w-full lg:max-w-2xl'>
          <label for='public-key-converter-address'
                 class='font-medium text-gray-700 text-left'>
            {{ $t('wallet.VOKEN_Address') }}
          </label>

          <div class='relative mt-1'>
            <input type="text"
                   id='public-key-converter-address'
                   class='input-indigo w-full py-3 px-4 font-mono text-sm md:text-base text-gray-500'
                   v-model='address'
                   :placeholder='$t("wallet.Auto_Convert_")'
                   readonly disabled />
          </div>
        </div>
      </div>

      <!-- vpub -->
      <div class='mt-12 md:mt-14 lg:mt-16' :class='vpubClass'>
        <label for='public-key-converter-vpub' class='font-medium text-gray-700 text-left'>
          {{ vpubLabel }}
        </label>

        <div class='relative mt-1'>
          <input type="text"
                 id='public-key-converter-vpub'
                 class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base'
                 v-model='vpub'
                 placeholder='vpub...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
          </div>
        </div>
      </div>

      <!-- Public Key Compressed -->
      <div class='mt-4 md:mt-6 lg:mt-8' :class='hexPublicKeyCompressedClass'>
        <label for='public-key-converter-public-key-compressed' class='font-medium text-gray-700 text-left'>
          {{ hexPublicKeyCompressedLabel }}
        </label>

        <div class='relative mt-1'>
          <input type="text"
                 id='public-key-converter-public-key-compressed'
                 class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base'
                 v-model='hexPublicKeyCompressed'
                 placeholder='02/03...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
          </div>
        </div>
      </div>

      <!-- Public Key Decompressed -->
      <div class='mt-4 md:mt-6 lg:mt-8' :class='hexPublicKeyDecompressedClass'>
        <label for='public-key-converter-public-key-decompressed' class='font-medium text-gray-700 text-left'>
          {{ hexPublicKeyDecompressedLabel }}
        </label>

        <div class='relative mt-1'>
          <input type="text"
                 id='public-key-converter-public-key-decompressed'
                 class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base'
                 v-model='hexPublicKeyUncompressed'
                 placeholder='04...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
          </div>
        </div>
      </div>

    </div>
  </layout-w>
</template>

<script>
import vokenAddress from '@voken/address'
import publicKey from '@voken/public-key'
import VueAvatar from '@voken/vue-avatar'
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'

export default {
  name: 'wallet-public-key',
  layout: 'wallet',
  components: { LayoutWProse, LayoutW, VueAvatar },
  head() {
    return {
      title: this.$t('nav.Wallet_Public_Key')
    }
  },
  data() {
    return {
      address: '',

      vpub: '',
      vpubError: '',

      bufPublicKeyCompressed: null,
      hexPublicKeyCompressed: '',
      hexPublicKeyCompressedError: '',

      bufPublicKeyUncompressed: null,
      hexPublicKeyUncompressed: '',
      hexPublicKeyUncompressedError: '',

    }
  },
  watch: {
    vpub() {
      if (this.vpub) {
        try {
          this.bufPublicKeyCompressed = publicKey.fromVPub(this.vpub)
          this.address = vokenAddress.fromPublicKey(this.bufPublicKeyCompressed)
          this.hexPublicKeyCompressed = this.bufPublicKeyCompressed.toString('hex')

          this.vpubError = ''
        } catch (e) {
          this.vpubError = e.message

          this.address = ''

          this.bufPublicKeyCompressed = null
          this.hexPublicKeyCompressed = ''
          this.hexPublicKeyCompressedError = ''

          this.bufPublicKeyUncompressed = null
          this.hexPublicKeyUncompressed = ''
          this.hexPublicKeyUncompressedError = ''
        }
      } else {
        this.vpubError = ''
        this.address = ''
      }
    },

    hexPublicKeyCompressed() {
      if (this.hexPublicKeyCompressed) {
        try {
          this.bufPublicKeyCompressed = Buffer.from(this.hexPublicKeyCompressed, 'hex')
          this.bufPublicKeyUncompressed = publicKey.decompress(this.bufPublicKeyCompressed)

          this.vpub = publicKey.toVPub(this.bufPublicKeyCompressed)
          this.hexPublicKeyUncompressed = this.bufPublicKeyUncompressed.toString('hex')
          this.hexPublicKeyCompressedError = ''
        } catch (e) {
          this.bufPublicKeyCompressed = null
          this.hexPublicKeyCompressedError = e.message

          this.address = ''

          this.vpub = ''
          this.vpubError = ''

          this.bufPublicKeyUncompressed = null
          this.hexPublicKeyUncompressed = ''
          this.hexPublicKeyUncompressedError = ''
        }

      } else {
        this.bufPublicKeyCompressed = null
        this.hexPublicKeyCompressedError = ''
      }
    },

    hexPublicKeyUncompressed() {
      if (this.hexPublicKeyUncompressed) {
        try {
          this.bufPublicKeyUncompressed = Buffer.from(this.hexPublicKeyUncompressed, 'hex')
          this.bufPublicKeyCompressed = publicKey.compress(this.bufPublicKeyUncompressed)
          this.vpub = publicKey.toVPub(this.bufPublicKeyCompressed)
          this.hexPublicKeyUncompressedError = ''
        } catch (e) {
          this.bufPublicKeyUncompressed = null
          this.hexPublicKeyUncompressedError = e.message

          this.address = ''

          this.vpub = ''
          this.vpubError = ''

          this.bufPublicKeyCompressed = null
          this.hexPublicKeyCompressed = ''
          this.hexPublicKeyCompressedError = ''
        }
      } else {
        this.bufPublicKeyUncompressed = null
        this.hexPublicKeyUncompressedError = ''
      }
    }
  },
  computed: {
    // vpub
    vpubClass() {
      if (this.vpub) {
        if (this.vpubError) {
          return 'error'
        }

        return 'success'
      }

      return null
    },
    vpubLabel() {
      if (this.vpubClass === 'error') {
        return this.vpubError
      }

      return this.$t('wallet.VOKEN_Public_Key__')
    },

    // public key compressed
    hexPublicKeyCompressedClass() {
      if (this.hexPublicKeyCompressed) {
        if (this.hexPublicKeyCompressedError) {
          return 'error'
        }

        return 'success'
      }

      return null
    },
    hexPublicKeyCompressedLabel() {
      if (this.hexPublicKeyCompressedClass === 'error') {
        return this.hexPublicKeyCompressedError
      }

      return this.$t('wallet.Compressed_Public_Key_in_HEX')
    },

    // public key decompressed
    hexPublicKeyDecompressedClass() {
      if (this.hexPublicKeyUncompressed) {
        if (this.hexPublicKeyUncompressedError) {
          return 'error'
        }

        return 'success'
      }

      return null
    },
    hexPublicKeyDecompressedLabel() {
      if (this.hexPublicKeyDecompressedClass === 'error') {
        return this.hexPublicKeyUncompressedError
      }

      return this.$t('wallet.Uncompressed_Public_Key_in_HEX')
    },

    // address
    isAddress() {
      return vokenAddress.isAddress(this.address)
    }
  }
}
</script>
