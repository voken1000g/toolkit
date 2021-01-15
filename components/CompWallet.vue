<template>
  <div v-if='wallet'
       class='flex flex-col space-y-6 lg:flex-row lg:items-start lg:space-x-10 lg:space-y-0 mt-4 lg:mt-6 2xl:mt-8 py-6 xl:py-8 px-4 lg:px-8 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-md'
  >
    <div class='xl:w-1/4 lg:pt-4'>
      <div
        class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md border border-gray-300 shadow-md lg:shadow-lg'>
        <vue-avatar :value='wallet.address'/>
      </div>

      <h3 class='mt-2 lg:mt-3 xl:mt-4 text-lg lg:text-xl xl:text-2xl font-bold text-gray-800 text-center'>
        {{ $t('wallet.Wallet') }} #{{ wallet.index }}
      </h3>

      <div class='xl:hidden font-mono text-xs sm:text-sm text-gray-500 text-center'>
        {{ wallet.path }}
      </div>
    </div>

    <div class='w-full xl:flex'>
      <div class='xl:w-2/3 xl:max-w-2xl flex-row space-y-4 lg:space-y-6'>
        <!-- Private Key -->
        <div class='mx-auto lg:mx-0 max-w-2xl'>
          <label :for='"private_key" + wallet.index'>
            {{ $t('wallet.Private_Key') }}
          </label>

          <div class='mt-1 relative rounded-md shadow-md'>
            <input type='text'
                   :ref='"private-key-" + wallet.index'
                   :name='"private-key-" + wallet.index'
                   :id='"private_key_" + wallet.index'
                   class='input-private'
                   :value='wallet.vpriv'
                   @click='copyPrivateKey(wallet.index)'
                   readonly>

            <div class='absolute inset-y-0 right-0 pr-6 flex items-center'>
              <button type='button' class='btn-copy' @click='copyPrivateKey(wallet.index)'>
                <fa :icon="['fas', 'copy']" />
              </button>
            </div>
          </div>
        </div>

        <!-- Public Key -->
        <div class='mx-auto lg:mx-0 max-w-2xl'>
          <label :for='"public_key" + wallet.index'>
            {{ $t('wallet.Public_Key') }}
          </label>

          <div class='mt-1 relative rounded-md shadow-md'>
            <input type='text'
                   :ref='"public-key-" + wallet.index'
                   :name='"public-key-" + wallet.index'
                   :id='"public_key" + wallet.index'
                   class='input-public'
                   :value='wallet.vpub'
                   @click='copyPublicKey(wallet.index)'
                   readonly>

            <div class='absolute inset-y-0 right-0 pr-6 flex items-center'>
              <button type='button' class='btn-copy' @click='copyPublicKey(wallet.index)'>
                <fa :icon="['fas', 'copy']" />
              </button>
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class='mx-auto lg:mx-0 max-w-2xl'>
          <label :for='"address_" + wallet.index'>
            {{ $t('wallet.Address') }}
          </label>

          <div class='mt-1 relative rounded-md shadow-md'>
            <input type='text'
                   :ref='"address-" + wallet.index'
                   :name='"address-" + wallet.index'
                   :id='"address_" + wallet.index'
                   class='input-public'
                   :value='wallet.address'
                   @click='copyAddress(wallet.index)'
                   readonly>

            <div class='absolute inset-y-0 right-0 pr-6 flex items-center'>
              <button type='button' class='btn-copy' @click='copyAddress(wallet.index)'>
                <fa :icon="['fas', 'copy']" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class='hidden xl:block flex-grow'>
        <div class='h-full flex items-center justify-center font-mono'>
          <div>
            <div class='text-6xl text-indigo-400'>
              #<span class='text-7xl'>{{ wallet.index }}</span>
            </div>

            <div class='text-gray-500 text-center'>
              {{ wallet.path }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'

export default {
  name: 'CompWallet',
  components: { VueAvatar },
  props: ['wallet'],
  methods: {
    async copyPrivateKey(index) {
      this.$refs['private-key-' + index].select()

      if (document.execCommand('copy')) {
        this.$toast.info(this.$t('wallet.Private_Key_copied'))
      } else {
        this.$toast.info(this.$t('wallet.Copy_failed'))
      }
    },
    async copyPublicKey(index) {
      this.$refs['public-key-' + index].select()

      if (document.execCommand('copy')) {
        this.$toast.info(this.$t('wallet.Public_Key_copied'))
      } else {
        this.$toast.info(this.$t('wallet.Copy_failed'))
      }
    },
    async copyAddress(index) {
      this.$refs['address-' + index].select()

      if (document.execCommand('copy')) {
        this.$toast.info(this.$t('wallet.Wallet_Address_copied'))
      } else {
        this.$toast.info(this.$t('wallet.Copy_failed'))
      }
    }
  }
}
</script>

<style scoped>
</style>
