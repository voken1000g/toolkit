<template>
  <div class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          {{ $t('v12.Private_Placement_Review') }}
        </template>
      </layout-h2>

      <article class="mt-3 xl:mt-6 prose lg:prose-lg xl:prose-xl max-w-none">
        <p>
          {{ $t('v12.For_the_users__holding__') }}
        </p>

        <pre>ETH.sent - ETH.rewarded</pre>

        <p>
          {{ $t('v12.Then__for_each_tx__') }}
        </p>

        <pre>tx.amount * tx.price + recipient.amount * recipient.price</pre>

        <p class="break-all">
          {{ $t('v12.Here_is__summary__') }}
          <span class="font-mono">({{ $store.state.ether.account }})</span>:
        </p>
      </article>

      <div class="audited">
        <div class="audited-wrapper">
          <div class="audited-header">
            Voken1.0
          </div>
          <dl class="audited-body">
            <div v-show="showV1Wei">
              <dt>
                {{ $t('v12.You_have_sent') }}
              </dt>
              <dd>
                <span class="sign">
                  +
                </span>
                <number-obj :value-obj="account.v1.weiPurchasedObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
            <div v-show="showV1Wei">
              <dt>
                {{ $t('v12.and_received') }}
              </dt>
              <dd>
                <span class="sign">
                  -
                </span>
                <number-obj :value-obj="account.v1.weiRewardedObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>

            <div v-show="showV1Wei && showV1Txs" class="then">
              {{ $t('v12.Then_') }}
            </div>

            <div v-show="showV1Txs">
              <dt>
                {{ $t('v12.Income') }}
              </dt>
              <dd>
                {{ account.v1.txsIn }}
                <span class="unit">
                  {{ $t('v12.Transactions') }}
                </span>
              </dd>
            </div>
            <div v-show="showV1Txs">
              <dt>
                {{ $t('v12.Outcome') }}
              </dt>
              <dd>
                {{ account.v1.txsOut }}
                <span class="unit">
                  {{ $t('v12.Transactions') }}
                </span>
              </dd>
            </div>

            <div class="now">
              {{ $t('v12.Till_now_') }}
            </div>

            <div>
              <dt>
                {{ $t('v12.Holding__') }}
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.balanceObj"/>
                <span class="unit">
                  Voken1.0
                </span>
              </dd>
            </div>
            <div v-show="account.v1.balance > '0'">
              <dt>
                {{ $t('v12.Proportion') }}
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.proportionObj"/>
                <span class="unit">
                  %
                </span>
              </dd>
            </div>
            <div v-show="account.v1.weiAudit > '0'">
              <dt>
                {{ $t('v12.Audited_Cost') }}
              </dt>
              <dd>
                <number-obj :value-obj="account.v1.weiAuditObj"/>
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
            <div v-show="showV2Wei">
              <dt>
                {{ $t('v12.You_have_sent') }}
              </dt>
              <dd>
                <span class="sign">
                  +
                </span>
                <number-obj :value-obj="account.v2.weiPurchasedObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
            <div v-show="showV2Wei">
              <dt>
                {{ $t('v12.and_received') }}
              </dt>
              <dd>
                <span class="sign">
                  -
                </span>
                <number-obj :value-obj="account.v2.weiRewardedObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>

            <div v-show="showV2Wei && showV2Txs" class="then">
              {{ $t('v12.Then_') }}
            </div>

            <div v-show="showV2Txs">
              <dt>
                {{ $t('v12.Income') }}
              </dt>
              <dd>
                {{ account.v2.txsIn }}
                <span class="unit">
                  {{ $t('v12.Transactions') }}
                </span>
              </dd>
            </div>
            <div v-show="showV2Txs">
              <dt>
                {{ $t('v12.Outcome') }}
              </dt>
              <dd>
                {{ account.v2.txsOut }}
                <span class="unit">
                  {{ $t('v12.Transactions') }}
                </span>
              </dd>
            </div>

            <div class="now">
              {{ $t('v12.Till_now_') }}
            </div>

            <div>
              <dt>
                {{ $t('v12.Holding__') }}
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.balanceObj"/>
                <span class="unit">
                  Voken2.0
                </span>
              </dd>
            </div>
            <div v-show="account.v2.balance > '0'">
              <dt>
                {{ $t('v12.Proportion') }}
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.proportionObj"/>
                <span class="unit">
                  %
                </span>
              </dd>
            </div>
            <div v-show="account.v2.weiAudit > '0'">
              <dt>
                {{ $t('v12.Audited_Cost') }}
              </dt>
              <dd>
                <number-obj :value-obj="account.v2.weiAuditObj"/>
                <span class="unit">
                  ETH
                </span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "V12Audited",
  computed: {
    account() {
      return this.$store.state.vokenResale.account
    },

    showV1Wei() {
      return this.account.v1.weiPurchased > '0' || this.account.v1.weiRewarded > '0'
    },
    showV2Wei() {
      return this.account.v2.weiPurchased > '0' || this.account.v2.weiRewarded > '0'
    },
    showV1Txs() {
      return this.account.v1.txsIn || this.account.v1.txsOut
    },
    showV2Txs() {
      return this.account.v2.txsIn || this.account.v2.txsOut
    },
  }
}
</script>

<style scoped>

</style>
