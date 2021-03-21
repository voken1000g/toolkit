<template>
  <layout-bg-a class="py-20">
    <div class="resp-wide">
      <div v-if="vokenAccount.vokenInt === '0'" class="max-w-xl mx-auto">
        <div v-if="vokenAccount.balanceStr === '0'" class="resp-mt text-center">
          <p class="mt-4 text-lg leading-6 font-bold text-red-500">
            {{ $t('voken.You_are_NOT_holding_VokenTB') }}
          </p>

          <div class="resp-mt">
            <nuxt-link :to="localePath('/voken/early-bird')" class="w-full max-w-xl btn btn-pink justify-center py-3 text-lg">
              Go to Early-Bird Sale
            </nuxt-link>
          </div>
        </div>
        <div v-else :class='vokenAddressStatus'>
          <div class='mx-auto avatar-wrapper'>
            <vue-avatar v-show='isAddress' :value='vokenAddress'/>
            <div v-show='!isAddress'
                 class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
                 :class='{ "text-red-300": vokenAddress && !isAddress}'
            >
              <fa v-show='!vokenAddress' :icon="['fas', 'seedling']"/>
              <fa v-show='vokenAddress && !isAddress' :icon="['fas', 'times']"/>
            </div>
          </div>

          <label for='address-validate'
                 class='block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left'>
            {{ vokenAddressLabel }}
          </label>

          <div class='relative mt-1'>
            <input type="text"
                   id='address-validate'
                   class='input-indigo w-full py-3 px-6 font-mono text-sm md:text-base'
                   v-model='vokenAddress'
                   placeholder="Input your Voken wallet address"/>

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']"/>
              <fa class='fa-success' :icon="['fas', 'check']"/>
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']"/>
            </div>
          </div>

          <div class="mt-6 ml-4 flex items-center space-x-4" @click="toggleAccepted">
            <comp-switch :isOn="accepted"/>
            <div class="leading-7 text-sm text-cool-gray-500">
              I have already backed up the mnemonic (backup phrase);
              And I know that the Voken wallet address cannot be changed.
            </div>
          </div>

          <div v-show="showButtonSave" class="mt-6">
            <button class='w-full btn btn-pink py-3 justify-center text-xl' @click='saveVokenAddress'>
              {{ $t('wallet.Set_Voken_Address') }}
            </button>
          </div>

          <tx-info :class="{'mt-4': showButtonSave, 'mt-8': !showButtonSave }"
                   :status='txStatus'
                   :hash='txHash'
                   :confirmation='txConfirmation'
                   :message='txMessage'/>

          <div v-show='showButtonNew' class='mt-4 flex justify-between space-x-2'>
            <button class='w-full btn py-3 justify-center text-xl' @click='newVokenAddress'>
              {{ $t('wallet.Generate_A_New_Voken_Address') }}
            </button>
          </div>

          <div v-show='mnemonic' class='mnemonic-canvas'>
            <h2 class='text-2xl text-gray-600 text-center'>
              {{ $t('wallet.Mnemonic__backup_phrase_') }}
            </h2>

            <div class='w-5/6 mt-6 mx-auto font-mono text-red-600 text-center'>
              {{ $t('wallet.Please_write_the_mnemonic_') }}
            </div>

            <div class='mt-6 grid grid-cols-3 gap-3'>
              <div v-for='(word, index) in mnemonicArray' class='mnemonic'>
              <span class='mnemonic-index'>
                {{ index + 1 }}.
              </span>
                <span class='mnemonic-word'>
                {{ word }}
              </span>
              </div>
            </div>

            <button class='mt-6 w-full btn py-3 justify-center' @click='newVokenAddress'>
              {{ $t('wallet.Generate_New_Address__Mnemonic') }}
            </button>

            <div class='mt-6 font-mono text-sm text-center'>
              <nuxt-link :to="localePath('/wallet/generator')" class='a-generator'>
                <fa :icon="['fas', 'wallet']"/>
                {{ $t('wallet.Visit__VOKEN_wallet_generator') }}
              </nuxt-link>
            </div>
          </div>

        </div>
      </div>


      <div v-else class="mx-auto max-w-xl text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Already Done
        </h2>

        <div
          class='w-14 h-14 resp-mt lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
          <vue-avatar :value='vokenAccount.vokenAddress'/>
        </div>

        <h3 class="resp-mt text-cool-gray-500">
          Your Voken Wallet Address
        </h3>

        <p class="mt-4 text-lg font-mono font-bold text-cool-gray-700 break-all">
          {{ vokenAccount.vokenAddress }}
        </p>

        <div class="resp-mt">
          <nuxt-link :to="localePath('/voken/migrate')" class="w-full btn justify-center py-3 text-lg">
            Migrate to Voken Blockchain
          </nuxt-link>
        </div>
        <div class="mt-3">
          <nuxt-link :to="localePath('/voken/early-bird-referral')"
                     class="w-full btn btn-pink justify-center py-3 text-lg"
          >
            Early-Bird Sale Referral Rewards
          </nuxt-link>
        </div>
      </div>
    </div>
  </layout-bg-a>
</template>

<script>
import * as bip39 from 'bip39'
import Wallet from '@voken/hd-wallet'
import VueAvatar from '@voken/vue-avatar'
import fnEthereum from "~/utils/fnEthereum";
import vokenAddress from "@voken/address";

export default {
  name: "WalletBindMain",
  components: {VueAvatar},

  data() {
    return {
      vokenAddress: '',
      vokenAddressError: '',

      vokenInt: '0',

      referrer: fnEthereum.ZERO_ADDRESS,

      accepted: false,

      showButtonSave: true,
      showButtonNew: true,

      mnemonic: '',

      txStatus: -1,
      txHash: null,
      txConfirmation: 0,
      txMessage: null
    }
  },
  watch: {
    async vokenAddress() {
      if (this.vokenAddress) {
        this.vokenAddressError = ''
        this.referrer = fnEthereum.ZERO_ADDRESS
        this.vokenInt = '0'

        try {
          this.vokenInt = vokenAddress.toBN(this.vokenAddress).toString()
          await this.$store.state
            .voken.contract()
            .methods.voken2address(this.vokenInt)
            .call()
            .then(referrer => {
              if (!fnEthereum.isZeroAddress(referrer)) {
                this.vokenAddressError = 'The address is already exist'
              }

              this.referrer = referrer
            }).catch(error => {
              console.error('::: voken2address', error)
            })
        } catch (e) {
          this.vokenAddressError = e.message
        }
      } else {
        this.vokenAddressError = ''
        this.referrer = fnEthereum.ZERO_ADDRESS
        this.vokenInt = '0'
      }
    }
  },
  computed: {
    vokenAccount() {
      return this.$store.state.voken.account
    },
    isAddress() {
      return vokenAddress.isAddress(this.vokenAddress)
    },
    vokenAddressStatus() {
      if (this.vokenAddress) {
        if (this.isAddress) {
          // only allow zero address
          if (fnEthereum.isZeroAddress(this.referrer)) {
            return 'success'
          } else {
            return 'warn'
          }
        } else {
          // not a valid address
          return 'error'
        }
      }
    },
    vokenAddressLabel() {
      if (this.vokenAddressError) {
        return this.vokenAddressError
      } else {
        return this.$t('wallet.VOKEN_wallet_address')
      }
    },
    mnemonicArray() {
      return this.mnemonic.split(' ')
    },
  },
  methods: {
    toggleAccepted() {
      this.accepted = !this.accepted
    },

    async saveVokenAddress() {
      if (!this.vokenAddress) {
        this.$toast.error('Make sure you have entered a valid Voken wallet address.')
        return
      }

      if (this.vokenAddressError) {
        this.$toast.error(this.vokenAddressError)
        return
      }


      if (!this.accepted) {
        this.$toast.error('Make sure you have backed up your mnemonic phase!')
        return
      }

      this.showButtonSave = false
      this.txStatus = 0
      this.txMessage = null

      await this.$store.state
        .voken.contract()
        .methods.setVokenAddress(this.vokenInt)
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onTransactionHash)
        .on('receipt', this.onReceipt)
        .on('confirmation', this.onConfirmation)
        .on('error', this.onError)
        .catch(this.onError)
    },
    async onTransactionHash(txHash) {
      this.txStatus = 0
      this.txHash = txHash
    },
    async onReceipt(receipt) {
      this.txMessage = null

      if (receipt.status) {
        this.txStatus = 1
      } else {
        this.txStatus = 3
      }
    },
    async onConfirmation(confirmation) {
      if (this.txStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txStatus = 2
        } else {
          this.txStatus = 2

          await this.$store.dispatch('voken/SYNC_DATA')
        }

        this.txConfirmation = confirmation
      }
    },
    async onError(error) {
      this.txStatus = 3
      this.txMessage = error.message
      this.showButtonSave = true
    },


    async newVokenAddress() {
      this.showButtonNew = false

      this.mnemonic = await bip39.generateMnemonic(192)
      await this.generateFromMnemonic()
    },
    async generateFromMnemonic() {
      const seed = await bip39.mnemonicToSeed(this.mnemonic)
      const hdWallet = new Wallet(seed)
      const wallet = hdWallet.derive(0)
      this.vokenAddress = wallet.address
    }
  }
}
</script>

<style scoped>
.number-f {
  @apply text-sm text-cool-gray-400;
}

.mnemonic-canvas {
  @apply mt-6 py-6 px-4 bg-gradient-to-br from-blue-50 to-indigo-200 border border-indigo-300 rounded-md shadow;
}

.mnemonic {
  @apply flex justify-between py-2 px-3 border-b-2 border-indigo-300 font-mono text-center;
}

.mnemonic-index {
  @apply text-gray-500;
}

.mnemonic-word {
  @apply w-full;
}


.a-generator {
  @apply pb-2 px-2 text-gray-500;
}

.a-generator:hover {
  @apply border-b border-blue-600 text-blue-600;
}
</style>
