<template>
  <div class="py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ $t('voken.referral.Direct_Referral_Records') }}
        </h2>

      </div>
    </div>

    <div class="resp-mt direct-referral-list">
      <ul v-if="referrals.length > 0">
        <li v-for="referral in referrals">
          <div class="drl-block">
            <a target="_blank" :href="fnEtherscan.tx(referral.transactionHash)">
              #{{ referral.blockNumber }}
            </a>
          </div>

          <div class="drl-address">
            <a target="_blank" :href="fnEtherscan.address(referral.account)">
              {{ referral.account }}
            </a>
          </div>
        </li>
      </ul>
      <div v-else class="text-center text-gray-500">
        {{ $t('voken.referral.No_Referral_Record') }}
      </div>
    </div>

  </div>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'
import fnFormat from '~/utils/fnFormat'
import fnEtherscan from '~/utils/fnEtherscan'

export default {
  name: "VokenDirectReferralList",
  components: {VueAvatar},
  data() {
    return {
      fnEtherscan: fnEtherscan,

      rewards: [],
      referrals: [],
    }
  },
  async mounted() {
    await this.getReferrerSet()
  },
  methods: {
    async getReferrerSet() {
      await this.$store.state.voken.contract()
        .getPastEvents(
          'ReferrerSet', {
            filter: {
              referrerAccount: this.$store.state.ether.account
            },
            fromBlock: 0,
            toBlock: 'latest'
          }
        )
        .then(this.onGetReferrerSet)
        .catch(this.onRewardsError)
    },
    async onGetReferrerSet(events) {
      if (events.length > 0) {
        console.log('::: onGetReferrerSet events:', events)

        let referrals = []
        for (let i = 0; i < events.length; i++) {
          referrals.push({
            blockNumber: fnFormat.ns2Str(events[i].blockNumber, 0),
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.account,
          })
        }

        this.referrals = referrals
      }
    },
    async onRewardsError(error) {
      console.error('::: C[EarlyBirdReferralRewards] onRewardsError:', error)
    }
  }
}
</script>

<style scoped>
li {
  @apply py-4 font-mono;

  .eth-account-avatar {
    @apply w-7 h-7 bg-white border rounded-full
  }
}

a {
  &:hover {
    @apply text-gray-900;
  }
}
</style>
