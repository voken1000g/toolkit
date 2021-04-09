<template>
  <div>

  </div>
</template>

<script>
import Web3 from 'web3'
import DAPP from "~/utils/constants/dapp"
import fnFormat from "~/utils/fnFormat"
import BigNumber from "bignumber.js"

export default {
  name: "debug",
  // middleware: ['etherGasSync', 'web3', 'voken', 'vokenEarlyBirdSale'],
  middleware: ['web3'],

  async mounted() {
    console.warn('::: debug start...')
    await this.get()
  },

  methods: {
    async get() {
      await this.$store.state.uniswapV2.pairContract()
        .getPastEvents(
          'Swap', {
            // filter: {
            //   // from: this.$store.state.ether.account,
            //   to: DAPP.CONTRACT_ADDRESS_UNISWAP_V2_PAIR
            // },
            fromBlock: 0,
            toBlock: 'latest',
            // address: DAPP.CONTRACT_ADDRESS_EARLY_BIRD
          }
        )
        .then(this.onGet)
        .catch(this.onGetError)
    },
    async onGet(events) {
      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          records.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.to,

            vokenIn: events[i].returnValues.amount0In,
            vokenOut: events[i].returnValues.amount0Out,

            daiIn: Web3.utils.toBN(events[i].returnValues.amount1In).div(Web3.utils.toBN(10 ** 12)).toString(),
            daiOut: Web3.utils.toBN(events[i].returnValues.amount1Out).div(Web3.utils.toBN(10 ** 12)).toString(),
          })
        }

        console.log(records)

        // this.migrations = migrations
      }
    },
    async onGetError(error) {
      console.error('::: P[/dev/debug] onGetError:', error)
    }
  }
}
</script>

<style scoped>

</style>
