<template>
  <div class="py-16 lg:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ $t('earlyBird.rules.Referral_Rewards') }}
        </h2>

      </div>
    </div>

    <div class="resp-mt mx-auto max-w-2xl px-2">
      <ul v-if="rewards.length > 0" class="divide-y divide-gray-200">
        <li v-for="reward in rewards">
          <div class="flex space-x-3">
            <vue-avatar :value='reward.account' class='eth-account-avatar'/>
            <div class="flex-1 space-y-1">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold">
                  {{ reward.ether }} ETH
                </h3>
                <p class="text-sm text-gray-500">
                  <a target="_blank" :href="fnEtherscan.tx(reward.transactionHash)">
                    #{{ reward.blockNumber }}
                  </a>
                </p>
              </div>
              <p class="text-xs md:text-sm text-gray-500 break-all">
                {{ $t('earlyBird.referral.Depth') }} #{{ reward.level }} - {{ reward.account }}
              </p>
            </div>
          </div>
        </li>
      </ul>
      <div v-else class="text-center text-gray-500">
        No Referrals Yet
      </div>
    </div>

  </div>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'
import fnFormat from '~/utils/fnFormat'
import fnEtherscan from '~/utils/fnEtherscan'

export default {
  name: "EarlyBirdReferralRewards",
  components: {VueAvatar},
  data() {
    return {
      fnEtherscan: fnEtherscan,

      rewards: []
    }
  },
  async mounted() {
    await this.getRewards()
  },
  methods: {
    async getRewards() {
      await this.$store.state.vokenEarlyBirdSale.contract()
        .getPastEvents(
          'Reward', {
            filter: { referrer: this.$store.state.ether.account },
            fromBlock: 0,
            toBlock: 'latest'
          }
        )
        .then(this.onRewards)
    },
    async onRewards(events) {
      if (events.length > 0) {
        // console.log('events:', events)

        let rewards = []
        for (let i = 0; i < events.length; i++) {
          rewards.push({
            blockNumber: fnFormat.ns2Str(events[i].blockNumber, 0),
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.account,
            level: events[i].returnValues.level,
            ether: this.$store.state.ether.web3().utils.fromWei(events[i].returnValues.weiReward, 'ether')
          })
        }

        this.rewards = rewards
      }
    },
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
