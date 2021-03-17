<template>
  <div class='resp-wide pb-12'>

    <!-- intro -->
    <article class='resp-mt prose lg:prose-lg xl:prose-xl max-w-none'>
      <h1>
        {{ $t('nav.Messenger_Sign') }}
      </h1>

      <p>
        {{ $t('messenger.You_can_sign_and_encode__') }}
      </p>
    </article>

    <div class='my-6 border-t' />

    <!-- initialize -->
    <div v-show='!cached && !ready' class='initialize py-4 px-2 sm:px-4'>
      <div class='font-bold text-gray-800 text-center'>
        {{ $t('messenger.Set_your_Private_Key_to_start') }}...
      </div>

      <div class='mt-6 space-y-3'>
        <div :class='{ "success": vpriv && !vprivError, "error": vpriv && vprivError }'>
          <label for='vpriv'>
            <span v-show='!vpriv || !vprivError'>
              {{ $t('messenger.Set_your_Private_Key') }}
            </span>
            <span v-show='vpriv && vprivError'>
              {{ vprivError }}
            </span>
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='vpriv'
                   class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs'
                   v-model='vpriv'
                   placeholder='vpriv...' />

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']" />
              <fa class='fa-success' :icon="['fas', 'check']" />
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
            </div>
          </div>
        </div>


        <div :class='{ "success": passwordConfirmed }'>
          <label for='password_set'>
            {{ $t('messenger.Set_a_password') }}
          </label>


          <div class='relative mt-1'>
            <input type='password'
                   id='password_set'
                   class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs'
                   v-model='passwordSet' />

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']" />
              <fa class='fa-success' :icon="['fas', 'check']" />
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
            </div>
          </div>
        </div>

        <div :class='{ "success": passwordConfirmed, "error": passwordRepeat && !passwordSame }'>
          <label for='password_repeat'>
            {{ $t('messenger.Confirm_the_password') }}
          </label>

          <div class='relative mt-1'>
            <input type='password'
                   id='password_repeat'
                   class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs'
                   v-model='passwordRepeat' />

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']" />
              <fa class='fa-success' :icon="['fas', 'check']" />
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
            </div>
          </div>
        </div>
      </div>

      <div class='mt-4 space-y-2 md:flex md:space-y-0 md:space-x-4'>
        <button type='button'
                class='w-full btn btn-pink justify-center py-3 uppercase'
                @click='start'
        >
          {{ $t('messenger.Start') }}
        </button>

        <a target='_blank'
           :href='localePath("/wallet/generator")'
           class='w-full btn justify-center py-3'
        >
          {{ $t('messenger.Visit_Generator') }}
        </a>
      </div>
    </div>

    <!-- cached ->> unlock -->
    <div v-show='cached && !ready' class='initialize py-4 px-2 sm:px-4 space-y-4'>
      <div class='font-bold text-gray-800 text-center'>
        {{ $t('messenger.Your_Private_Key_is_encrypted__') }}
      </div>

      <!-- "error": password && !passwordMatched -->
      <div :class='{ "success": passwordMatched }'>
        <label for='password'>
          {{ $t('messenger.Input_the_password_to_unlock') }}
        </label>

        <div class='relative mt-1'>
          <input type='password'
                 id='password'
                 class='input-indigo w-full py-3 pl-4 pr-9 font-mono text-xs'
                 v-model='password' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
            <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
          </div>
        </div>

        <div class='mt-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4'>
          <button type='button' class='w-full btn btn-pink justify-center py-3 uppercase' @click='unlock'>
            {{ $t('messenger.Unlock') }}
          </button>

          <button type='button' class='w-full btn btn-gray justify-center py-3 uppercase' @click='reset'>
            {{ $t('messenger.Reset') }}
          </button>
        </div>
      </div>
    </div>

    <!-- Sign & encode -->
    <div v-show='ready' class='sign mt-4 md:mt-6 lg:mt-8 xl:mt-10 py-6 lg:py-10 px-2 sm:px-4'>
      <h2 class='font-bold text-2xl text-gray-700 text-center'>
        {{ $t('messenger.Sign__Encode_A_Message') }}
      </h2>

      <div class='mt-8 w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0'>
        <div class='w-full'>
          <label for='message' class='text-sm'>
            {{ $t('messenger.Text_Message') }}
          </label>

          <textarea id='message'
                    class='textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none'
                    rows='10'
                    v-model='message'
                    :placeholder='$t("messenger.Input_the_original_message_here_")'></textarea>
        </div>

        <div class='w-full'>
          <label for='encoded_message' class='text-sm'>
            {{ $t('messenger.Encoded_data__with__') }}
          </label>

          <textarea id='encoded_message'
                    ref='encoded-message'
                    class='textarea-indigo w-full mt-1 py-3 px-4 bg-indigo-100 font-mono text-sm lg:text-base text-indigo-600 resize-none'
                    rows='10'
                    :value='strBodyEncoded'
                    readonly></textarea>
        </div>
      </div>

      <!-- signature -->
      <div v-show='bufMessageSig.length > 0' class='my-10 lg:my-4 px-4 flex text-green-600 space-x-4 font-mono'>
        <fa :icon="['fas', 'signature']" class='text-3xl' />

        <div>
          <div>
            {{ $t('messenger.Your_Signature_') }}
          </div>
          <div class='mt-1 text-xs md:text-sm break-all'>
            {{ strMessageSig }}
          </div>
        </div>
      </div>

      <div class='mt-2 sm:flex sm:justify-end'>
        <div class='w-full sm:max-w-md'>
          <button type='button' class='w-full btn btn-pink justify-center py-3 font-bold' @click='copyEncodedData'>
            {{ $t('messenger.Copy_the_encoded_data') }}
          </button>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import privateKey from '@voken/private-key'
import publicKey from '@voken/public-key'
import vokenAddress from '@voken/address'
import aes from '@voken/aes256ctr'
import sha from '@voken/sha'
import base32 from '@voken/base32'
import edsv from '@voken/edsv'

export default {
  name: 'sign',
  layout: 'indigoWave',
  head() {
    return {
      title: this.$t('nav.Messenger')
    }
  },
  data() {
    return {
      vpriv: '',
      vprivError: '',
      passwordSet: '',
      passwordRepeat: '',

      bufPrivateKey: Buffer.from(''),
      bufPrivateKeyEncrypted: Buffer.from(''),

      password: '',

      bufTestEncrypted: Buffer.from(''),

      message: ''
    }
  },
  watch: {
    vpriv() {
      try {
        const bufPrivateKey = privateKey.fromVPriv(this.vpriv)
        const bufPublicKey = publicKey.fromPrivateKey(bufPrivateKey)
        const address = vokenAddress.fromPublicKey(bufPublicKey)
        this.vprivError = ''
      } catch (e) {
        this.vprivError = e.message
      }
    }
  },
  computed: {
    passwordSame() {
      return this.passwordSet === this.passwordRepeat
    },
    passwordConfirmed() {
      return this.passwordSet && this.passwordSame
    },
    cached() {
      return (
        this.bufPrivateKeyEncrypted.length === 32
        &&
        this.bufTestEncrypted.length > 0
      )
    },

    bufPassword() {
      return Buffer.from(this.password)
    },
    passwordMatched() {
      return process.env.msgTest === aes.decrypt(this.bufTestEncrypted, this.bufPassword).toString()
    },

    bufPublicKey() {
      return this.$store.state.bufPublicKey
    },
    address() {
      return this.$store.state.address
    },

    ready() {
      return (
        this.bufPrivateKey.length === 32
        &&
        this.bufPublicKey.length === 33
        &&
        this.address
      )
    },

    bufMessage() {
      if (
        this.message
        &&
        this.ready
      ) {
        return Buffer.from(this.message)
      }

      return Buffer.from('')
    },

    bufMessageAESKey() {
      if (this.bufMessage.length > 0) {
        return sha.sha1(this.bufMessage)
      }

      return Buffer.from('')
    },

    bufMessageSig() {
      if (this.bufMessageAESKey.length > 0) {
        return edsv.sign(this.bufMessageAESKey, this.bufPrivateKey)
      }

      return Buffer.from('')
    },

    strMessageSig() {
      if (this.bufMessageSig.length > 0) {
        return base32.encode(this.bufMessageSig)
      }

      return Buffer.from('')
    },

    bufMessageSigLength() {
      if (this.bufMessageSig.length > 0) {
        return Buffer.from([this.bufMessageSig.length])
      }

      return Buffer.from('')
    },

    bufBodyAESEncrypted() {
      if (this.bufMessageSigLength.length > 0) {
        return aes.encrypt(Buffer.concat([this.bufMessageSigLength, this.bufMessageSig, this.bufPublicKey, this.bufMessage]), this.bufMessageAESKey)
      }

      return Buffer.from('')
    },

    strBodyEncoded() {
      if (this.bufBodyAESEncrypted.length > 0) {
        const body = Buffer.concat([this.bufMessageAESKey, this.bufBodyAESEncrypted])

        return base32.encode(body)
      }

      return ''
    }
  },
  mounted: async function() {
    // voken cached Private Key (encrypted)
    const cachedBufPrivateKeyEncrypted = this.getCache('bufPrivateKeyEncrypted')
    if (cachedBufPrivateKeyEncrypted) {
      this.bufPrivateKeyEncrypted = Buffer.from(cachedBufPrivateKeyEncrypted.data)
    }

    // voken cached Test Message (encrypted)
    const cachedBufTestEncrypted = this.getCache('bufTestEncrypted')
    if (cachedBufTestEncrypted) {
      this.bufTestEncrypted = Buffer.from(cachedBufTestEncrypted.data)
    }
  },
  methods: {
    /**
     * Start (init)
     */
    start() {
      if (this.vpriv) {
        if (!this.vprivError) {
          if (this.passwordSet) {
            if (this.passwordSet === this.passwordRepeat) {
              // encrypt and cache private key
              this.bufPrivateKey = privateKey.fromVPriv(this.vpriv)
              const bufPrivateKeyEncrypted = aes.encrypt(this.bufPrivateKey, Buffer.from(this.passwordSet))
              this.setCache('bufPrivateKeyEncrypted', bufPrivateKeyEncrypted)

              // public key ->> store
              const bufPublicKey = publicKey.fromPrivateKey(this.bufPrivateKey)
              this.$store.dispatch('SET_PUBLIC_KEY', bufPublicKey)

              // encrypt and cache test
              const bufTestEncrypted = aes.encrypt(Buffer.from(process.env.msgTest), Buffer.from(this.passwordSet))
              this.setCache('bufTestEncrypted', bufTestEncrypted)

              return
            }

            this.$toast.error('Please confirm the `Password`...')
            return
          }

          this.$toast.error('`Password` is empty...')
          return
        }

        this.$toast.error('Invalid `Private Key`...')
        return
      }

      this.$toast.error('`Private Key` could not be empty...')
    },

    /**
     * Unlock the Private Key
     */
    unlock() {
      if (this.passwordMatched) {
        // decrypt Private Key
        this.bufPrivateKey = aes.decrypt(this.bufPrivateKeyEncrypted, this.bufPassword)

        // public key ->> store
        const bufPublicKey = publicKey.fromPrivateKey(this.bufPrivateKey)
        this.$store.dispatch('SET_PUBLIC_KEY', bufPublicKey)

        return
      }

      this.$toast.error('The `Password` does not work')
    },

    /**
     * Reset
     */
    reset() {
      this.vpriv = ''
      this.vprivError = ''
      this.passwordSet = ''
      this.passwordRepeat = ''

      this.bufPrivateKey = Buffer.from('')
      this.bufPrivateKeyEncrypted = Buffer.from('')

      this.password = ''

      this.bufTestEncrypted = Buffer.from('')

      this.removeCache('bufPrivateKeyEncrypted')
      this.removeCache('bufTestEncrypted')
    },


    copyEncodedData() {
      this.$refs['encoded-message'].select()

      if (document.execCommand('copy')) {
        this.$toast.info('Copied')
      } else {
        this.$toast.info('Copy failed')
      }
    },

    /**
     * Set/Get/Remove cache
     */
    setCache(key, value) {
      const keySha256 = sha.sha256(Buffer.from(key)).toString('hex')
      if ('production' === process.env.NODE_ENV) {
        return this.$auth.$storage.setLocalStorage(keySha256, value)
      }

      return this.$auth.$storage.setLocalStorage(key, value)
    },
    getCache(key) {
      const keySha256 = sha.sha256(Buffer.from(key)).toString('hex')

      if ('production' === process.env.NODE_ENV) {
        return this.$auth.$storage.getLocalStorage(keySha256)
      }

      return this.$auth.$storage.getLocalStorage(key)
    },
    removeCache(key) {
      const keySha256 = sha.sha256(Buffer.from(key)).toString('hex')

      if ('production' === process.env.NODE_ENV) {
        return this.$auth.$storage.removeLocalStorage(keySha256)
      }

      return this.$auth.$storage.removeLocalStorage(key)
    }
  }
}
</script>

<style scoped>
.initialize {
  @apply w-full max-w-xl;
  @apply bg-gradient-to-br from-red-50 to-orange-200;
  @apply rounded-md shadow-md;
  @apply text-gray-600;
}

.initialize label {
  @apply text-sm;
}

.initialize input {
  @apply font-mono text-xs;
}

.initialize .btn {
  @apply font-bold text-lg;
}

.sign {
  @apply bg-gradient-to-br from-red-50 to-pink-300;
  @apply rounded-md shadow-md;
}
</style>
