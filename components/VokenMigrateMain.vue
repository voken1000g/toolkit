<template>
  <layout-bg-a class="py-24 px-2">
    <div class="max-w-2xl mx-auto">
      <layout-voken-account/>

      <!-- 0 -->
      <div v-if="vokenAccount.balance === '0'" class="resp-mt mx-auto max-w-md">
        <a href="https://get.voken.io/" class="w-full btn btn-pink justify-center py-2 text-lg">
          {{ $t('voken.Go_to_Early_Bird_Sale') }}
        </a>
      </div>

      <!-- No Voken Address -->
      <div v-else-if="vokenAccount.vokenInt === '0'" class="resp-mt mx-auto max-w-md">
        <nuxt-link :to="localePath('/wallet/bind')" class="w-full btn btn-pink justify-center py-2 text-lg">
          {{ $t('voken.Bind_Your_Voken_Wallet_Address') }}
        </nuxt-link>
      </div>

      <!-- Migrate -->
      <div v-else-if="vokenAccount.available > '0'" class="resp-mt mx-auto max-w-md">
        <div :class="amountStatus">
          <label for='migrate-amount'>
            {{ $t('voken.migrate.Migrate') }}
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='migrate-amount'
                   ref="migrate-amount"
                   class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                   v-model="amount"
                   :placeholder="'Maximum: ' + vokenAccount.availableStr"/>

            <layout-input-esw/>
          </div>

          <div
            class="mt-2 bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 border border-orange-200 rounded leading-7 text-sm text-orange-700 text-center py-2 px-3"
          >
            {{ $t('voken.migrate.NOTE__We_recommend_only_migrating__') }}
          </div>
        </div>


        <div v-show="vokenAccount.vokenInt > '0'"
             class="mt-4 text-lg font-mono text-center text-cool-gray-700 break-all"
        >
          {{ $t('voken.migrate.TO_') }}<span class="font-bold">{{ vokenAccount.vokenAddress }}</span>
        </div>

        <button class="mt-8 w-full btn btn-indigo justify-center py-2 text-lg" @click="migrate">
          {{ $t('voken.migrate.Migrate') }}
        </button>

        <tx-info class="mt-4"
                 :status="txStatus"
                 :hash="txHash"
                 :confirmation="txConfirmation"
                 :message="txMessage"/>
      </div>
      <div v-else class="resp-mt mx-auto max-w-md">
        <nuxt-link :to="localePath('/voken/early-bird')" class="w-full btn btn-pink justify-center py-2 text-lg">
          {{ $t('voken.Go_to_Early_Bird_Sale') }}
        </nuxt-link>
      </div>
    </div>

  </layout-bg-a>
</template>

<script>
import BigNumber from "bignumber.js"
import VueAvatar from '@voken/vue-avatar'
import DAPP from '~/utils/constants/dapp'

export default {
  name: "VokenMigrateMain",
  components: {VueAvatar},
  data() {
    return {
      amount: '',

      txStatus: -1,
      txHash: null,
      txConfirmation: 0,
      txMessage: null,
    }
  },
  watch: {
    amount() {
      if (this.amount) {
        this.amount = (
          this.amount.toString()
            .replace(/[^\d.]/g, '')
            .replace(/\.{2,}/g, '.')
            .replace('.', '#')
            .replace(/\./g, '')
            .replace('#', '.')
            .replace(/^(\d+)\.(\d{0,9}).*$/, '$1.$2')
        )

        const bnMin = new BigNumber(1)
        const bnMax = new BigNumber(this.$store.state.voken.account.available).dividedBy(10 ** 9)

        if (!this.amount) {
          this.amount = bnMax.toString()
          return
        }

        let bn = new BigNumber(this.amount)

        if (bn.gt(bnMax)) {
          // max
          this.amount = bnMax.toString()
        } else if (bn.gt(0) && bn.lt(bnMin)) {
          // min
          this.amount = bnMin.toString()
        }
      }
    }
  },
  computed: {
    ether() {
      return this.$store.state.ether
    },
    vokenAccount() {
      return this.$store.state.voken.account
    },
    migrateAmount() {
      if (this.amount) {
        return new BigNumber(this.amount).multipliedBy(10 ** 9).toNumber()
      }

      return 0
    },
    amountStatus() {
      if (this.amount) {
        if (new BigNumber(this.amount).gt(10)) {
          return 'warn'
        }

        return 'success'
      }
      return null
    },
  },
  methods: {
    resetTxInfo() {
      this.txStatus = -1
      this.txHash = null
      this.txConfirmation = 0
      this.txMessage = null
    },

    async migrate() {
      if (this.amountStatus !== 'success' && this.amountStatus !== 'warn') {
        this.$toast.info('Please enter a valid amount.')
        this.$refs['migrate-amount'].focus()
        return null
      }

      if (this.migrateAmount) {
        this.resetTxInfo()

        await this.$store
          .state.voken.contract()
          .methods
          .transfer(DAPP.CONTRACT_ADDRESS_MIGRATE, this.migrateAmount)
          .send({'from': this.ether.account})
          .on('transactionHash', this.onTransactionHash)
          .on('receipt', this.onReceipt)
          .on('confirmation', this.onConfirmation)
          .on('error', this.onError)
          .catch(this.onError)
      }
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
          this.txStatus = -1

          await this.$store.dispatch('voken/SYNC_DATA')
        }

        this.txConfirmation = confirmation
      }
    },
    async onError(error) {
      this.txStatus = 3
      this.txMessage = error.message
    },


  }
}
</script>

<style scoped>

</style>
