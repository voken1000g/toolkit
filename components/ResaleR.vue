<template>
  <layout-bg-a class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Option 1: Resale
        </template>

        <template #text>
          Get your investment back
        </template>
      </layout-h2>


      <div class="audited">
        <!-- Voken1.0 Resale -->
        <div v-show="showV1Resale" class="audited-wrapper">
          <div class="audited-header">
            Voken1.0
          </div>
          <dl class="audited-body">
            <div>
              <dt>
                Holding (Deprecated)
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.balanceObj"/>
                <span class="unit">
                  Voken2.0
                </span>
              </dd>
            </div>
            <div v-show="v1ResaleAllowed && account.v1.weiAudit > '0'">
              <dt>
                Audited Cost
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.weiAuditObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>

            <div v-show="v1ResaleAllowed && v1UsdAudit > '0'">
              <dt>
                <p>
                  You can apply to resale for
                </p>
                <p>
                  $<number-obj :value-obj="status.resaleEtherUSDPriceObj"/>
                  x
                  <number-obj :value-obj="account.v1.weiAuditObj"/>
                  =
                </p>
              </dt>
              <dd>
                <number-obj :value-obj="v1UsdAuditObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v1ResaleApplied">
              <dt>
                Applied at
              </dt>
              <span class="unit">
                {{ $moment(account.v1.resale.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}
              </span>
            </div>

            <div v-show="v1ResaleApplied">
              <dt>
                Audited
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.resale.usdAuditObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>


            <div v-show="v1ResaleApplied">
              <dt>
                Claimed
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.resale.usdClaimedObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v1ResaleApplied">
              <dt>
                Available to claim
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.resale.usdQuotaObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v1ResaleAllowed && showV1ResaleBtn">
              <button class="mt-2 w-full btn btn-purple justify-center py-2 text-lg"
                      @click="v1Resale"
              >
                Apply for Resale
              </button>
            </div>

            <tx-info class="mt-4 mb-2" :status="txV1ResaleStatus"
                     :hash="txV1ResaleHash"
                     :confirmation="txV1ResaleConfirmation"
                     :message="txV1ResaleMessage"/>

            <div v-show="v1ClaimAllowed && showV1ClaimBtn">
              <button class="mt-2 w-full btn btn-purple justify-center py-2 text-lg"
                      @click="v1Claim"
              >
                Claim {{ account.v1.resale.usdQuotaStr }} USD(DAI)
              </button>
            </div>

            <tx-info class="mt-4 mb-2" :status="txV1ClaimStatus"
                     :hash="txV1ClaimHash"
                     :confirmation="txV1ClaimConfirmation"
                     :message="txV1ClaimMessage"/>
          </dl>
        </div>

        <!-- Voken2.0 Resale -->
        <div v-show="showV2Resale" class="audited-wrapper">
          <div class="audited-header">
            Voken2.0
          </div>
          <dl class="audited-body">
            <div>
              <dt>
                Holding (Deprecated)
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.balanceObj"/>
                <span class="unit">
                  Voken2.0
                </span>
              </dd>
            </div>
            <div v-show="v2ResaleAllowed && account.v2.weiAudit > '0'">
              <dt>
                Audited Cost
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.weiAuditObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>

            <div v-show="v2ResaleAllowed && v2UsdAudit > '0'">
              <dt>
                <p>
                  You can apply to resale for
                </p>
                <p>
                  $<number-obj :value-obj="status.resaleEtherUSDPriceObj"/>
                  x
                  <number-obj :value-obj="account.v2.weiAuditObj"/>
                  =
                </p>
              </dt>
              <dd>
                <number-obj :value-obj="v2UsdAuditObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v2ResaleApplied">
              <dt>
                Applied at
              </dt>
              <dd>
                <span class="unit">
                  {{ $moment(account.v2.resale.timestamp * 1000).format('YYYY-MM-DD HH:mm:ss') }}
                </span>
              </dd>
            </div>

            <div v-show="v2ResaleApplied">
              <dt>
                Audited
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.resale.usdAuditObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v2ResaleApplied">
              <dt>
                Claimed
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.resale.usdClaimedObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v2ResaleApplied">
              <dt>
                Available to claim
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.resale.usdQuotaObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v2ResaleAllowed && showV2ResaleBtn">
              <button class="mt-2 w-full btn btn-purple justify-center py-2 text-lg"
                      @click="v2Resale"
              >
                Apply for Resale
              </button>
            </div>

            <tx-info class="mt-4 mb-2" :status="txV2ResaleStatus"
                     :hash="txV2ResaleHash"
                     :confirmation="txV2ResaleConfirmation"
                     :message="txV2ResaleMessage"/>

            <div v-show="v2ClaimAllowed && showV2ClaimBtn">
              <button class="mt-2 w-full btn btn-purple justify-center py-2 text-lg"
                      @click="v2Claim"
              >
                Claim {{ account.v2.resale.usdQuotaStr }} USD(DAI)
              </button>
            </div>

            <tx-info class="mt-4 mb-2" :status="txV2ClaimStatus"
                     :hash="txV2ClaimHash"
                     :confirmation="txV2ClaimConfirmation"
                     :message="txV2ClaimMessage"/>
          </dl>
        </div>
      </div>
    </div>

  </layout-bg-a>
</template>

<script>
import BigNumber from "bignumber.js"
import fnFormat from "~/utils/fnFormat"

export default {
  name: "ResaleR",
  data() {
    return {
      showV1ResaleBtn: true,
      txV1ResaleStatus: -1,
      txV1ResaleHash: null,
      txV1ResaleConfirmation: 0,
      txV1ResaleMessage: null,

      showV2ResaleBtn: true,
      txV2ResaleStatus: -1,
      txV2ResaleHash: null,
      txV2ResaleConfirmation: 0,
      txV2ResaleMessage: null,

      showV1ClaimBtn: true,
      txV1ClaimStatus: -1,
      txV1ClaimHash: null,
      txV1ClaimConfirmation: 0,
      txV1ClaimMessage: null,

      showV2ClaimBtn: true,
      txV2ClaimStatus: -1,
      txV2ClaimHash: null,
      txV2ClaimConfirmation: 0,
      txV2ClaimMessage: null,
    }
  },
  computed: {
    status() {
      return this.$store.state.vokenResale.status
    },
    account() {
      return this.$store.state.vokenResale.account
    },


    showV1Resale() {
      return (
        this.account.v1.balance > '0'
        &&
        (this.account.v1.resale.usdAudit > '0' || this.account.v1.resale.timestamp === 0)
        &&
        this.account.v1.upgrade.timestamp === 0
      )
    },
    showV2Resale() {
      return (
        this.account.v2.balance > '0'
        &&
        (this.account.v2.resale.usdAudit > '0' || this.account.v2.resale.timestamp === 0)
        &&
        this.account.v2.upgrade.timestamp === 0
      )
    },

    v1ResaleAllowed() {
      return this.account.v1.resale.timestamp === 0 && this.account.v1.upgrade.timestamp === 0
    },
    v1ResaleApplied() {
      return this.account.v1.resale.timestamp > 0
    },
    v1ClaimAllowed() {
      return this.account.v1.resale.timestamp > 0 && this.account.v1.resale.usdQuota > '0'
    },

    v2ResaleAllowed() {
      return this.account.v2.resale.timestamp === 0 && this.account.v2.upgrade.timestamp === 0
    },
    v2ResaleApplied() {
      return this.account.v2.resale.timestamp > 0
    },
    v2ClaimAllowed() {
      return this.account.v2.resale.timestamp > 0 && this.account.v2.resale.usdQuota > '0'
    },


    v1UsdAudit() {
      if (this.account.v1.resale.usdAudit > '0') {
        return this.account.v1.resale.usdAudit
      }

      return (
        new BigNumber(this.account.v1.weiAudit)
          .multipliedBy(this.status.resaleEtherUSDPrice)
          .div(10 ** 18)
          .toString()
      )


    },
    v1UsdAuditStr() {
      return fnFormat.ns2Str(this.v1UsdAudit, 6)
    },
    v1UsdAuditObj() {
      return fnFormat.ns2Obj(this.v1UsdAuditStr)
    },

    v2UsdAudit() {
      if (this.account.v2.resale.usdAudit > '0') {
        return this.account.v2.resale.usdAudit
      }

      return (
        new BigNumber(this.account.v2.weiAudit)
          .multipliedBy(this.status.resaleEtherUSDPrice)
          .div(10 ** 18)
          .toString()
      )


    },
    v2UsdAuditStr() {
      return fnFormat.ns2Str(this.v2UsdAudit, 6)
    },
    v2UsdAuditObj() {
      return fnFormat.ns2Obj(this.v2UsdAuditStr)
    }
  },
  methods: {
    async v1Resale() {
      this.showV1ResaleBtn = false
      this.txV1ResaleStatus = 0
      this.txV1ResaleMessage = null

      await this.$store.state.vokenResale.contract().methods.applyV1Resale()
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onV1ResaleTransactionHash)
        .on('receipt', this.onV1ResaleReceipt)
        .on('confirmation', this.onV1ResaleConfirmation)
        .on('error', this.onV1ResaleError)
        .catch(this.onV1ResaleError)
    },
    async onV1ResaleTransactionHash(txHash) {
      this.txV1ResaleStatus = 0
      this.txV1ResaleHash = txHash
    },
    async onV1ResaleReceipt(receipt) {
      this.txV1ResaleMessage = null

      if (receipt.status) {
        this.txV1ResaleStatus = 1
      } else {
        this.txV1ResaleStatus = 3
      }
    },
    async onV1ResaleConfirmation(confirmation) {
      if (this.txV1ResaleStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txV1ResaleStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txV1ResaleStatus = 2
        } else {
          this.txV1ResaleStatus = 2
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT')
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V1_RESALE')
        }

        this.txV1ResaleConfirmation = confirmation
      }
    },
    async onV1ResaleError(error) {
      this.txV1ResaleStatus = 3
      this.txV1ResaleMessage = error.message
      this.showV1ResaleBtn = true
    },

    async v2Resale() {
      this.showV2ResaleBtn = false
      this.txV2ResaleStatus = 0
      this.txV2ResaleMessage = null

      await this.$store.state.vokenResale.contract().methods.applyV2Resale()
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onV2ResaleTransactionHash)
        .on('receipt', this.onV2ResaleReceipt)
        .on('confirmation', this.onV2ResaleConfirmation)
        .on('error', this.onV2ResaleError)
        .catch(this.onV2ResaleError)
    },
    async onV2ResaleTransactionHash(txHash) {
      this.txV2ResaleStatus = 0
      this.txV2ResaleHash = txHash
    },
    async onV2ResaleReceipt(receipt) {
      this.txV2ResaleMessage = null

      if (receipt.status) {
        this.txV2ResaleStatus = 1
      } else {
        this.txV2ResaleStatus = 3
      }
    },
    async onV2ResaleConfirmation(confirmation) {
      if (this.txV2ResaleStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txV2ResaleStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txV2ResaleStatus = 2
        } else {
          this.txV2ResaleStatus = 2
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT')
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V2_RESALE')
        }

        this.txV2ResaleConfirmation = confirmation
      }
    },
    async onV2ResaleError(error) {
      this.txV2ResaleStatus = 3
      this.txV2ResaleMessage = error.message
      this.showV2ResaleBtn = true
    },


    /**
     * Claim (v1)
     */
    async v1Claim() {
      this.showV1ClaimBtn = false
      this.txV1ClaimStatus = 0
      this.txV1ClaimMessage = null

      this.$store.state.vokenResale.contract().methods.claimV1USD()
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onV1ClaimTransactionHash)
        .on('receipt', this.onV1ClaimReceipt)
        .on('confirmation', this.onV1ClaimConfirmation)
        .on('error', this.onV1ClaimError)
        .catch(this.onV1ClaimError)
    },
    async onV1ClaimTransactionHash(txHash) {
      this.txV1ClaimStatus = 0
      this.txV1ClaimHash = txHash
    },
    async onV1ClaimReceipt(receipt) {
      this.txV1ClaimMessage = null

      if (receipt.status) {
        this.txV1ClaimStatus = 1
      } else {
        this.txV1ClaimStatus = 3
      }
    },
    async onV1ClaimConfirmation(confirmation) {
      if (this.txV1ClaimStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txV1ClaimStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txV1ClaimStatus = 2
        } else {
          this.txV1ClaimStatus = 2
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT')
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V1_RESALE')
        }

        this.txV1ClaimConfirmation = confirmation
      }
    },
    async onV1ClaimError(error) {
      this.txV1ClaimStatus = 3
      this.txV1ClaimMessage = error.message
      this.showV1ClaimBtn = true
    },

    /**
     * Claim (v2)
     */
    async v2Claim() {
      this.showV2ClaimBtn = false
      this.txV2ClaimStatus = 0
      this.txV2ClaimMessage = null

      this.$store.state.vokenResale.contract().methods.claimV2USD()
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onV2ClaimTransactionHash)
        .on('receipt', this.onV2ClaimReceipt)
        .on('confirmation', this.onV2ClaimConfirmation)
        .on('error', this.onV2ClaimError)
        .catch(this.onV2ClaimError)
    },
    async onV2ClaimTransactionHash(txHash) {
      this.txV2ClaimStatus = 0
      this.txV2ClaimHash = txHash
    },
    async onV2ClaimReceipt(receipt) {
      this.txV2ClaimMessage = null

      if (receipt.status) {
        this.txV2ClaimStatus = 1
      } else {
        this.txV2ClaimStatus = 3
      }
    },
    async onV2ClaimConfirmation(confirmation) {
      if (this.txV2ClaimStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txV2ClaimStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txV2ClaimStatus = 2
        } else {
          this.txV2ClaimStatus = 2
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT')
          await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V2_RESALE')
        }

        this.txV2ClaimConfirmation = confirmation
      }
    },
    async onV2ClaimError(error) {
      this.txV2ClaimStatus = 3
      this.txV2ClaimMessage = error.message
      this.showV2ClaimBtn = true
    },

  }
}
</script>

<style scoped>

</style>
