<template>
  <layout-w class='pb-36'>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        {{ $t('nav.Wallet_Private_Key') }}
      </h1>

      <p class='text-red-600'>
        <span class='text-5xl'>
          <fa :icon="['fas', 'lock']" />
        </span>
        <br>
        {{ $t('wallet.You_should_always_keep_your_Private_Key_safe_') }}<b>{{ $t('wallet.Never_disclose_it_to_anyone') }}</b>
      </p>
    </layout-w-prose>

    <div class='w-full mt-12 lg:mt-14 xl:mt-16 2xl:mt-20 mx-auto font-mono text-sm md:text-base'>

      <div class='space-y-10 lg:space-y-0 lg:flex lg:items-end lg:justify-center lg:space-x-8'>
        <div
          class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto lg:mx-0 bg-white rounded-md shadow-md lg:shadow-lg'>
          <vue-avatar v-show='isAddress' :value='address'/>
          <div v-show='!isAddress'
               class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
          >
            <fa v-show='!isAddress' :icon="['fas', 'seedling']" />
          </div>
        </div>

        <!-- address -->
        <div class='w-full lg:max-w-2xl'>
          <label for='private-key-converter-address'
                 class='font-medium text-gray-700 text-left'>
            {{ $t('wallet.VOKEN_Address') }}
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='private-key-converter-address'
                   class='input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500'
                   v-model='address'
                   :placeholder='$t("wallet.Auto_Convert_")'
                   readonly />
          </div>
        </div>
      </div>

      <!-- vpriv -->
      <div class='mt-12 md:mt-14 lg:mt-16' :class='vprivClass'>
        <label for='private-key-converter-vpriv' class='font-medium text-gray-700 text-left'>
          {{ vprivLabel }}
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='private-key-converter-vpriv'
                 class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base'
                 v-model='vpriv'
                 placeholder='vpriv...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
          </div>
        </div>
      </div>

      <!-- privateKey -->
      <div class='mt-4 md:mt-6 lg:mt-8' :class='privateKeyClass'>
        <label for='private-key-converter-privateKey' class='font-medium text-gray-700 text-left'>
          {{ privateKeyLabel }}
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='private-key-converter-privateKey'
                 class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-sm md:text-base'
                 v-model='hexPrivateKey'
                 placeholder='0...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
          </div>
        </div>
      </div>

      <div class='my-12 md:my-14 lg:my-16 border-t border-gray-300' />

      <layout-w-prose>
        <p class='text-green-500'>
          <fa :icon="['fas', 'shield-alt']" />
          {{ $t('wallet.Sending_a_Public_Key_is_safe') }}
        </p>
      </layout-w-prose>

      <!-- vpub -->
      <div class='mt-4 md:mt-6 lg:mt-8' :class='vpubClass'>
        <label for='private-key-converter-vpub' class='font-medium text-gray-700 text-left'>
          {{ vpubLabel }}
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='private-key-converter-vpub'
                 class='input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500'
                 v-model='vpub'
                 :placeholder='$t("wallet.Auto_Convert_")'
                 readonly />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
          </div>
        </div>
      </div>

      <!-- Public Key Compressed -->
      <div class='mt-4 md:mt-6 lg:mt-8' :class='hexPublicKeyCompressedClass'>
        <label for='private-key-converter-public-key-compressed' class='font-medium text-gray-700 text-left'>
          {{ hexPublicKeyCompressedLabel }}
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='private-key-converter-public-key-compressed'
                 class='input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500'
                 v-model='hexPublicKeyCompressed'
                 :placeholder='$t("wallet.Auto_Convert_")'
                 readonly />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
          </div>
        </div>
      </div>

      <!-- Public Key Decompressed -->
      <div class='mt-4 md:mt-6 lg:mt-8' :class='hexPublicKeyUncompressedClass'>
        <label for='private-key-converter-public-key-decompressed' class='font-medium text-gray-700 text-left'>
          {{ hexPublicKeyUncompressedLabel }}
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='private-key-converter-public-key-decompressed'
                 class='input-indigo w-full py-3 px-4 bg-gray-100 font-mono text-sm md:text-base text-gray-500'
                 v-model='hexPublicKeyUncompressed'
                 :placeholder='$t("wallet.Auto_Convert_")'
                 readonly />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
          </div>
        </div>
      </div>
    </div>
  </layout-w>
</template>

<script>
import vokenAddress from '@voken/address'
import privateKey from '@voken/private-key'
import publicKey from '@voken/public-key'
import VueAvatar from '@voken/vue-avatar'
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'

export default {
  name: 'wallet-private-key',
  layout: 'wallet',
  components: { LayoutWProse, LayoutW, VueAvatar },
  head() {
    return {
      title: this.$t('nav.Wallet_Private_Key')
    }
  },
  data() {
    return {
      vpriv: '',
      vprivError: '',
      bufPrivateKey: Buffer.from(''),
      hexPrivateKey: '',
      hexPrivateKeyError: '',

      vpubError: '',
      hexPublicKeyCompressedError: '',
      hexPublicKeyUncompressedError: ''
    }
  },
  watch: {
    vpriv() {
      if (this.vpriv) {
        try {
          this.bufPrivateKey = privateKey.fromVPriv(this.vpriv)
          this.hexPrivateKey = this.bufPrivateKey.toString('hex')

          this.vprivError = ''
        } catch (e) {
          this.vprivError = e.message

          this.hexPrivateKey = ''
        }
      } else {
        this.vprivError = ''

        this.bufPrivateKey = Buffer.from('')
      }
    },

    hexPrivateKey() {
      if (this.hexPrivateKey) {
        try {
          this.bufPrivateKey = Buffer.from(this.hexPrivateKey, 'hex')
          this.vpriv = privateKey.toVPriv(this.bufPrivateKey)

          this.hexPrivateKeyError = ''
        } catch (e) {
          this.hexPrivateKeyError = e.message

          this.vpriv = ''
        }
      } else {
        this.hexPrivateKeyError = ''

        this.bufPrivateKey = Buffer.from('')
      }
    }
  },
  computed: {
    address() {
      if (this.bufPublicKeyCompressed.length === 33) {
        try {
          this.hexPublicKeyCompressedError = ''
          return vokenAddress.fromPublicKey(this.bufPublicKeyCompressed)
        } catch (e) {
          this.hexPublicKeyCompressedError = e.message
        }
      }

      return ''
    },

    // vpriv
    vprivClass() {
      if (this.vpriv) {
        if (this.vprivError) {
          return 'error'
        }

        if (this.hexPublicKeyCompressedError || this.hexPublicKeyUncompressedError || this.vpubError) {
          return 'error'
        }

        return 'success'
      }

      return null
    },
    vprivLabel() {
      if (this.vprivClass === 'error') {
        return this.$t('wallet.VOKEN_Private_Key__') + ' ' + this.vprivError
      }

      return this.$t('wallet.VOKEN_Private_Key__')
    },

    // privateKey
    privateKeyClass() {
      if (this.hexPrivateKey) {
        if (this.hexPrivateKeyError) {
          return 'error'
        }

        if (this.hexPublicKeyCompressedError || this.hexPublicKeyUncompressedError || this.vpubError) {
          return 'error'
        }

        return 'success'
      }

      return null
    },
    privateKeyLabel() {
      if (this.privateKeyClass === 'error') {
        return this.$t('wallet.Private_Key_in_HEX') + ' ' + this.hexPrivateKeyError
      }

      return this.$t('wallet.Private_Key_in_HEX')
    },

    // public key compressed
    bufPublicKeyCompressed() {
      if (this.bufPrivateKey.length === 32) {
        try {
          return publicKey.fromPrivateKey(this.bufPrivateKey)
        } catch (e) {
          console.error('bufPublicKeyCompressed:', e)
        }
      }

      return Buffer.from('')
    },
    hexPublicKeyCompressed() {
      if (this.bufPublicKeyCompressed.length === 33) {
        return this.bufPublicKeyCompressed.toString('hex')
      }

      return ''
    },
    hexPublicKeyCompressedClass() {
      if (this.hexPublicKeyCompressed) {
        if (this.hexPublicKeyCompressedError) {
          return 'error'
        }
      }

      return null
    },
    hexPublicKeyCompressedLabel() {
      if (this.hexPublicKeyCompressedClass === 'error') {
        return this.$t('wallet.Compressed_Public_Key_in_HEX') + ' ' + this.hexPublicKeyCompressedError
      }

      return this.$t('wallet.Compressed_Public_Key_in_HEX')
    },


    // vpub
    vpub() {
      if (this.bufPublicKeyCompressed.length === 33) {
        try {
          this.hexPublicKeyCompressedError = ''
          return publicKey.toVPub(this.bufPublicKeyCompressed)
        } catch (e) {
          this.hexPublicKeyCompressedError = e.message
        }
      }

      return ''
    },

    vpubClass() {
      if (this.vpub) {
        if (this.vpubError) {
          return 'error'
        }
      }

      return null
    },
    vpubLabel() {
      if (this.vpubClass === 'error') {
        return this.$t('wallet.VOKEN_Public_Key__') + ' ' + this.vpubError
      }

      return this.$t('wallet.VOKEN_Public_Key__')
    },


    // public key decompressed
    bufPublicKeyUncompressed() {
      if (this.bufPublicKeyCompressed.length === 33) {
        try {
          this.hexPublicKeyCompressedError = ''
          return publicKey.decompress(this.bufPublicKeyCompressed)
        } catch (e) {
          console.error('bufPublicKeyUncompressed:', e)
          this.hexPublicKeyCompressedError = e.message
        }
      }

      return Buffer.from('')
    },
    hexPublicKeyUncompressed() {
      if (this.bufPublicKeyUncompressed.length === 65) {
        return this.bufPublicKeyUncompressed.toString('hex')
      }

      return ''
    },
    hexPublicKeyUncompressedClass() {
      if (this.hexPublicKeyUncompressed) {
        if (this.hexPublicKeyUncompressedError) {
          return 'error'
        }
      }

      return null
    },
    hexPublicKeyUncompressedLabel() {
      if (this.hexPublicKeyUncompressedClass === 'error') {
        return this.$t('wallet.Uncompressed_Public_Key_in_HEX') + ' ' + this.hexPublicKeyUncompressedError
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
