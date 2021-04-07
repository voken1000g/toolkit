<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          {{ records.length }} Records
        </template>
      </layout-h2>

      <div v-if="records.length > 0" class="mt-12 px-4">
        <layout-table-simple>
          <table>
            <thead>
            <tr>
              <th>
                Block
              </th>
              <th>
                Account
              </th>
              <th>
                VokenTB
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
                <a target="_blank" :href="fnEtherscan.address(record.account)">
                  {{ record.account }} <span v-show="record.nonce">({{ record.nonce }})</span>
                </a>
              </td>
              <td>
                <comp-number :value="record.amount" :decimals="9" />
                <!-- :mantissa="2" -->
              </td>
              <td>
                <span v-show="record.ether > '0'"><comp-number :value="record.ether" :decimals="18" /></span>
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
import BigNumber from "bignumber.js"
import fnEtherscan from "~/utils/fnEtherscan"

export default {
  name: "Comm0Records",
  data() {
    return {
      fnEtherscan: fnEtherscan,

      total: '0',
      records: [],
    }
  },
  computed: {
    marketValue() {
      return new BigNumber(1000000).multipliedBy(this.$store.state.voken.usdPrice).toString()
    }
  },
  async mounted() {
    await this.getRecords()
  },
  methods: {
    async getRecords() {
      await this.$store.state.comm0.contract()
        .getPastEvents(
          'Distribute', {
            fromBlock: '0',
            toBlock: 'latest'
          }
        )
        .then(this.onGetRecords)
        .catch(this.onGetError)
    },
    async onGetRecords(events) {
      let total = new BigNumber(this.total)

      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          total = total.plus(events[i].returnValues.amount)

          records.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.account,
            amount: events[i].returnValues.amount,
            ether: '0',
            nonce: 0,
          })
        }

        this.total = total.toString()
        this.records = records

        await this.getEtherBalance()
      }
    },
    async onGetError(error) {
      console.error('::: P[/dev/voken/early-bird] onGetEarlyBirdRecordsError:', error)
    },
    async getEtherBalance() {
      for (let i = 0; i < this.records.length; i++) {
        this.records[i].nonce = await this.$store.state.ether.web3().eth.getTransactionCount(this.records[i].account).catch(console.error)
        this.records[i].ether = await this.$store.state.ether.web3().eth.getBalance(this.records[i].account).catch(console.error)
        await setTimeout("", 200)
      }
    },

  }
}
</script>

<style scoped>


</style>
