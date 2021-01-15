<template>
  <layout-w class='pb-12'>

    <!-- intro -->
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        {{ $t('nav.Messenger_Decode') }}
      </h1>

      <p>
        {{ $t('messenger.You_can_decode_and_verify__') }}
      </p>
    </layout-w-prose>

    <div class='my-6 border-t' />

    <!-- Decode & verify -->
    <div class='decode mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 lg:py-10 px-2 sm:px-4'>
      <h2 class='font-bold text-2xl text-gray-700 text-center'>
        {{ $t('messenger.Decrypt__Verify_A_Message') }}
      </h2>

      <div class='w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div class='w-full' :class='{ "error": fromData && fromDataError }'>
          <label for='from_message' class='text-sm'>
            {{ $t('messenger.From_encode_data') }}
          </label>

          <textarea id='from_message'
                    class='textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none'
                    rows='10'
                    v-model='fromData'
                    :placeholder='$t("messenger.Input_the_encoded_data__")'></textarea>

          <p v-show='fromDataError' class='ml-2 font-bold text-red-700'>
            {{ fromDataError }}
          </p>
        </div>

        <div v-if='bufFromDataOriginalData.length > 0' class='w-full'>
          <div v-show='boolFromDataSigVerified' class='pt-6 pb-2 break-all'>
            <div class='w-14 h-14 mx-auto bg-white rounded-md shadow-md'>
              <vue-avatar :value='strFromDataAddress'/>
            </div>

            <div class='mt-4 mx-auto'>
              <div class='text-sm text-gray-500 text-center'>
                {{ strFromDataAddress }}
              </div>
              <div class='py-4 px-6 font-bold text-gray-700 break-all'>
                {{ bufFromDataOriginalData.toString() }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- signature -->
      <div v-show='boolFromDataSigVerified' class='mt-10 lg:mt-4 px-4 flex text-green-600 space-x-4 font-mono'>
        <fa :icon="['fas', 'signature']" class='text-3xl' />

        <div>
          <div>
            {{ $t('messenger.Signature_Verification_Passed_') }}
          </div>
          <div class='mt-1 text-xs md:text-sm break-all'>
            {{ strFromDataSig }}
          </div>
        </div>
      </div>
    </div>

  </layout-w>
</template>

<script>
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'
import publicKey from '@voken/public-key'
import vokenAddress from '@voken/address'
import aes from '@voken/aes256ctr'
import base32 from '@voken/base32'
import edsv from '@voken/edsv'
import VueAvatar from '@voken/vue-avatar'

export default {
  name: 'decodes',
  layout: 'messenger',
  components: { LayoutWProse, LayoutW, VueAvatar },
  head() {
    return {
      title: this.$t('nav.Messenger')
    }
  },
  data() {
    return {
      base32: base32,

      fromData: '',
      fromDataSig: Buffer.from(''),
      fromDataPublicKey: Buffer.from(''),
      fromDataAddress: '',
      fromDataDecrypted: Buffer.from(''),

      fromDataError: ''
    }
  },
  watch: {
    fromData() {
      if (!this.fromData) {
        this.fromDataError = ''
      }
    }
  },
  computed: {
    bufFromDataDecoded() {
      if (this.fromData) {
        try {
          const bufFromDataDecoded = base32.decode(this.fromData)

          this.fromDataError = ''
          return bufFromDataDecoded
        } catch (e) {
          this.fromDataError = '[Base32 Decode Error] ' + e.message
        }
      }

      return Buffer.from('')
    },
    bufFromDataKey() {
      if (this.bufFromDataDecoded.length > 0) {
        return this.bufFromDataDecoded.slice(0, 20)
      }

      return Buffer.from('')
    },
    bufFromDataBodyEncrypted() {
      if (this.bufFromDataKey.length > 0) {
        return this.bufFromDataDecoded.slice(20)
      }

      return Buffer.from('')
    },
    bufFromDataBody() {
      if (this.bufFromDataBodyEncrypted.length > 0) {
        return aes.decrypt(this.bufFromDataBodyEncrypted, this.bufFromDataKey)
      }

      return Buffer.from('')
    },
    intFromDataSigLength() {
      if (this.bufFromDataKey.length > 0) {
        try {
          const hexFromDataSigLength = this.bufFromDataBody.slice(0, 1).toString('hex')
          const intFromDataSigLength = parseInt(hexFromDataSigLength, 16)

          this.fromDataError = ''
          return intFromDataSigLength
        } catch (e) {
          this.fromDataError = '[Parse Error] Cannot parse signature length: ' + e.message
        }
      }

      return 0
    },
    bufFromDataSig() {
      if (this.intFromDataSigLength > 0) {
        try {
          const bufFromDataSig = this.bufFromDataBody.slice(1, 1 + this.intFromDataSigLength)

          this.fromDataError = ''
          return bufFromDataSig
        } catch (e) {
          this.fromDataError = '[Slice Error] Cannot parse signature: ' + e.message
        }
      }

      return Buffer.from('')
    },
    bufFromDataPublicKey() {
      if (this.bufFromDataBody.length > 0) {
        try {
          const bufFromDataPublicKey = this.bufFromDataBody.slice(1 + this.intFromDataSigLength, 1 + this.intFromDataSigLength + 33)

          this.fromDataError = ''
          return bufFromDataPublicKey
        } catch (e) {
          this.fromDataError = '[Slice Error] Cannot parse sender\'s Public Key body: ' + e.message
        }
      }

      return Buffer.from('')
    },
    strFromDataPublicKey() {
      if (this.bufFromDataPublicKey.length === 33) {
        try {
          const strFromDataPublicKey = publicKey.toVPub(this.bufFromDataPublicKey)

          this.fromDataError = ''
          return strFromDataPublicKey
        } catch (e) {
          this.fromDataError = '[Public Key Error] Cannot convert sender\'s Public Key: ' + e.message
        }
      }

      return ''
    },
    boolFromDataSigVerified() {
      if (this.bufFromDataPublicKey.length > 0) {
        try {
          const boolFromDataSigVerified = edsv.verify(this.bufFromDataKey, this.bufFromDataSig, this.bufFromDataPublicKey)

          this.fromDataError = ''
          return boolFromDataSigVerified
        } catch (e) {
          this.fromDataError = '[Verify Signature Error] ' + e.message
        }
      }

      return false
    },
    strFromDataSig() {
      if (this.boolFromDataSigVerified > 0) {
        try {
          const strFromDataSig = base32.encode(this.bufFromDataSig)

          this.fromDataError = ''
          return strFromDataSig
        } catch (e) {
          this.fromDataError = '[Encode Error] Cannot encode the signature of the message: ' + e.message
        }
      }

      return Buffer.from('')
    },
    strFromDataAddress() {
      if (this.bufFromDataPublicKey.length === 33) {
        try {
          const strFromDataAddress = vokenAddress.fromPublicKey(this.bufFromDataPublicKey)

          this.fromDataError = ''
          return strFromDataAddress
        } catch (e) {
          this.fromDataError = '[Address Error] Cannot convert sender\'s Address: ' + e.message
        }
      }

      return ''
    },
    bufFromDataOriginalData() {
      if (this.bufFromDataBody.length > 0) {
        try {
          const bufFromDataOriginalData = this.bufFromDataBody.slice(1 + this.intFromDataSigLength + 33)

          this.fromDataError = ''
          return bufFromDataOriginalData
        } catch (e) {
          this.fromDataError = '[Slice Error] Cannot parse original message body: ' + e.message
        }
      }

      return Buffer.from('')
    }
  }
}
</script>

<style scoped>
.decode {
  @apply bg-gradient-to-br from-green-50 to-teal-300;
  @apply rounded-md shadow-md;
}

</style>
