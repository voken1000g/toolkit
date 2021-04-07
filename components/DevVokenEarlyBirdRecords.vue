<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Records
        </template>
      </layout-h2>

      <div class='resp-mt w-full space-y-6'>

        <div class='flex items-end space-x-6'>
          <div class='w-2/5'>
            <label for="from-block" class="block text-sm font-medium leading-5 label">
              From Block
            </label>

            <div class='relative mt-2'>
              <input type="text"
                     id='from-block'
                     class='input-indigo w-full py-2 px-4 text-base'
                     v-model='fromBlock' />
            </div>
          </div>

          <div class='w-2/5'>
            <label for="to-block" class="block text-sm font-medium leading-5 label">
              To Block - Latest: #{{ $store.state.ether.blockNumber }}
            </label>

            <div class='relative mt-2'>
              <input type="text"
                     id='to-block'
                     class='input-indigo w-full py-2 px-4 text-base'
                     v-model='toBlock' />
            </div>
          </div>

          <button class="w-1/5 btn btn-pink justify-center py-2 text-base uppercase" @click='getRecords'>
            Query
          </button>
        </div>

        <div v-if="records.length > 0" class="mt-12 px-4">
          <layout-table-simple>
            <table>
              <thead>
              <tr>
                <th>
                  Block
                </th>
                <th>
                  From
                </th>
                <th>
                  USD
                </th>
                <th>

                </th>
                <th>
                  ETH/USD
                </th>
                <th>
                  Ether
                </th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="record in records" class="font-mono">
                <td>
                  <a target="_blank" :href="fnEtherscan.tx(record.transactionHash)">
                    #<comp-number :value="record.blockNumber" />
                  </a>
                </td>
                <td class="truncate">
                  {{ record.from }}
                </td>
                <td class="text-right">
                  <comp-number :value="record.usdAmount" :decimals="6" :mantissa="2" :padding="true" />
                </td>
                <td>
                  =
                </td>
                <td class="text-right">
                  <comp-number :value="record.etherUsdPrice" :decimals="6" :mantissa="2" :padding="true" />
                </td>
                <td>
                  <comp-number :value="record.weiPayment" :decimals="18" />
                  <!-- :mantissa="2" -->
                </td>
              </tr>
              </tbody>
            </table>
          </layout-table-simple>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BigNumber from "bignumber.js"
import fnEtherscan from "~/utils/fnEtherscan"

export default {
  name: "DevVokenEarlyBirdRecords",
  data() {
    return {
      fnEtherscan: fnEtherscan,

      fromBlock: 0,
      toBlock: 'latest',

      records: [],
    }
  },
  methods: {
    async getRecords() {
      await this.$store.state.vokenEarlyBirdSale.contract()
        .getPastEvents(
          'Payment', {
            fromBlock: this.fromBlock,
            toBlock: this.toBlock
          }
        )
        .then(this.onGetRecords)
        .catch(this.onGetError)
    },
    async onGetRecords(events) {
      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          records.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            from: events[i].returnValues.account,
            etherUsdPrice: events[i].returnValues.etherUsdPrice,
            weiPayment: events[i].returnValues.weiPayment,
            usdAmount: new BigNumber(events[i].returnValues.etherUsdPrice)
              .multipliedBy(events[i].returnValues.weiPayment)
              .dividedBy(10 ** 18)
              .toString()
          })
        }

        this.records = records
      }
    },
    async onGetError(error) {
      console.error('::: P[/dev/voken/early-bird] onGetEarlyBirdRecordsError:', error)
    }

  }
}
</script>

<style scoped>

</style>
