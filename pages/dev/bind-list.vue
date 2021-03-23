<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Bind List
      </template>
    </layout-hero-simple>

    <div class="resp-wide py-20">
      <div class='w-full space-y-6'>

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

          <button class="w-1/5 btn btn-pink justify-center py-2 text-base uppercase" @click='getVokenAddressSet'>
            Query
          </button>
        </div>

        <div v-if="accounts.length > 0" class="mt-12 px-4">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-4">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead>
                  <tr>
                    <th>
                      Block
                    </th>
                    <th>
                      Hash
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
                  <tr v-for="account in accounts" class="font-mono">
                    <td>
                      {{ account.blockNumber }}
                    </td>
                    <td>
                      {{ account.transactionHash }}
                    </td>
                    <td>
                      {{ account.etherAccount }}
                    </td>
                    <td>
                      {{ account.vokenAddress }}
                    </td>
                    <td class='text-right'>
                      {{ account.vokenBalance }}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import vokenAddress from '@voken/address'
import fnFormat from "~/utils/fnFormat"

export default {
  name: "bind-list",
  middleware: ['web3', 'voken'],
  data() {
    return {
      fromBlock: '0',
      toBlock: 'latest',
      accounts: [],
    }
  },
  methods: {
    async getVokenAddressSet() {
      await this.$store.state.voken.contract()
        .getPastEvents(
          'VokenAddressSet', {
            fromBlock: this.fromBlock,
            toBlock: this.toBlock
          }
        )
        .then(this.ontVokenAddressSet)
    },
    async ontVokenAddressSet(events) {
      if (events.length > 0) {
        let accounts = []
        for (let i = 0; i < events.length; i++) {
          const etherAccount = events[i].returnValues.account
          const vokenBalance = await this.$store.state.voken.contract().methods.balanceOf(etherAccount).call()

          accounts.push({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            etherAccount: etherAccount,
            vokenAddress: vokenAddress.fromBNString(events[i].returnValues.voken),
            vokenBalance: fnFormat.ns2Str(vokenBalance, 9)
          })

          this.accounts = accounts
          await setTimeout("", 300)
        }
      }
    },
  }
}
</script>

<style scoped>
table thead tr {
  @apply bg-gray-50;
}

table thead th {
  @apply px-4 py-3 text-sm text-left leading-4 font-medium text-gray-500 tracking-wider;
}

table tbody tr:nth-child(odd) {
  @apply bg-white;
}

table tbody tr:nth-child(even) {
  @apply bg-gray-50;
}

table tbody tr:hover {
  @apply bg-indigo-50;
}

table tbody td {
  @apply px-4 py-3 text-xs leading-5 text-gray-500 truncate;
}
</style>
