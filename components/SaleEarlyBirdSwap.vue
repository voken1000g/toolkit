<template>
  <layout-bg-a class="py-16 px-3 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          VokenTB {{ $t('voken.Early_Bird_Sale') }}
        </h2>
        <p class="mt-3 font-mono text-lg text-gray-500 sm:mt-4">
          {{ DAPP.CONTRACT_ADDRESS_EARLY_BIRD }}
        </p>
      </div>
    </div>
    <div class="mt-8 sm:mt-12 lg:mt-16 max-w-lg mx-auto bg-indigo-100 rounded-lg py-8 px-6">
      <div v-if="earlyBird.account.issued > '0'" class="already">
        <h2 class="text-2xl tracking-tight text-gray-900 sm:text-3xl text-center pointer-events-none">
          {{ $t('earlyBird.Already_an_Early_Bird') }}
        </h2>

        <!-- Issued -->
        <div class="mt-14 text-indigo-800">
          {{ $t('earlyBird.Got_') }}
        </div>

        <div class="font-mono text-2xl text-gray-800 text-right">
          {{ earlyBird.account.issuedObj.d }}<span v-show="earlyBird.account.issuedObj.f"
                                                   class="number-f">.{{ earlyBird.account.issuedObj.f }}</span>
          <span class="text-lg">
            VokenTB
          </span>
        </div>

        <!-- Bonus -->
        <div v-show="earlyBird.account.bonuses > '0'">
          <div class="mt-8 text-indigo-800">
            {{ $t('earlyBird.Random_Bonus_') }}
          </div>

          <div class="font-mono text-2xl text-gray-800 text-right">
            {{ earlyBird.account.bonusesObj.d }}<span v-show="earlyBird.account.bonusesObj.f"
                                                      class="number-f">.{{ earlyBird.account.bonusesObj.f }}</span>
            <span class="text-lg">
            VokenTB
          </span>
          </div>
        </div>

        <!-- Migrate -->
        <div class="mt-14">
          <nuxt-link :to="localePath('/migrate')"
                     class="w-full btn btn-pink justify-center py-2 text-xl"
          >
            Migrate to Voken Blockchain
          </nuxt-link>
        </div>
      </div>

      <div v-else>
        <div class="text-center">
          <h2 class="text-2xl tracking-tight text-gray-900 sm:text-3xl pointer-events-none">
            Get VokenTB
          </h2>
        </div>

        <!-- From -->
        <label for="from"
               class="mt-6 block font-mono font-bold text-sm text-indigo-600">
          {{ $t('earlyBird.Send') }}
        </label>

        <div class="mt-1 relative rounded-md shadow-md">
          <input type="text"
                 name="from"
                 id="from"
                 class="input-indigo w-full py-3 pl-6 pr-24 font-mono"
                 v-model="etherAmount"
                 placeholder="0.1 - 1.0"
                 aria-describedby="currency-eth">

          <div class="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none">
              <span class="token text-gray-500"
                    id="currency-eth"
              >
                ETH
              </span>
          </div>
        </div>

        <div class="mt-1 pr-1 font-mono text-sm text-gray-500 text-right">
          {{ $t('earlyBird.As') }} ${{ usdAmount }} USD
        </div>

        <!-- Arrow -->
        <div class="mt-6 flex items-center justify-center text-indigo-600">
          <fa :icon="['fas', 'arrow-down']"/>
        </div>

        <!-- Get -->
        <div class="mt-2 block font-mono font-bold text-sm text-indigo-600">
          {{ $t('earlyBird.To_get__estimated_') }}
        </div>

        <div
          class="mt-1 w-full flex items-center justify-between py-3 px-6 font-mono bg-gradient-to-r from-indigo-500 to-indigo-600 border border-indigo-600 rounded shadow">
          <span class="text-indigo-50">
            {{ vokenAmount }}
          </span>

          <span class="token text-indigo-300">
            VokenTB
          </span>
        </div>

        <!-- Wanna Bonus -->
        <div class="my-8 ml-4 flex items-center justify-center space-x-4" @click="toggleRefVokenAddress">
          <comp-switch :isOn="wannaBonus"/>
          <div class="font-mono text-sm text-indigo-500" :class="{ 'text-indigo-600': wannaBonus }">
            {{ $t('earlyBird.Get_1_to_10_percent_random_bonus_for_free') }}
          </div>
        </div>

        <!-- Referral Voken Address -->
        <div v-show="!validReferrer && showRefVokenAddress" class="my-6 transition-fade" :class="refStatus">
          <label for='ref-voken-address'
                 class='block font-mono font-bold text-sm text-indigo-600 text-left break-all'>
            {{ refLabel }}
          </label>

          <div class='relative mt-1'>
            <input type="text"
                   id='ref-voken-address'
                   ref='ref-voken-address'
                   class='input-indigo w-full py-3 px-6 font-mono text-sm'
                   v-model='bindToVokenAddress'
                   :placeholder="$t('earlyBird.Enter_a_valid_VOKEN_wallet_address')"/>

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']"/>
              <fa class='fa-success' :icon="['fas', 'check']"/>
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']"/>
            </div>
          </div>

          <div v-if="refStatus === 'success'" class="mt-1 text-sm text-center text-green-700">
            Click "Bind", then "Get VokenTB".
          </div>
        </div>

        <!-- Buttons -->
        <div v-show="showButtons"
             class="flex justify-between space-x-2"
        >
          <button v-if="showBtnBind" class="w-full btn justify-center py-3 font-bold text-xl" @click="bind">
            {{ $t('earlyBird.Bind') }}
          </button>

          <button class="w-full btn btn-pink justify-center py-3 font-bold text-xl" @click="swap">
            {{ $t('earlyBird.Get_VokenTB') }}
          </button>
        </div>

        <!-- Tx Info -->
        <tx-info class="mt-4"
                 :status="txBindStatus"
                 :hash="txBindHash"
                 :confirmation="txBindConfirmation"
                 :message="txBindMessage"/>

        <tx-info class="mt-4"
                 :status="txSwapStatus"
                 :hash="txSwapHash"
                 :confirmation="txSwapConfirmation"
                 :message="txSwapMessage"/>
      </div>
    </div>
  </layout-bg-a>
</template>

<script>
import BigNumber from 'bignumber.js'
import vokenAddress from '@voken/address'
import DAPP from '~/utils/constants/dapp'
import fnEthereum from '~/utils/fnEthereum'

export default {
  name: "SaleEarlyBirdSwap",
  data() {
    return {
      etherAmount: '1',

      showRefVokenAddress: false,
      bindToVokenAddress: '',
      bindToVokenAddressError: '',
      bindToVokenInt: '0',
      bindToReferrer: fnEthereum.ZERO_ADDRESS,

      txBindStatus: -1,
      txBindHash: null,
      txBindConfirmation: 0,
      txBindMessage: null,

      txSwapStatus: -1,
      txSwapHash: null,
      txSwapConfirmation: 0,
      txSwapMessage: null
    }
  },
  watch: {
    etherAmount() {
      if (this.etherAmount) {
        let etherAmount = (
          this.etherAmount.toString()
            .replace(/[^\d.]/g, '')
            .replace(/\.{2,}/g, '.')
            .replace('.', '#')
            .replace(/\./g, '')
            .replace('#', '.')
            .replace(/^(\d+)\.(\d{0,18}).*$/, '$1.$2')
        )

        const bnMin = new BigNumber(this.$store.state.vokenEarlyBirdSale.weiMinStr)
        const bnMax = new BigNumber(this.$store.state.vokenEarlyBirdSale.weiMaxStr)

        if (!etherAmount) {
          this.etherAmount = bnMax.toString()
          return
        }

        let bn = new BigNumber(etherAmount)

        if (bn.gt(bnMax)) {
          // max
          this.etherAmount = bnMax.toString()
        } else if (bn.gt(0) && bn.lt(bnMin)) {
          // min
          this.etherAmount = bnMin.toString()
        } else if (bn.gt(0)) {
          // ok
          this.etherAmount = bn.toString()
        }
      }
    },
    async bindToVokenAddress() {
      if (this.bindToVokenAddress) {
        try {
          this.setRefError()
          this.bindToVokenInt = vokenAddress.toBN(this.bindToVokenAddress).toString()

          // self
          if (this.bindToVokenAddress === this.voken.account.vokenAddress) {
            this.setRefError('Cannot be YOUR OWN')
            return null
          }

          // bind to referrer
          await this.$store.state
            .voken.contract()
            .methods.voken2address(this.bindToVokenInt)
            .call()
            .then(referrer => {
              this.bindToReferrer = referrer

              if (fnEthereum.isZeroAddress(referrer)) {
                this.setRefError('Invalid referral address')
              }
            })
            .catch(error => {
              this.setRefError(error)
            })
        } catch (e) {
          this.setRefError(e.message)
        }
      } else {
        this.setRefError()
      }
    }
  },
  mounted() {
    this.bindToVokenAddress = this.$store.state.referral.vokenAddress
  },
  computed: {
    DAPP() {
      return DAPP
    },
    ether() {
      return this.$store.state.ether
    },
    voken() {
      return this.$store.state.voken
    },
    earlyBird() {
      return this.$store.state.vokenEarlyBirdSale
    },
    usdAmount() {
      return new BigNumber(this.etherAmount)
        .multipliedBy(new BigNumber(this.ether.usdPrice))
        .dividedBy(10 ** 6)
        .toFixed(3)
    },
    vokenAmount() {
      return new BigNumber(this.etherAmount)
        .multipliedBy(new BigNumber(this.ether.usdPrice))
        .dividedBy(new BigNumber(this.earlyBird.usdPrice))
        .toFixed(3)
    },

    /**
     * Referral
     */
    validReferrer() {
      return !fnEthereum.isZeroAddress(this.voken.account.referrer)
    },
    wannaBonus() {
      if (this.validReferrer) {
        return true
      }
      return this.showRefVokenAddress
    },
    refStatus() {
      if (this.bindToVokenAddress) {
        // self
        if (this.bindToVokenAddress === this.voken.account.vokenAddress) {
          return 'warn'
        }
        // error
        if (this.bindToVokenAddressError) {
          return 'error'
        }
        // zero
        if (fnEthereum.isZeroAddress(this.bindToReferrer)) {
          return 'warn'
        }
        // success
        return 'success'
      }
      return null
    },
    refLabel() {
      if (this.bindToVokenAddressError) {
        return this.bindToVokenAddressError
      } else {
        return 'Via (Referral Voken Address)'
      }
    },

    /**
     * Buttons
     */
    showButtons() {
      return this.txSwapStatus === -1 || this.txSwapStatus === 3
    },
    showBtnBind() {
      return this.showRefVokenAddress && (this.txBindStatus === -1 || this.txBindStatus === 3)
    },
  },
  methods: {
    toggleRefVokenAddress() {
      if (!this.validReferrer) {
        this.showRefVokenAddress = !this.showRefVokenAddress
      }
    },
    setRefError(message = '') {
      this.bindToVokenAddressError = message
      this.bindToVokenInt = '0'
      this.bindToReferrer = fnEthereum.ZERO_ADDRESS
    },
    resetTxInfoBind() {
      this.txBindStatus = -1
      this.txBindHash = null
      this.txBindConfirmation = 0
      this.txBindMessage = null
    },
    resetTxInfoSwap() {
      this.txSwapStatus = -1
      this.txSwapHash = null
      this.txSwapConfirmation = 0
      this.txSwapMessage = null
    },

    /**
     * Bind
     */
    async bind() {
      this.resetTxInfoBind()
      this.resetTxInfoSwap()

      if (this.showRefVokenAddress && this.refStatus !== 'success') {
        this.$toast.info('Please enter a valid referral address.')
        this.$refs['ref-voken-address'].focus()
        return null
      }

      await this.$store
        .state.voken.contract()
        .methods
        .setReferrer(this.bindToVokenInt)
        .send({'from': this.ether.account})
        .on('transactionHash', this.onBindTransactionHash)
        .on('receipt', this.onBindReceipt)
        .on('confirmation', this.onBindConfirmation)
        .on('error', this.onBindError)
        .catch(this.onBindError)
    },
    async onBindTransactionHash(txHash) {
      this.txBindStatus = 0
      this.txBindHash = txHash
    },
    async onBindReceipt(receipt) {
      this.txBindMessage = null

      if (receipt.status) {
        this.txBindStatus = 1
      } else {
        this.txBindStatus = 3
      }
    },
    async onBindConfirmation(confirmation) {
      if (this.txBindStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txBindStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txBindStatus = 2
        } else {
          this.txBindStatus = -1

          await this.$store.dispatch('voken/SYNC_ACCOUNT')
        }

        this.txBindConfirmation = confirmation
      }
    },
    async onBindError(error) {
      this.txBindStatus = 3
      this.txBindMessage = error.message
    },

    /**
     * Swap
     */
    async swap() {
      this.resetTxInfoBind()
      this.resetTxInfoSwap()

      if (
        this.showRefVokenAddress
        &&
        !this.validReferrer
      ) {
        if (this.refStatus === 'success') {
          this.$toast.info('Please click "Bind" first.')
        } else {
          this.$toast.error('Please bind a valid referral address first.')
          this.$refs['ref-voken-address'].focus()
        }

        return
      }

      let tx = {
        from: this.ether.account,
        to: DAPP.CONTRACT_ADDRESS_EARLY_BIRD,
        value: this.ether.web3().utils.toWei(this.etherAmount, 'ether'),
      }

      let estimateError = null

      await this.ether
        .web3().eth.estimateGas(tx)
        .then(estimateGas => {
          tx.gas = (Math.floor(estimateGas / 10000) + 2) * 10000
        })
        .catch(error => {
          estimateError = error
        })

      if (estimateError) {
        await this.onSwapError(estimateError)
        return null
      }

      await this.ether.web3().eth.sendTransaction(tx)
        .on('transactionHash', this.onSwapTransactionHash)
        .on('receipt', this.onSwapReceipt)
        .on('confirmation', this.onSwapConfirmation)
        .on('error', this.onSwapError)
        .catch(this.onSwapError)
    },
    async onSwapTransactionHash(txHash) {
      this.txSwapStatus = 0
      this.txSwapHash = txHash
    },
    async onSwapReceipt(receipt) {
      this.txSwapMessage = null

      if (receipt.status) {
        this.txSwapStatus = 1
      } else {
        this.txSwapStatus = 3
      }
    },
    async onSwapConfirmation(confirmation) {
      if (this.txSwapStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txSwapStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txSwapStatus = 2
        } else {
          this.txSwapStatus = 2

          await this.$store.dispatch('voken/SYNC_ACCOUNT')
          // await this.getPayment()
        }

        this.txSwapConfirmation = confirmation
      }
    },
    async onSwapError(error) {
      this.txSwapStatus = 3
      this.txSwapMessage = error.message
    },


    // async getPayment() {
    //   await this.$store.state
    //     .earlyBirdContract()
    //     .getPastEvents(
    //       'Payment', {
    //         filter: { account: this.$store.state.account },
    //         fromBlock: 0,
    //         toBlock: 'latest'
    //       }
    //     )
    //     .then(this.onPayment)
    // },
    // async onPayment(events) {
    //   if (events.length > 0) {
    //     const eventPayment = events[0]
    //
    //     const accountPayment = {
    //       txHash: eventPayment.transactionHash,
    //       blockNumber: eventPayment.blockNumber,
    //       etherUSDPrice: new BigNumber(eventPayment.returnValues.etherUsdPrice),
    //       weiPayment: new BigNumber(eventPayment.returnValues.weiPayment)
    //     }
    //
    //     await this.$store.dispatch('SYNC_ACCOUNT_PAYMENT', accountPayment)
    //   }
    // },
  }
}
</script>

<style scoped>
.already {
  .number-f {
    @apply text-lg text-gray-400;
  }
}
</style>
