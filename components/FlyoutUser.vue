<template>
  <div class='relative'>
    <button v-show='address'
            type='button'
            class='h-full flex items-center justify-center text-3xl text-indigo-300 hover:text-white'
            @click.stop='toggleFlyout'
    >
      <span v-show='!address' class=''>
        <fa :icon="['fas', 'user-circle']" />
      </span>

      <img v-show='address'
           class='inline-block w-9 h-9'
           :src='avatarImageSrc'
           alt='address avatar'>

      <span v-show='address' class='nav-address'>
        {{ address.slice(0, 10) }}..
      </span>
    </button>


    <div v-show='$store.state.nav.flyoutUser' class='float-center'>
      <div class='px-2 w-full max-w-xl' @click.stop>
        <div
          class='w-full mx-auto max-w-2xl rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gradient-to-br from-orange-200 to-red-50 overflow-hidden'>

          <div class='py-6 lg:py-8 w-full mx-auto p-4 font-mono text-sm md:text-base'>
            <!-- avatar -->
            <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
              <img v-show='$store.state.address' :src='avatarImageSrc' alt='address avatar'>
              <div
                class='w-full h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'>
                <fa v-show='!$store.state.address' :icon="['fas', 'user-circle']" />
              </div>
            </div>

            <!-- waiting -->
            <div v-show='!$store.state.vpub' class='mt-10 font-mono text-sm md:text-base text-gray-700 text-center'>
              {{ $t('messenger.Waiting_for_initialization') }}...
            </div>

            <!-- public key & address -->
            <div v-show='$store.state.vpub' class='mt-6 w-full space-y-4'>

              <!-- Public Key -->
              <div v-show='$store.state.vpub'>
                <label for='public_key' class='text-xs md:text-sm'>
                  {{ $t('messenger.Public_Key') }}
                </label>

                <div class='mt-1 relative rounded-md shadow-md'>
                  <input type='text'
                         ref='public-key'
                         name='public-key'
                         id='public_key'
                         class='input-public pr-10'
                         :value='$store.state.vpub'
                         @click='copyPublicKey'
                         readonly>

                  <div class='absolute inset-y-0 right-0 pr-4 flex items-center'>
                    <button type='button' class='btn-copy' @click='copyPublicKey'>
                      <fa :icon="['fas', 'copy']" />
                    </button>
                  </div>
                </div>
              </div>

              <!-- Address -->
              <div v-show='address'>
                <label for='address' class='text-xs md:text-sm'>
                  {{ $t('messenger.Address') }}
                </label>

                <div class='mt-1 relative rounded-md shadow-md'>
                  <input type='text'
                         ref='address'
                         name='address'
                         id='address'
                         class='input-public pr-10'
                         :value='address'
                         @click='copyAddress'
                         readonly>

                  <div class='absolute inset-y-0 right-0 pr-4 flex items-center'>
                    <button type='button' class='btn-copy' @click='copyAddress'>
                      <fa :icon="['fas', 'copy']" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- bottom: close -->
          <div class='flyout-bottom flex justify-end'>
            <button type='button' class='btn btn-pink w-full md:w-2/5 py-3' @click='hideFlyout'>
              {{ $t('messenger.Close') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '@voken/avatar'

export default {
  name: 'FlyoutUser',
  computed: {
    address() {
      return this.$store.state.address
    },
    avatarImageSrc() {
      if (this.$store.state.address) {
        return avatar.svgDataUriFromSeed(this.$store.state.address)
      }

      return null
    }
  },
  methods: {
    toggleFlyout() {
      this.$store.dispatch('nav/TOGGLE_FLYOUT_USER')
    },
    hideFlyout() {
      this.$store.dispatch('nav/HIDE_ALL')
    },
    copyPublicKey() {
      this.$refs['public-key'].select()

      if (document.execCommand('copy')) {
        this.$toast.info(this.$t('messenger.Public_Key_copied'))
      } else {
        this.$toast.info(this.$t('messenger.Copy_failed'))
      }
    },
    copyAddress() {
      this.$refs['address'].select()

      if (document.execCommand('copy')) {
        this.$toast.info(this.$t('messenger.Wallet_Address_copied'))
      } else {
        this.$toast.info(this.$t('messenger.Copy_failed'))
      }
    }
  }
}
</script>

<style scoped>
.nav-address {
  @apply ml-1 py-2 px-4 rounded font-mono text-base;
}

.nav-address:hover {
  @apply bg-indigo-700;
}

input {
  @apply block w-full py-3 pl-4 rounded-md text-xs;
}

/**
 * Public
 */
.input-public {
  @apply bg-green-100 border border-green-400;
  @apply text-green-800;
}

.input-public:focus {
  @apply border-green-500 shadow-outline-green;
}

/**
 * Copy
 */
.btn-copy {
  @apply text-gray-500;
}

.btn-copy:hover {
  @apply text-gray-800;
}

.btn-copy:focus {
  @apply text-gray-600 outline-none;
}

.flyout-bottom {
  @apply py-2 px-4;
  @apply bg-gray-50 border-t border-orange-300;
}


</style>
