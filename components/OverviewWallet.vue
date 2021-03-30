<template>
  <div class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="div-striped-list-header space-x-2">
        <div>
          <h3>
            ETH & VokenTB Wallet
          </h3>
          <p>
            {{ ether.account }}
          </p>
        </div>
        <div class="text-3xl text-gray-500">
          <fa v-show="voken.account.isBank" :icon="['fas', 'compact-disc']"/>
          <fa v-show="!voken.account.isBank" :icon="['fas', 'user-circle']"/>
        </div>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="div-striped-list-card">
            <dt>
              ETH Balance
            </dt>
            <dd>
              <fa :icon="['fab', 'ethereum']" class="text-indigo-600"/>
              {{ ether.balanceStr }} ETH
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              VokenTB Balance
            </dt>
            <dd>
              <div>
                <number-obj :value-obj="voken.account.balanceObj" />
                VokenTB
                <span v-show="voken.account.balance > '0'">
                  <span v-if="voken.account.balance === voken.account.vesting" class="text-gray-400">
                    (vesting)
                  </span>
                  <span v-else-if="voken.account.balance === voken.account.available" class="text-gray-400">
                    (all available)
                  </span>
                  <span v-else>
                    :: <number-obj :value-obj="voken.account.availableObj" /> available
                  </span>
                </span>
              </div>

              <div v-show="ebAccount.summed > '0'" class="mt-1 ml-2 text-xs text-gray-400">
                Include <number-obj :value-obj="ebAccount.summedObj" />
                VokenTB via Early-Bird Sale
              </div>
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              Voken Wallet Address
            </dt>
            <dd>
              <div v-if="voken.account.vokenInt > '0'">
                <div>
                  {{ voken.account.vokenAddress }}
                </div>
                <div class="mt-1 text-blue-700">
                  For Voken Blockchain, both beta and prod
                </div>
              </div>
              <div v-else>
                <nuxt-link :to="localePath('/wallet/bind')"
                           class="btn btn-pink py-1 px-3 text-sm text-center break-normal"
                >
                  {{ $t('nav.Wallet_Bind') }}
                </nuxt-link>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewWallet",
  computed: {
    ether() {
      return this.$store.state.ether
    },
    voken() {
      return this.$store.state.voken
    },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    },
    ebAccount() {
      return this.$store.state.vokenEarlyBirdSale.account
    }
  }
}
</script>

<style scoped>

</style>
