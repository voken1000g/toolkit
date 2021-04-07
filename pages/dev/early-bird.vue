<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Early-Bird Sale
      </template>
    </layout-hero-simple>

    <dev-voken-early-bird-records class="bg-indigo-50" />
    <dev-voken-early-bird-funds v-if="$store.state.vokenEarlyBirdSale.account.isAgent" />

  </div>
</template>

<script>
import fnEtherscan from "~/utils/fnEtherscan"

export default {
  name: "dev-early-bird",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
  layout: 'white',
  data() {
    return {
      fnEtherscan: fnEtherscan,

      fromBlock: 0,
      toBlock: 'latest',

      records: [],
    }
  },

  mounted: async function() {
    await this.$store.dispatch('vokenEarlyBirdSale/SYNC_IS_AGENT')
  },
  watch: {
    '$store.state.ether.account': async function() {
      await this.$store.dispatch('vokenEarlyBirdSale/SYNC_IS_AGENT')
    }
  },
  methods: {
    async getEarlyBirdRecords() {
      await this.$store.state.vokenEarlyBirdSale.contract()
        .getPastEvents(
          'Payment', {
            fromBlock: this.fromBlock,
            toBlock: this.toBlock
          }
        )
        .then(this.onGetEarlyBirdRecords)
        .catch(this.onGetEarlyBirdRecordsError)
    },
    async onGetEarlyBirdRecords(events) {
      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          records.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            from: events[i].returnValues.account,
            etherUsdPrice: events[i].returnValues.etherUsdPrice,
            weiPayment: events[i].returnValues.weiPayment,
          })
        }

        this.records = records
      }
    },
    async onGetEarlyBirdRecordsError(error) {
      console.error('::: P[/dev/voken/early-bird] onGetEarlyBirdRecordsError:', error)
    }

  }
}
</script>

<style scoped>

</style>
