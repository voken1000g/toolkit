<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Addresses
        </template>
      </layout-h2>

      <div class='resp-mt w-full space-y-6'>
        <div class='flex items-end space-x-6'>
          <div class='w-2/5'>
            <label for="addresses-from-block">
              From Block
            </label>

            <div class='relative mt-1'>
              <input type="text"
                     id='addresses-from-block'
                     class='input-indigo w-full py-3 px-4 text-base'
                     v-model='fromBlock' />
            </div>
          </div>

          <div class='w-2/5'>
            <label for="addresses-to-block">
              #{{ $store.state.ether.blockNumber }}
            </label>

            <div class='relative mt-1'>
              <input type="text"
                     id='addresses-to-block'
                     class='input-indigo w-full py-3 px-4 text-base'
                     v-model='toBlock' />
            </div>
          </div>

          <button class="w-1/5 btn btn-pink justify-center py-3 text-base uppercase" @click='get'>
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
                  Account
                </th>
                <th>
                  Address
                </th>
                <th>
                  Balance
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
                  {{ record.etherAccount }}
                </td>
                <td>
                  {{ record.vokenAddress }}
                </td>
                <td class='text-right'>
                  <comp-number :value="record.vokenBalance" :decimals="9" />
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
import vokenAddress from "@voken/address"
import fnEtherscan from "~/utils/fnEtherscan"

export default {
  name: "DevVokenAddresses",
  data() {
    return {
      fnEtherscan: fnEtherscan,

      fromBlock: '12206549',
      toBlock: 'latest',

      records: [],
    }
  },
  methods: {
    async get() {
      await this.$store.state.voken.contract()
        .getPastEvents(
          'VokenAddressSet', {
            fromBlock: this.fromBlock,
            toBlock: this.toBlock
          }
        )
        .then(this.onGet)
        .catch(this.onGetError)
    },
    async onGet(events) {
      if (events.length > 0) {
        let accounts = []
        for (let i = 0; i < events.length; i++) {
          const etherAccount = events[i].returnValues.account
          const vokenBalance = await this.$store.state.voken.contract().methods.balanceOf(etherAccount).call()

          accounts.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            etherAccount: etherAccount,
            vokenAddress: vokenAddress.fromBNString(events[i].returnValues.voken),
            vokenBalance: vokenBalance
          })

          this.records = accounts
          // await setTimeout("", 300)
        }
      }
    },
    async onGetError(error) {
      console.error('::: C[DevVokenAddresses] onGetError:', error)
    }
  }
}
</script>

<style scoped>

</style>
