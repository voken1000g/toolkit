<template>
  <div class='resp-wide pb-12'>

    <!-- intro -->
    <article class='resp-mt prose lg:prose-lg xl:prose-xl max-w-none'>
      <h1>
        {{ $t('nav.Messenger') }}
      </h1>

      <p>
        {{ $t('messenger.This_is_a_purely__') }}
        <a target='_blank' :href='$t("link_to_github.href")'>
          {{ $t('link_to_github.text') }}...
        </a>
      </p>

      <p>
        {{ $t('messenger.Always_help_secure__') }}
      </p>
      <p>
        {{ $t('messenger.What_you_can_do_here_') }}
      </p>

      <ul>
        <li>
          <div>
            {{ $t('messenger.Encrypt_and_sign_messages') }}
          </div>
          <div class='mt-2'>
            <button type='button' class='w-full max-w-sm btn btn-pink justify-center py-2 px-4' @click='showEncrypt'>
              {{ $t('messenger.Encrypt__Sign_A_Message') }}
            </button>
          </div>

        </li>

        <li>
          <div>
            {{ $t('messenger.Decrypt_and_verify_the__') }}
          </div>
          <div class='mt-2'>
            <button type='button' class='w-full max-w-sm btn justify-center py-2 px-4' @click='showDecrypt'>
              {{ $t('messenger.Decrypt__Verify_A_Message') }}
            </button>
          </div>
        </li>
      </ul>

      <p>
        {{ $t('messenger.All_data_is_encrypted_and_stored__') }}
      </p>
    </article>

    <div class='my-6 border-t border-indigo-300' />

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

    <!-- Encrypt -->
    <div v-show='showEncryptLayer && ready' class='encrypt mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 px-2 sm:px-4'>
      <h2 class='font-bold text-2xl text-gray-700 text-center'>
        {{ $t('messenger.Encrypt__Sign_A_Message') }}
      </h2>

      <div class='h-full w-full space-y-4'>
        <div class='w-full' :class='{ "success": toVpub && !toVpubError, "error": toVpub && toVpubError }'>
          <label for='to_vpub' class='text-sm'>
            <span v-show='!toVpub || !toVpubError'>
              {{ $t('messenger.To_Public_Key') }}
            </span>
            <span v-show='toVpub && toVpubError'>
              {{ toVpubError }}
            </span>
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='to_vpub'
                   class='input-indigo w-full py-3 px-4 font-mono text-xs sm:text-sm md:text-base'
                   v-model='toVpub'
                   placeholder='vpub...' />

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']" />
              <fa class='fa-success' :icon="['fas', 'check']" />
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
            </div>
          </div>
        </div>

        <div class='w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0'>
          <div class='w-full'>
            <label for='to_message' class='text-sm'>
              {{ $t('messenger.Text_Message') }}
            </label>

            <textarea id='to_message'
                      class='textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none'
                      rows='10'
                      v-model='toMessage'
                      :placeholder='$t("messenger.Input_the_original_message_here_")'></textarea>
          </div>

          <div class='w-full'>
            <label for='to_message_encrypted' class='text-sm'>
              {{ $t('messenger.Encrypted_data__with__') }}
            </label>

            <textarea id='to_message_encrypted'
                      ref='to-message-encrypted'
                      class='textarea-indigo w-full mt-1 py-3 px-4 bg-indigo-100 font-mono text-sm lg:text-base text-indigo-600 resize-none'
                      rows='10'
                      :value='strToBodyEncrypted'
                      readonly></textarea>

            <!-- strToBodyEncrypted -->
          </div>
        </div>

        <div class='mt-2 sm:flex sm:justify-end'>
          <div class='w-full sm:max-w-xl'>
            <div class='space-y-2 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4'>
              <button type='button' class='w-full btn btn-pink justify-center py-3 font-bold' @click='copyEncryptedData'>
                {{ $t('messenger.Copy_the_encrypted_data') }}
              </button>

              <button type='button' class='w-full btn btn-gray justify-center py-3 font-bold uppercase' @click='hideEncrypt'>
                {{ $t('messenger.Close') }}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Decrypt -->
    <div v-show='showDecryptLayer && ready' class='decrypt mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 px-2 sm:px-4'>
      <h2 class='font-bold text-2xl text-gray-700 text-center'>
        {{ $t('messenger.Decrypt__Verify_A_Message') }}
      </h2>

      <div class='w-full'>
        <div class='w-full space-y-4 lg:flex lg:flex-row lg:space-x-4 lg:space-y-0'>
          <div class='w-full' :class='{ "error": fromData && fromDataError }'>
            <label for='from_message' class='text-sm'>
              {{ $t('messenger.From_encrypted_data') }}
            </label>

            <textarea id='from_message'
                      class='textarea-indigo w-full mt-1 py-3 px-4 font-mono text-sm lg:text-base resize-none'
                      rows='10'
                      v-model='fromData'
                      :placeholder='$t("messenger.Input_the_encrypted_data__")'></textarea>

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
        <div v-show='boolFromDataSigVerified' class='mt-10 lg:mt-4 px-4 flex text-green-600 space-x-4'>
          <fa :icon="['fas', 'signature']" class='text-3xl' />

          <div class='font-mono'>
            <div>
              {{ $t('messenger.Signature_Verification_Passed_') }}
            </div>
            <div class='mt-1 text-xs md:text-sm break-all'>
              {{ strFromDataSig }}
            </div>
          </div>
        </div>


        <div class='mt-6 sm:flex sm:justify-end'>
          <div class='w-full sm:max-w-xl'>
            <div class='space-y-2 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4'>
              <span class='w-full'></span>
              <button type='button' class='w-full btn btn-gray justify-center py-3 font-bold uppercase' @click='hideDecrypt'>
                {{ $t('messenger.Close') }}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- how it works -->
    <div v-show='showEncryptLayer && ready'
         class='decrypt-details mt-4 md:mt-6 lg:mt-8 xl:mt-10 space-y-6 py-6 px-2 sm:px-4'>
      <h2 class='font-bold text-2xl text-gray-700 text-center'>
        Encryption details
      </h2>

      <!-- This example requires Tailwind CSS v2.0+ -->
      <div class='bg-white shadow overflow-hidden sm:rounded-lg'>
        <div class='px-4 py-5 sm:px-6'>
          <h3 class='text-lg leading-6 font-medium text-gray-900'>
            How it works?
          </h3>
          <p class='mt-1 max-w-2xl text-sm text-gray-500'>
            Showing the signature and encryption process...
          </p>
        </div>

        <div class='border-t border-gray-200 px-4 py-5 sm:p-0'>
          <dl class='sm:divide-y sm:divide-gray-200'>


            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Original message
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                {{ toMessage }}
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Hash the message
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                {{ bufToAESKey.toString('hex') }}
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Encrypted hash
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                <div class='text-teal-600 break-normal'>
                  Encrypt the hash with the recipient's Public Key
                </div>
                <p class='mt-2'>
                  {{ bufToAESKeyEncrypted.toString('hex') }}
                </p>
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Signature (in hex)
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                <div class='text-teal-600 break-normal'>
                  Sign the hash with your Private Key
                </div>
                <p class='mt-2'>
                  {{ bufToSig.toString('hex') }}
                </p>
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Signature (Base32 encoded)
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                {{ strToSig }}
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Signature length
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                {{ bufToSig.length }}
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Encrypted body
              </dt>
              <dd class='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                <div class='text-teal-600 break-normal'>
                  Encrypt (your Public Key + Original Text Message) with the hash:
                </div>
                <p class='mt-2'>
                  {{ bufToBodyEncrypted.toString('hex') }}
                </p>
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Encrypted data
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                <div class='text-teal-600 break-normal'>
                  Merge the all the encrypted data above (encrypted hash + signature length + signature + encrypted
                  body):
                </div>
                <p class='mt-2'>
                  {{ bufToMergedData.toString('hex') }}
                </p>
              </dd>
            </div>

            <div class='py-4 sm:py-5 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4 sm:px-6'>
              <dt class='text-sm font-medium text-gray-500'>
                Base32 encoded
              </dt>
              <dd class='mt-1 font-mono text-sm text-gray-900 sm:mt-0 sm:col-span-2 lg:col-span-3 break-all'>
                {{ strToBodyEncrypted }}
              </dd>
            </div>

          </dl>
        </div>
      </div>

    </div>


    <article class='mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 prose lg:prose-lg xl:prose-xl max-w-none'>
      <p>
        {{ $t('messenger.Share_your_Public_Key_to__') }}
      </p>
    </article>
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
import VueAvatar from '@voken/vue-avatar'

export default {
  name: 'index',
  layout: 'indigoWave',
  components: { VueAvatar },
  head() {
    return {
      title: this.$t('nav.Messenger')
    }
  },
  data() {
    return {
      publicKey: publicKey,

      vpriv: '',
      vprivError: '',
      passwordSet: '',
      passwordRepeat: '',

      bufPrivateKey: Buffer.from(''),
      bufPrivateKeyEncrypted: Buffer.from(''),

      password: '',

      bufTestEncrypted: Buffer.from(''),

      showEncryptLayer: false,
      showDecryptLayer: false,

      toVpub: '',
      toVpubError: '',

      toMessage: '',

      fromData: '',
      fromDataSig: Buffer.from(''),
      fromDataPublicKey: Buffer.from(''),
      fromDataAddress: '',
      fromDataDecrypted: Buffer.from(''),

      fromDataError: ''
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
    },
    fromData() {
      if (!this.fromData) {
        this.fromDataError = ''
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

    toMessageEncrypted() {
      if (
        this.toMessage
        &&
        this.ready
        &&
        this.bufToPublicKey.length === 33
      ) {
        const bufMessage = Buffer.from(this.toMessage)
        const bufKey = sha.sha1(bufMessage)
        const keyEncrypted = edsv.encrypt(bufKey, this.bufToPublicKey)

        const sig = edsv.sign(bufKey, this.bufPrivateKey)
        const sigLength = Buffer.from([sig.length])

        const dataEncrypted = aes.encrypt(Buffer.concat([this.bufPublicKey, bufMessage]), bufKey)

        const messageEncrypted = Buffer.concat([keyEncrypted, sigLength, sig, dataEncrypted])

        return base32.encode(messageEncrypted)
      }

      return ''
    },

    bufToPublicKey() {
      if (this.toVpub) {
        try {
          this.toVpubError = ''
          return publicKey.fromVPub(this.toVpub)
        } catch (e) {
          this.toVpubError = e.message
        }
      }

      return Buffer.from('')
    },

    bufToMessage() {
      if (this.toMessage) {
        return Buffer.from(this.toMessage)
      }

      return Buffer.from('')
    },

    bufToAESKey() {
      if (this.bufToMessage.length > 0) {
        return sha.sha1(this.bufToMessage)
      }

      return Buffer.from('')
    },

    bufToAESKeyEncrypted() {
      if (this.bufToPublicKey.length === 33 && this.bufToAESKey.length > 0) {
        return edsv.encrypt(this.bufToAESKey, this.bufToPublicKey)
      }

      return Buffer.from('')
    },

    bufToSig() {
      if (this.bufToAESKey.length > 0) {
        return edsv.sign(this.bufToAESKey, this.bufPrivateKey)
      }

      return Buffer.from('')
    },

    strToSig() {
      if (this.bufToSig.length > 0) {
        return base32.encode(this.bufToSig)
      }

      return Buffer.from('')
    },

    bufToSigLength() {
      if (this.bufToSig.length > 0) {
        return Buffer.from([this.bufToSig.length])
      }

      return Buffer.from([0])
    },

    bufToBodyEncrypted() {
      if (this.bufPublicKey.length === 33 && this.bufToMessage.length > 0) {
        return aes.encrypt(Buffer.concat([this.bufPublicKey, this.bufToMessage]), this.bufToAESKey)
      }

      return Buffer.from('')
    },

    bufToMergedData() {
      if (this.bufToAESKeyEncrypted.length > 0 && this.bufToBodyEncrypted.length > 0) {
        return Buffer.concat([this.bufToAESKeyEncrypted, this.bufToSigLength, this.bufToSig, this.bufToBodyEncrypted])
      }

      return Buffer.from('')
    },

    strToBodyEncrypted() {
      if (this.bufToMergedData.length > 0) {
        return base32.encode(this.bufToMergedData)
      }

      return ''
    },


    bufFromDataDecoded() {
      if (this.fromData && this.ready) {
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
    bufFromDataKeyEncrypted() {
      if (this.bufFromDataDecoded.length > 0) {
        return this.bufFromDataDecoded.slice(0, 117)
      }

      return Buffer.from('')
    },
    bufFromDataKey() {
      if (this.bufFromDataKeyEncrypted.length > 0) {
        try {
          const bufFromDataKey = edsv.decrypt(this.bufFromDataKeyEncrypted, this.bufPrivateKey)

          this.fromDataError = ''
          return bufFromDataKey
        } catch (e) {
          this.fromDataError = '[Decrypt Error] ' + e.message
        }
      }

      return Buffer.from('')
    },
    intFromDataSigLength() {
      if (this.bufFromDataKey.length > 0) {
        try {
          const hexFromDataSigLength = this.bufFromDataDecoded.slice(117, 118).toString('hex')
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
          const bufFromDataSig = this.bufFromDataDecoded.slice(118, 118 + this.intFromDataSigLength)

          this.fromDataError = ''
          return bufFromDataSig
        } catch (e) {
          this.fromDataError = '[Slice Error] Cannot parse signature: ' + e.message
        }
      }

      return Buffer.from('')
    },
    bufFromDataPdEncrypted() {
      if (this.bufFromDataSig.length > 0) {
        try {
          const bufFromDataPdEncrypted = this.bufFromDataDecoded.slice(118 + this.intFromDataSigLength)

          this.fromDataError = ''
          return bufFromDataPdEncrypted
        } catch (e) {
          this.fromDataError = '[Slice Error] Cannot parse encrypted sig_&_data body: ' + e.message
        }
      }

      return Buffer.from('')
    },
    bufFromDataPd() {
      if (this.bufFromDataSig.length > 0) {
        try {

          const bufFromDataPd = aes.decrypt(this.bufFromDataPdEncrypted, this.bufFromDataKey)

          this.fromDataError = ''
          return bufFromDataPd
        } catch (e) {
          this.fromDataError = '[Decrypt Error] Cannot decrypt sig_&_data body: ' + e.message
        }
      }

      return Buffer.from('')
    },
    bufFromDataPublicKey() {
      if (this.bufFromDataPd.length > 0) {
        try {
          const bufFromDataPublicKey = this.bufFromDataPd.slice(0, 33)

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
      if (this.boolFromDataSigVerified) {
        try {
          const strFromDataSig = base32.encode(this.bufFromDataSig)

          this.fromDataError = ''
          return strFromDataSig
        } catch (e) {
          this.fromDataError = '[Encode Error] Cannot encode the signature of the message: ' + e.message
        }
      }

      return ''
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
      if (this.bufFromDataPd.length > 0) {
        try {
          const bufFromDataOriginalData = this.bufFromDataPd.slice(33)

          this.fromDataError = ''
          return bufFromDataOriginalData
        } catch (e) {
          this.fromDataError = '[Slice Error] Cannot parse original message body: ' + e.message
        }
      }

      return Buffer.from('')
    }

  },
  mounted: async function() {
    // get cached Private Key (encrypted)
    const cachedBufPrivateKeyEncrypted = this.getCache('bufPrivateKeyEncrypted')
    if (cachedBufPrivateKeyEncrypted) {
      this.bufPrivateKeyEncrypted = Buffer.from(cachedBufPrivateKeyEncrypted.data)
    }

    // get cached Test Message (encrypted)
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

    showEncrypt() {
      this.showEncryptLayer = true
      this.showDecryptLayer = false
    },
    hideEncrypt() {
      this.showEncryptLayer = false
      this.showDecryptLayer = false
    },

    showDecrypt() {
      this.showDecryptLayer = true
      this.showEncryptLayer = false
    },
    hideDecrypt() {
      this.showDecryptLayer = false
      this.showEncryptLayer = false
    },

    copyEncryptedData() {
      this.$refs['to-message-encrypted'].select()

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

.encrypt {
  @apply bg-gradient-to-br from-red-50 to-pink-300;
  @apply rounded-md shadow-md;
}

.decrypt,
.decrypt-details {
  @apply bg-gradient-to-br from-green-50 to-teal-300;
  @apply rounded-md shadow-md;
}

</style>
