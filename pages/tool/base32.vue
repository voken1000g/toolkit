<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('nav.Base32') }}
      </template>

      <template #text>
        {{ $t('nav.Base32_') }}
      </template>
    </layout-hero-simple>

    <div class='resp-wide pb-12'>
      <div
        class='mt-10 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0'>
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
    </div>
  </div>
</template>

<script>
import Base32 from '@voken/base32'

export default {
  name: 'base32',
  layout: 'indigoBubble',
  head() {
    return {
      title: this.$t('nav.Base32')
    }
  },
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
