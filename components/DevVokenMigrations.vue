<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Migrations
        </template>
      </layout-h2>

      <div class='resp-mt w-full space-y-6'>
        <div class='flex items-end space-x-6'>
          <div class='w-2/5'>
            <label for="migrations-from-block">
              From Block
            </label>

            <div class='relative mt-1'>
              <input type="text"
                     id='migrations-from-block'
                     class='input-indigo w-full py-3 px-4 text-base'
                     v-model='fromBlock' />
            </div>
          </div>

          <div class='w-2/5'>
            <label for="migrations-to-block">
              #{{ $store.state.ether.blockNumber }}
            </label>

            <div class='relative mt-1'>
              <input type="text"
                     id='migrations-to-block'
                     class='input-indigo w-full py-3 px-4 text-base'
                     v-model='toBlock' />
            </div>
          </div>

          <button class="w-1/5 btn btn-pink justify-center py-3 text-base uppercase" @click='getRecords'>
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
                  To
                </th>
                <th>
                  Amount
                </th>
              </tr>
              </thead>

              <tbody>
              <tr v-for="record in records" class="font-mono">
                <td>
                  <a target="_blank" :href="fnEtherscan.tx(record.transactionHash)">
                    #{{ record.blockNumber }}
                  </a>
                </td>
                <td>
                  {{ record.from }}
                </td>
                <td>
                  {{ record.to }}
                </td>
                <td>
                  <comp-number :value="record.amount" :decimals="9" />
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
import fnEtherscan from "~/utils/fnEtherscan"
import DAPP from "~/utils/constants/dapp";
import fnFormat from "~/utils/fnFormat";
import vokenAddress from "@voken/address";

export default {
  name: "DevVokenMigrations",
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
      await this.$store.state.voken.contract()
        .getPastEvents(
          'Transfer', {
            filter: {
              to: DAPP.CONTRACT_ADDRESS_MIGRATE
            },
            fromBlock: this.fromBlock,
            toBlock: this.toBlock
          }
        )
        .then(this.onGetRecords)
        .catch(this.onGetRecordsError)
    },
    async onGetRecords(events) {
      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          const account = events[i].returnValues.from
          const vokenInt = await this.$store.state.voken.contract().methods.address2voken(account).call().catch(console.error)

          records.push({
            blockNumber: fnFormat.ns2Str(events[i].blockNumber, 0),
            transactionHash: events[i].transactionHash,
            from: account,
            to: vokenAddress.fromBNString(vokenInt),
            amount: events[i].returnValues.value,
          })

          this.records = records
          await setTimeout("", 300)
        }
      }
    },
    async onGetRecordsError(error) {
      console.error('::: P[voken-migration] onGetRecordsError:', error)
    }
  }
}
</script>
