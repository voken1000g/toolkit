<template>
  <div class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Option 2: Upgrade to VokenTB
        </template>
      </layout-h2>



      <div class="audited">
        <!-- Voken1.0 Upgrade -->
        <div v-show="showV1Upgrade" class="audited-wrapper">
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
            <div v-show="v1UpgradeAllowed && account.v1.weiAudit > '0'">
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

            <div v-show="v1UpgradeAllowed && v1UsdUpgrade > '0'">
              <dt>
                <p>
                  You <span v-if="account.v1.upgrade.timestamp">have used</span><span v-else>can use</span> the ETH as
                </p>
                <p>
                  $<number-obj :value-obj="account.v1.upgrade.etherUSDPriceObj"/>
                  x
                  <number-obj :value-obj="account.v1.weiAuditObj"/>
                  =
                </p>
              </dt>
              <dd>
                <number-obj :value-obj="v1UsdUpgradeObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v1UpgradeAllowed && v1UsdUpgrade > '0'">
              <dt>
                <p>
                  For upgrading to
                </p>
                <p>
                  $<number-obj :value-obj="v1UsdUpgradeObj"/>
                  /
                  <number-obj :value-obj="account.v1.upgrade.vokenUSDPriceObj"/>
                  =
                </p>
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.upgrade.claimObj"/>
                <span class="unit">
                  VokenTB
                </span>
              </dd>
            </div>

            <div v-show="v1UpgradeAllowed && v1UsdUpgrade > '0'">
              <dt>
                With an additional bonus
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.upgrade.bonusObj"/>
                <span class="unit">
                  VokenTB
                </span>
              </dd>
            </div>


            <div v-show="v1UpgradeAllowed && showV1UpgradeBtn">
              <button class="mt-2 w-full btn btn-purple justify-center py-2 text-lg"
                      @click="v1Upgrade"
              >
                Apply for Upgrade
              </button>
            </div>

            <tx-info class="mt-4 mb-2" :status="txV1UpgradeStatus"
                     :hash="txV1UpgradeHash"
                     :confirmation="txV1UpgradeConfirmation"
                     :message="txV1UpgradeMessage"/>
          </dl>
        </div>

        <!-- Voken2.0 Upgrade -->
        <div v-show="showV2Upgrade" class="audited-wrapper">
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

            <div v-show="account.v2.weiAudit > '0'">
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

            <div v-show="v2UsdUpgrade > '0'">
              <dt>
                <p>
                  You <span v-if="account.v2.upgrade.timestamp">have used</span><span v-else>can use</span> the ETH as
                </p>
                <p>
                  $<number-obj :value-obj="account.v2.upgrade.etherUSDPriceObj"/>
                  x
                  <number-obj :value-obj="account.v2.weiAuditObj"/>
                  =
                </p>
              </dt>
              <dd>
                <number-obj :value-obj="v2UsdUpgradeObj"/>
                <span class="unit">
                  USD(DAI)
                </span>
              </dd>
            </div>

            <div v-show="v2UsdUpgrade > '0'">
              <dt>
                <p>
                  For upgrading to
                </p>
                <p>
                  $<number-obj :value-obj="v2UsdUpgradeObj"/>
                  /
                  <number-obj :value-obj="account.v2.upgrade.vokenUSDPriceObj"/>
                  =
                </p>
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.upgrade.claimObj"/>
                <span class="unit">
                  VokenTB
                </span>
              </dd>
            </div>

            <div v-show="v2UsdUpgrade > '0'">
              <dt>
                With an additional bonus
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.upgrade.bonusObj"/>
                <span class="unit">
                  VokenTB
                </span>
              </dd>
            </div>

            <div v-show="account.v2.upgrade.timestamp === 0 && showV2UpgradeBtn">
              <button class="mt-2 w-full btn btn-purple justify-center py-2 text-lg"
                      @click="v2Upgrade"
              >
                Apply for Upgrade
              </button>
            </div>

            <tx-info class="mt-4 mb-2" :status="txV2UpgradeStatus"
                     :hash="txV2UpgradeHash"
                     :confirmation="txV2UpgradeConfirmation"
                     :message="txV2UpgradeMessage"/>
          </dl>
        </div>
      </div>


    </div>

    <div class="mt-4 xl:mt-8 resp-wide">
      <div
        class="mx-auto max-w-3xl bg-gradient-to-r from-orange-100 via-orange-50 to-orange-100 border border-orange-200 rounded py-3 px-2 xl:px-6 text-lg text-orange-700 text-center"
      >
        <div>
          <number-obj :value-obj="status.processInPercentObj"/>
          %
          of total 21,000,000 VokenTB upgraded.
          <span v-show="status.processInPercentObj.d >= '100'">
            cap reached.
          </span>
        </div>
        <div class="mt-2 xl:mt-3">
          You can only apply for resale.
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import BigNumber from "bignumber.js";
import fnFormat from "~/utils/fnFormat";

export default {
  name: "UpgradeU",
  data() {
    return {
      showV1UpgradeBtn: true,
      txV1UpgradeStatus: -1,
      txV1UpgradeHash: null,
      txV1UpgradeConfirmation: 0,
      txV1UpgradeMessage: null,

      showV2UpgradeBtn: true,
      txV2UpgradeStatus: -1,
      txV2UpgradeHash: null,
      txV2UpgradeConfirmation: 0,
      txV2UpgradeMessage: null,
    }
  },
  computed: {
    status() {
      return this.$store.state.vokenResale.status
    },
    account() {
      return this.$store.state.vokenResale.account
    },



    showV1Upgrade() {
      return this.account.v1.balance > '0' && this.account.v1.resale.timestamp === 0
    },
    showV2Upgrade() {
      return this.account.v2.balance > '0' && this.account.v2.resale.timestamp === 0
    },

    v1UpgradeAllowed() {
      return this.account.v1.upgrade.timestamp === 0 && this.account.v1.resale.timestamp === 0
    },
    v2UpgradeAllowed() {
      return this.account.v2.upgrade.timestamp === 0 && this.account.v2.resale.timestamp === 0
    },

    v1UpgradeApplied() {
      return this.account.v1.upgrade.timestamp > 0
    },
    v1ClaimAllowed() {
      return this.account.v1.upgrade.timestamp > 0 && this.account.v1.upgrade.usdQuota > '0'
    },


    v2UpgradeApplied() {
      return this.account.v2.upgrade.timestamp > 0
    },
    v2ClaimAllowed() {
      return this.account.v2.upgrade.timestamp > 0 && this.account.v2.upgrade.usdQuota > '0'
    },


    v1UsdUpgrade() {
      return (
        new BigNumber(this.account.v1.weiAudit)
          .multipliedBy(this.account.v1.upgrade.etherUSDPrice)
          .div(10 ** 18)
          .toString()
      )
    },
    v1UsdUpgradeStr() {
      return fnFormat.ns2Str(this.v1UsdUpgrade, 6)
    },
    v1UsdUpgradeObj() {
      return fnFormat.ns2Obj(this.v1UsdUpgradeStr)
    },

    v2UsdUpgrade() {
      return (
        new BigNumber(this.account.v2.weiAudit)
          .multipliedBy(this.account.v2.upgrade.etherUSDPrice)
          .div(10 ** 18)
          .toString()
      )
    },
    v2UsdUpgradeStr() {
      return fnFormat.ns2Str(this.v2UsdUpgrade, 6)
    },
    v2UsdUpgradeObj() {
      return fnFormat.ns2Obj(this.v2UsdUpgradeStr)
    }
  },
  methods: {
    async v1Upgrade() {
      this.showV1UpgradeBtn = false
      this.txV1UpgradeStatus = 0
      this.txV1UpgradeMessage = null

      await this.$store.state.vokenResale.contract().methods.applyV1Upgrade()
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onV1UpgradeTransactionHash)
        .on('receipt', this.onV1UpgradeReceipt)
        .on('confirmation', this.onV1UpgradeConfirmation)
        .on('error', this.onV1UpgradeError)
        .catch(this.onV1UpgradeError)
    },
    async onV1UpgradeTransactionHash(txHash) {
      this.txV1UpgradeStatus = 0
      this.txV1UpgradeHash = txHash
    },
    async onV1UpgradeReceipt(receipt) {
      this.txV1UpgradeMessage = null

      if (receipt.status) {
        this.txV1UpgradeStatus = 1
      } else {
        this.txV1UpgradeStatus = 3
      }
    },
    async onV1UpgradeConfirmation(confirmation) {
      if (this.txV1UpgradeStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txV1UpgradeStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txV1UpgradeStatus = 2
        } else {
          this.txV1UpgradeStatus = 2
          await this.$store.dispatch('vokenUpgrade/SYNC_ACCOUNT')
          await this.$store.dispatch('vokenUpgrade/SYNC_ACCOUNT_V1_UPGRADE')
        }

        this.txV1UpgradeConfirmation = confirmation
      }
    },
    async onV1UpgradeError(error) {
      this.txV1UpgradeStatus = 3
      this.txV1UpgradeMessage = error.message
      this.showV1UpgradeBtn = true
    },

    async v2Upgrade() {
      this.showV2UpgradeBtn = false
      this.txV2UpgradeStatus = 0
      this.txV2UpgradeMessage = null

      await this.$store.state.vokenResale.contract().methods.applyV2Upgrade()
        .send({'from': this.$store.state.ether.account})
        .on('transactionHash', this.onV2UpgradeTransactionHash)
        .on('receipt', this.onV2UpgradeReceipt)
        .on('confirmation', this.onV2UpgradeConfirmation)
        .on('error', this.onV2UpgradeError)
        .catch(this.onV2UpgradeError)
    },
    async onV2UpgradeTransactionHash(txHash) {
      this.txV2UpgradeStatus = 0
      this.txV2UpgradeHash = txHash
    },
    async onV2UpgradeReceipt(receipt) {
      this.txV2UpgradeMessage = null

      if (receipt.status) {
        this.txV2UpgradeStatus = 1
      } else {
        this.txV2UpgradeStatus = 3
      }
    },
    async onV2UpgradeConfirmation(confirmation) {
      if (this.txV2UpgradeStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txV2UpgradeStatus = 1
        } else if (confirmation >= 6 && confirmation < 10) {
          this.txV2UpgradeStatus = 2
        } else {
          this.txV2UpgradeStatus = 2
          await this.$store.dispatch('vokenUpgrade/SYNC_ACCOUNT')
          await this.$store.dispatch('vokenUpgrade/SYNC_ACCOUNT_V2_UPGRADE')
        }

        this.txV2UpgradeConfirmation = confirmation
      }
    },
    async onV2UpgradeError(error) {
      this.txV2UpgradeStatus = 3
      this.txV2UpgradeMessage = error.message
      this.showV2UpgradeBtn = true
    },
  }
}
</script>

<style scoped>

</style>
