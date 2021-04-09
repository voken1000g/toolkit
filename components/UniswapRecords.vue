<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Records
        </template>
      </layout-h2>

      <ul class="resp-mt uni-records">
        <li v-for="record in records">
          <!-- Buy -->
          <div v-if="record.vokenOut > '0'" class="uni-record-wrapper">
            <div class="ur-action bg-green-600">
              BUY
            </div>
            <div class="ur-body">
              <div class="px-4 truncate">
                <comp-number :value="record.price" :decimals="6" :padding="true" />
                <span class="ur-unit">
                  DAI/VokenTB
                </span>
              </div>

              <div class="flex-shrink-0 pr-2">
                <a target="_blank"
                   :href="fnEtherscan.tx(record.transactionHash)"
                   class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                  <fa :icon="['fas', 'angle-right']" />
                </a>
              </div>
            </div>
          </div>

          <!-- Sell -->
          <div v-else class="uni-record-wrapper">
            <div class="ur-action bg-pink-600">
              SELL
            </div>
            <div class="ur-body">
              <div class="px-4 truncate">
                <comp-number :value="record.price" :decimals="6" :padding="true" />
                <span class="ur-unit">
                  DAI/VokenTB
                </span>
              </div>

              <div class="flex-shrink-0 pr-2">
                <a target="_blank"
                   :href="fnEtherscan.tx(record.transactionHash)"
                   class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 hover:text-gray-500">
                  <fa :icon="['fas', 'angle-right']" />
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Web3 from "web3"
import fnEtherscan from "~/utils/fnEtherscan"

export default {
  name: "UniswapRecords",
  data() {
    return {
      fnEtherscan: fnEtherscan,

      records: []
    }
  },
  async mounted() {
    await this.get()
  },

  methods: {
    async get() {
      await this.$store.state.uniswapV2.pairContract()
        .getPastEvents(
          'Swap', {
            fromBlock: 0,
            toBlock: 'latest',
          }
        )
        .then(this.onGet)
        .catch(this.onGetError)
    },
    async onGet(events) {
      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          const vokenIn = Web3.utils.toBN(events[i].returnValues.amount0In)
          const vokenOut = Web3.utils.toBN(events[i].returnValues.amount0Out)
          const daiIn = Web3.utils.toBN(events[i].returnValues.amount1In).div(Web3.utils.toBN(10 ** 12))
          const daiOut = Web3.utils.toBN(events[i].returnValues.amount1Out).div(Web3.utils.toBN(10 ** 12))

          let price = Web3.utils.toBN(0)
          if (vokenIn.gtn(0)) {
            price = daiOut.mul(Web3.utils.toBN('1000000000')).div(vokenIn)
          } else {
            price = daiIn.mul(Web3.utils.toBN('1000000000')).div(vokenOut)
          }

          records.unshift({
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.to,
            vokenIn: vokenIn.toString(),
            vokenOut: vokenOut.toString(),
            daiIn: daiIn.toString(),
            daiOut: daiOut.toString(),
            price: price.toString(),
          })
        }

        // console.log(records)
        this.records = records
      }
    },
    async onGetError(error) {
      console.error('::: C[UniswapRecords] onGetError:', error)
    }
  }



}
</script>

<style scoped>

</style>
