<template>
  <div>
    <div v-if="showBalanceTips" class="bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 py-8">
      <div class="resp-wide flex items-start justify-center space-x-3 lg:space-x-4 text-orange-700">
        <fa :icon="['fas', 'info-circle']" class="text-3xl"/>
        <div>
          <p class="leading-7">
            {{ $t('earlyBird.warn.Current_balance_') }}<comp-number :value="ether.balance" :decimals="18" /> ETH --
            {{ $t('earlyBird.warn.It_seems__newbie__') }}
            {{ $t('__lp')}}<comp-number :value="ether.gasPrice" :decimals="9" /> GWei{{ $t('__rp')}}
            {{ $t('earlyBird.warn.and_you_swap') }}
            <b>{{ etherAmountSample }} ETH</b>
            {{ $t('earlyBird.warn.for') }}
            <b><comp-number :value="vokenAmount.toString()" :mantissa="3" /> VokenTB</b>{{ $t('__comma')}}
            {{ $t('earlyBird.warn.that_needs_at_least') }}
            <b><comp-number :value="balanceMin.toString()" :decimals="18" /> ETH</b>
            {{ $t('earlyBird.warn.on_your_Ethereum_wallet_address_in_fact__') }}
          </p>
        </div>
      </div>
    </div>

    <layout-bg-a class="py-16 px-3 sm:px-6 lg:px-8 lg:py-24">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            VokenTB {{ $t('voken.Early_Bird_Sale') }}
          </h2>
          <p class="mt-3 font-mono text-xs text-gray-500 sm:mt-4 sm:text-base truncate">
            {{ DAPP.CONTRACT_ADDRESS_EARLY_BIRD }}
          </p>
        </div>
      </div>
      <div class="mt-8 sm:mt-12 lg:mt-16 max-w-lg mx-auto bg-gray-100 rounded-lg py-8 px-6 h-60 flex items-center justify-center">
        <div class="text-4xl text-gray-400">
          Paused
        </div>
      </div>
      <div v-if="false" class="mt-8 sm:mt-12 lg:mt-16 max-w-lg mx-auto bg-indigo-100 rounded-lg py-8 px-6">
        <div v-if="earlyBird.account.issued > '0'" class="already">
          <h2 class="text-2xl tracking-tight text-gray-900 sm:text-3xl text-center pointer-events-none">
            {{ $t('earlyBird.Already_an_Early_Bird') }}
          </h2>

          <!-- Issued -->
          <div class="mt-14 text-indigo-800">
            {{ $t('earlyBird.Got_') }}
          </div>

          <div class="font-mono text-2xl text-gray-800 text-right">
            <comp-number :value="earlyBird.account.issued" :decimals="9" />
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
              <comp-number :value="earlyBird.account.bonuses" :decimals="9" />
              <span class="text-lg">
                VokenTB
              </span>
            </div>
          </div>

          <!-- Available -->
          <div v-show="earlyBird.account.available > '0'">
            <div class="mt-8 text-indigo-800">
              {{ $t('earlyBird.Available_') }}
            </div>

            <div class="font-mono text-2xl text-gray-800 text-right">
              <comp-number :value="earlyBird.account.available" :decimals="9" />
              <span class="text-lg">
                VokenTB
              </span>
            </div>
          </div>

          <div v-show="voken.account.vokenInt > '0'">
            <div class="mt-8 text-indigo-800">
              {{ $t('earlyBird.Referred_') }}
            </div>

            <div class="font-mono text-2xl text-gray-800 text-right">
              <comp-number :value="earlyBird.account.referred" :decimals="18" :mantissa="3" />
              <span class="text-lg">
                ETH
              </span>
            </div>
          </div>

          <!-- Refer -->
          <div class="mt-14">
            <nuxt-link :to="localePath('/voken/early-bird-referral')"
                       class="w-full btn btn-pink justify-center py-2 text-lg"
            >
              {{ $t('earlyBird.Refer_friends') }}
            </nuxt-link>
          </div>

          <!-- Migrate -->
          <!--<div class="mt-2">-->
          <!--  <nuxt-link :to="localePath('/migrate')"-->
          <!--             class="w-full btn justify-center py-2 text-lg"-->
          <!--  >-->
          <!--    Migrate to Voken Blockchain-->
          <!--  </nuxt-link>-->
          <!--</div>-->
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
                <span class="token text-gray-500" id="currency-eth">
                  ETH
                </span>
            </div>
          </div>

          <!-- As -->
          <div class="mt-4 block font-mono font-bold text-sm text-indigo-600">
            {{ $t('earlyBird.As') }}
          </div>

          <div
            class="mt-1 w-full flex items-center justify-between py-3 px-6 font-mono bg-gradient-to-r from-indigo-100 via-indigo-50 to-indigo-100 border border-indigo-500 rounded shadow">
            <span class="text-indigo-600">
              <comp-number :value="usdAmount.toString()" :decimals="6" :mantissa="3" :padding="true" />
            </span>

            <span class="token text-indigo-600">
              USD
            </span>
          </div>

          <!-- Arrow -->
          <div class="mt-8 flex items-center justify-center text-indigo-600">
            <fa :icon="['fas', 'arrow-down']"/>
          </div>

          <!-- Get -->
          <div class="mt-4 block font-mono font-bold text-sm text-indigo-600">
            {{ $t('earlyBird.To_get__estimated_') }}
          </div>

          <div
            class="mt-1 w-full flex items-center justify-between py-3 px-6 font-mono bg-gradient-to-r from-indigo-500 to-indigo-600 border border-indigo-600 rounded shadow">
            <span class="text-indigo-50">
              <comp-number :value="vokenAmount.toString()" :mantissa="3" :padding="true" />
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
                     class='input-indigo w-full py-3 pl-4 pr-10 font-mono text-sm'
                     v-model='bindToVokenAddress'
                     :placeholder="$t('earlyBird.Enter_a_valid_VOKEN_wallet_address')"/>

              <layout-input-esw />
            </div>

            <div v-if="refStatus === 'success'" class="mt-1 text-sm text-center text-green-700">
              {{ $t('earlyBird.Bind_first_then__') }}
            </div>
          </div>

          <!-- Buttons -->
          <div v-show="showButtons"
               class="flex justify-between space-x-2"
          >
            <button v-if="showBtnBind" class="w-1/3 btn justify-center py-3 font-bold text-xl" @click="bind">
              {{ $t('earlyBird.Bind') }}
            </button>

            <button :class="{'w-full': !showBtnBind, 'w-2/3': showBtnBind}"
                    class="btn btn-pink justify-center py-3 font-bold text-xl"
                    @click="swap"
            >
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
  </div>
</template>

<script>
import BigNumber from 'bignumber.js'
import vokenAddress from '@voken/address'
import DAPP from '~/utils/constants/dapp'
import fnEthereum from '~/utils/fnEthereum'
import fnFormat from '~/utils/fnFormat'

export default {
  name: "EarlyBirdSwap2",
  data() {
    return {
      gas: 0,

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
      const min = this.ether.web3().utils.fromWei(this.earlyBird.weiMin, 'ether')
      const max = this.ether.web3().utils.fromWei(this.earlyBird.weiMax, 'ether')

      const bnMin = new BigNumber(min)
      const bnMax = new BigNumber(max)

      if (this.etherAmount) {
        let etherAmount = fnFormat.fixNumberStr(this.etherAmount, 18)

        // if (!etherAmount) {
        //   this.etherAmount = max
        //   return
        // }

        let bn = new BigNumber(etherAmount)

        // max
        if (bn.gt(bnMax)) {
          this.etherAmount = max
          return
        }

        // min
        if (bn.gt(0) && bn.lt(bnMin)) {
          this.etherAmount = min
          return
        }

        this.etherAmount = etherAmount
      }
    },
    async bindToVokenAddress() {
      if (this.bindToVokenAddress) {
        try {
          this.setRefError()
          this.bindToVokenInt = vokenAddress.toBN(this.bindToVokenAddress).toString()

          // self
          if (this.bindToVokenAddress === this.voken.account.vokenAddress) {
            this.setRefError(this.$t('voken.sale.Cannot_be_YOUR_OWN'))
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
                this.setRefError(this.$t('voken.sale.Invalid_referral_address'))
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
  async mounted() {
    this.bindToVokenAddress = this.$store.state.referral.vokenAddress

    if (this.earlyBird.account.issued === '0') {
      await this.estimateGas()
    }
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

    /**
     * Gas
     */
    fee() {
      return new BigNumber(this.gas).multipliedBy(this.ether.gasPrice)
    },
    balanceMin() {
      return new BigNumber(this.weiAmountSample).plus(this.fee)
    },
    balanceMinStr() {
      return this.ether.web3().utils.fromWei(this.balanceMin.toString(), 'ether')
    },
    showBalanceTips() {
      return this.earlyBird.account.issued === '0' && new BigNumber(this.ether.balance).lt(this.balanceMin)
    },

    /**
     * Amount
     */
    etherAmountSample() {
      return this.etherAmount >= '0.1' ? this.etherAmount : this.ether.web3().utils.fromWei(this.earlyBird.weiMax, 'ether')
    },
    weiAmountSample() {
      return this.ether.web3().utils.toWei(this.etherAmountSample, 'ether')
    },
    weiAmount() {
      return this.ether.web3().utils.toWei(this.etherAmount > '0' ? this.etherAmount : '0', 'ether')
    },
    usdAmount() {
      return new BigNumber(this.etherAmount ? this.etherAmount : this.ether.web3().utils.fromWei(this.earlyBird.weiMax, 'ether'))
        .multipliedBy(new BigNumber(this.ether.usdPrice))
        // .dividedBy(10 ** 6)
        // .toFixed(3)
    },
    vokenAmount() {
      return new BigNumber(this.etherAmount ? this.etherAmount : this.ether.web3().utils.fromWei(this.earlyBird.weiMax, 'ether'))
        .multipliedBy(new BigNumber(this.ether.usdPrice))
        .dividedBy(new BigNumber(this.earlyBird.usdPrice))
        // .toFixed(3)
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
        return this.$t('voken.sale.Via__Referral_Voken_Address')
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
    async estimateGas() {
      let gas = 0


      if (fnEthereum.isZeroAddress(this.voken.account.referrer)) {
        gas += 70000
      }

      let address = DAPP.TEST_ADDRESS
      let value = this.earlyBird.weiMin

      if (new BigNumber(this.weiAmountSample).plus(this.ether.web3().utils.toWei('0.2', 'ether')).lt(new BigNumber(this.ether.balance))) {
        address = this.ether.account
        value = this.weiAmountSample
      }

      let tx = {
        from: address,
        to: DAPP.CONTRACT_ADDRESS_EARLY_BIRD,
        value: value,
      }

      if (new BigNumber(this.ether.balanceStr).gte(new BigNumber('0.2'))) {
        tx.from = this.ether.account
      }

      await this.ether
        .web3().eth.estimateGas(tx)
        .then(estimateGas => {
          gas += (Math.floor(estimateGas / 10000) + 2) * 10000
        })
        .catch(error => {
          gas += 400000
          console.error(error)
        })

      this.gas = gas
    },

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

          await this.$store.dispatch('voken/SYNC_DATA')
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

      if (new BigNumber(this.ether.balance).lt(this.balanceMin)) {
        await this.onSwapError({
          message: 'insufficient funds'
        })
        return
      }


      let tx = {
        from: this.ether.account,
        to: DAPP.CONTRACT_ADDRESS_EARLY_BIRD,
        value: this.weiAmount,
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

          await this.$store.dispatch('vokenEarlyBirdSale/SYNC_DATA')
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
