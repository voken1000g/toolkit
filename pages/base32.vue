<template>
  <layout-w class='pb-36'>
    <h1 class='my-8 lg:my-12 2xl:my-16 text-2xl lg:text-3xl text-indigo-600 text-center'>
      npm: @voken/base32
    </h1>

    <div class='flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0'>
      <div class='flex-1' :class='{ "error": encodeError }'>
        <label for='decoded'>
          {{ $t('base32.Input_here_to_auto_encode_') }}
        </label>

        <textarea name='decoded'
                  id='decoded'
                  class='mt-2 w-full form-textarea font-mono text-sm md:text-base lg:text-lg'
                  rows='20'
                  v-model='decoded'
                  :placeholder='$t("base32.Sample")'></textarea>
      </div>

      <div class='flex-1' :class='{ "error": decodeError }'>
        <label for='encoded'>
          {{ $t('base32.Input_here_to_auto_decode_') }}
        </label>

        <textarea name='encoded'
                  id='encoded'
                  class='mt-2 w-full form-textarea font-mono text-sm md:text-base lg:text-lg'
                  rows='20'
                  v-model='encoded'
                  :placeholder='Base32.encode(Buffer.from($t("base32.Sample")))'></textarea>
      </div>
    </div>

    <div class='my-2 md:my-3 lg:my-4 lg:text-lg xl:text-xl text-red-700'
         v-show='exception'
    >
      <div v-show='encodeError'>
        {{ $t('base32.Encoded_input_') }}
      </div>
      <div v-show='decodeError'>
        {{ $t('base32.Decoded_input_') }}
      </div>
      <div class='mt-2 px-2 md:px-3 lg:px-4'>
        {{ exception }}
      </div>
    </div>

    <layout-footer-simple class='font-mono text-gray-600 text-center'>
      <div>
        <span>
          {{ $t('base32.Documentation.text') }}
        </span>
        <a class='a-indigo' target='_blank' :href='$t("base32.Documentation.href")'>
          {{ $t('base32.Documentation.href') }}
        </a>
      </div>

      <div class='mt-2'>
        <span>
          npm:
        </span>
        <a target='_blank' href='https://www.npmjs.com/package/@voken/base32'>
          https://www.npmjs.com/package/@voken/base32
        </a>
      </div>

      <div class='mt-2'>
        <span>
          GitHub:
        </span>
        <a target='_blank' href='https://github.com/voken1000g/npm-base32'>
          https://github.com/voken1000g/npm-base32
        </a>
      </div>
    </layout-footer-simple>
  </layout-w>
</template>

<script>
import { Buffer } from 'safe-buffer'
import Base32 from '@voken/base32'
import LayoutW from '~/components/LayoutW'
import LayoutFooterSimple from '~/components/LayoutFooterSimple'

export default {
  name: 'base32',
  components: { LayoutFooterSimple, LayoutW },
  layout: 'centerIndigo',
  data() {
    return {
      Buffer: Buffer,
      Base32: Base32,
      decoded: '',
      encoded: '',
      exception: null,
      decodeError: false,
      encodeError: false
    }
  },
  watch: {
    decoded() {
      this.encodeError = false
      this.decodeError = false
      this.exception = null

      if (this.decoded) {
        try {
          this.encoded = Base32.encode(Buffer.from(this.decoded))
        } catch (e) {
          this.encodeError = true
          this.exception = e.message
        }
      } else {
        this.encoded = ''
      }
    },
    encoded() {
      this.encodeError = false
      this.decodeError = false
      this.exception = null

      if (this.encoded) {
        try {
          this.decoded = Base32.decode(this.encoded)
        } catch (e) {
          this.decodeError = true
          this.exception = e.message
        }
      } else {
        this.decoded = ''
      }
    }
  }
}
</script>

<style scoped>
a {
  @apply text-indigo-700;
}

a:hover {
  @apply text-indigo-500;
}
</style>
