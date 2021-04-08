<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Early-Bird Sale Rewards
        </template>

        <template #text>
          <comp-number :value="reward" :decimals="18" /> ETH,
          from {{ records.length }} records
        </template>
      </layout-h2>

      <div v-if="records.length" class="mt-12 max-w-5xl mx-auto">
        <layout-table-simple>
          <table>
            <thead>
            <tr>
              <th>
                {{ $t('Block') }}
              </th>
              <th>
                Depth
              </th>
              <th>
                From
              </th>
              <th>
                Reward (ETH)
              </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="record in records" class="font-mono">
              <td>
                <a target="_blank" :href="fnEtherscan.tx(record.transactionHash)">
                  #<comp-number :value="record.blockNumber"/>
                </a>
              </td>
              <td>
                #{{ record.level }}
              </td>
              <td>
                <a target="_blank" :href="fnEtherscan.address(record.account)">
                  {{ record.account }}
                </a>
              </td>
              <td>
                <comp-number :value="record.reward" :decimals="18" />
              </td>
            </tr>
            </tbody>
          </table>
        </layout-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
import fnEtherscan from "~/utils/fnEtherscan"
import BigNumber from "bignumber.js"

export default {
  name: "StatAccountEarlyBirdRewards",
  data() {
    return {
      fnEtherscan: fnEtherscan,
      account: this.$route.params.account,

      records: [],
      reward: '0'
    }
  },
  async mounted() {
    await this.get()
  },
  methods: {
    async get() {
      await this.$store.state.vokenEarlyBirdSale.contract()
        .getPastEvents(
          'Reward', {
            filter: {
              referrer: this.account
            },
            fromBlock: 0,
            toBlock: 'latest'
          }
        )
        .then(this.onGet)
        .catch(this.onGetError)
    },
    async onGet(events) {
      let bn = new BigNumber(0)

      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          records.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.account,
            level: events[i].returnValues.level,
            reward: events[i].returnValues.weiReward,
          })

          bn = bn.plus(events[i].returnValues.weiReward)
        }

        this.records = records
        this.reward = bn.toString()
      }
    },
    async onGetError(error) {
      console.error('::: C[StatAccountEarlyBirdRewards] get', error)
    },
  }
}
</script>

<style scoped>

</style>
