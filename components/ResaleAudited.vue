<template>
  <layout-bg-a class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Private Placement Review
        </template>
      </layout-h2>

      <div class="audited">
        <div class="audited-wrapper">
          <div class="audited-header">
            Voken1.0
          </div>
          <dl class="audited-body">
            <div v-show="account.v1.weiPurchased > '0' || account.v1.weiRewarded > '0'">
              <dt>
                You have sent
              </dt>
              <dd>
                <span class="sign">
                  +
                </span>
                <number-obj :value-obj="account.v1.weiPurchasedObj" />
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
            <div v-show="account.v1.weiPurchased > '0' || account.v1.weiRewarded > '0'">
              <dt>
                You have received
              </dt>
              <dd>
                <span class="sign">
                  -
                </span>
                <number-obj :value-obj="account.v1.weiRewardedObj" />
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>

            <div class="then">
              Then,
            </div>

            <div v-show="account.v1.txsIn || account.v1.txsOut">
              <dt>
                Income
              </dt>
              <dd>
                {{ account.v1.txsIn }}
                <span class="unit">
                  Transactions
                </span>
              </dd>
            </div>
            <div v-show="account.v1.txsIn || account.v1.txsOut">
              <dt>
                Outcome
              </dt>
              <dd>
                {{ account.v1.txsOut }}
                <span class="unit">
                  Transactions
                </span>
              </dd>
            </div>

            <div class="now">
              Till now,
            </div>

            <div v-show="account.v1.balance > '0'">
              <dt>
                Holding
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.balanceObj" />
                <span class="unit">
                  Voken1.0
                </span>
              </dd>
            </div>
            <div v-show="account.v1.balance > '0'">
              <dt>
                Proportion
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.proportionObj" />
                <span class="unit">
                  %
                </span>
              </dd>
            </div>
            <div v-show="account.v1.weiAudit > '0'">
              <dt>
                Audited Cost
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.weiAuditObj" />
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
          </dl>
        </div>

        <div class="audited-wrapper">
          <div class="audited-header">
            Voken2.0
          </div>
          <dl class="audited-body">
            <div v-show="account.v2.weiPurchased > '0' || account.v2.weiRewarded > '0'">
              <dt>
                You have sent
              </dt>
              <dd>
                <span class="sign">
                  +
                </span>
                <number-obj :value-obj="account.v2.weiPurchasedObj" />
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
            <div v-show="account.v2.weiPurchased > '0' || account.v2.weiRewarded > '0'">
              <dt>
                You have received
              </dt>
              <dd>
                <span class="sign">
                  -
                </span>
                <number-obj :value-obj="account.v2.weiRewardedObj" />
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>

            <div class="then">
              Then,
            </div>

            <div v-show="account.v2.txsIn || account.v2.txsOut">
              <dt>
                Income
              </dt>
              <dd>
                {{ account.v2.txsIn }}
                <span class="unit">
                  Transactions
                </span>
              </dd>
            </div>
            <div v-show="account.v2.txsIn || account.v2.txsOut">
              <dt>
                Outcome
              </dt>
              <dd>
                {{ account.v2.txsOut }}
                <span class="unit">
                  Transactions
                </span>
              </dd>
            </div>

            <div class="now">
              Till now,
            </div>

            <div v-show="account.v2.balance > '0'">
              <dt>
                Holding
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.balanceObj" />
                <span class="unit">
                  Voken2.0
                </span>
              </dd>
            </div>
            <div v-show="account.v2.balance > '0'">
              <dt>
                Proportion
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.proportionObj" />
                <span class="unit">
                  %
                </span>
              </dd>
            </div>
            <div v-show="account.v2.weiAudit > '0'">
              <dt>
                Audited Cost
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.weiAuditObj" />
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </layout-bg-a>
</template>

<script>
export default {
  name: "ResaleAudited",
  computed: {
    account() {
      return this.$store.state.vokenResale.account
    }
  }
}
</script>

<style scoped>

</style>
