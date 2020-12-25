<template>
  <LayoutW class='pb-16'>
    <h1 class='my-8 lg:my-12 2xl:my-16 text-2xl lg:text-3xl text-indigo-600 text-center'>
      @voken/base32
    </h1>

    <div class='flex flex-col space-x-0 space-y-4 lg:flex-row lg:space-x-3 lg:space-y-0'>
      <div class='flex-1' :class="{ 'error': encodeError }">
        <label for='decoded'>
          Base32 Decoded (utf-8)
        </label>

        <div class='relative'>
          <textarea name='decoded'
                    id='decoded'
                    class='mt-2 w-full form-textarea text-sm md:text-base lg:text-lg'
                    rows='20'
                    v-model='decoded'
                    placeholder='Sample'></textarea>

          <div class='absolute bottom-4 w-full font-mono text-gray-500 text-center'>
            Input here to auto encode...
          </div>
        </div>
      </div>

      <div class='flex-1 relative' :class="{ 'error': decodeError }">
        <label for='encoded'>
          Base32 Encoded (checksum)
        </label>

        <div class='relative'>
          <textarea name='encoded'
                    id='encoded'
                    class='mt-2 w-full form-textarea text-sm md:text-base lg:text-lg'
                    rows='20'
                    v-model='encoded'
                    placeholder='AdGPtv3Ccm'></textarea>

          <div class='absolute bottom-4 w-full font-mono text-gray-500 text-center'>
            Input here to auto decode...
          </div>
        </div>
      </div>
    </div>

    <div class='my-2 md:my-3 lg:my-4 lg:text-lg xl:text-xl text-red-700'
         v-show='exception'
    >
      <div v-show='encodeError'>
        Encoded input:
      </div>
      <div v-show='decodeError'>
        Decoded input:
      </div>
      <div class='mt-2 px-2 md:px-3 lg:px-4'>
        {{ exception }}
      </div>
    </div>

    <div class='mt-8 lg:mt-12 pt-4 lg:pt-6 border-t border-gray-300 font-mono text-gray-600 text-center'>
      <div>
        <span>
          Documentation:
        </span>
        <a target='_blank' href='https://voken.io/en/npm/base32.html'>
          https://voken.io/en/npm/base32.html
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
    </div>
  </LayoutW>
</template>

<script>
import Base32 from '@voken/base32'
import LayoutW from '~/components/LayoutW'

export default {
  name: 'base32',
  components: { LayoutW },
  layout: 'middleCenter',
  data() {
    return {
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
.error {
  @apply text-red-700;
}

.error label {
  @apply font-bold;
}

.error textarea {
  @apply bg-red-50 border-red-600 text-red-600;
}

.error textarea:focus {
  @apply border-red-500 shadow-outline-red;
}

a {
  @apply text-indigo-700;
}

a:hover {
  @apply text-indigo-500;
}
</style>
