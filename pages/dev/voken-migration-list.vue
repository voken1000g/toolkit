<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Voken Migrations
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

          <button class="w-1/5 btn btn-pink justify-center py-2 text-base uppercase" @click='getVokenMigrations'>
            Query
          </button>
        </div>

        <div v-if="migrations.length > 0" class="mt-12 px-4">
          <layout-table-simple>
            <table>
              <thead>
              <tr>
                <th>
                  Block
                </th>
                <th>
                  Hash
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
              <tr v-for="migration in migrations" class="font-mono">
                <td>
                  #{{ migration.blockNumber }}
                </td>
                <td>
                  <a target="_blank" :href="fnEtherscan.tx(migration.transactionHash)">
                    {{ migration.transactionHash }}
                  </a>
                </td>
                <td>
                  {{ migration.from }}
                </td>
                <td>
                  {{ migration.to }}
                </td>
                <td>
                  {{ migration.amount }} VokenTB
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
import vokenAddress from '@voken/address'
import fnFormat from "~/utils/fnFormat"
import fnEtherscan from "~/utils/fnEtherscan"
import DAPP from "~/utils/constants/dapp";

export default {
  name: "voken-migration-list",
  middleware: ['web3', 'voken'],
  data() {
    return {
      fnEtherscan: fnEtherscan,

      fromBlock: 12074853,
      toBlock: 'latest',

      migrations: [],
      accounts: [],
    }
  },
  methods: {
    async getVokenMigrations() {
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
        .then(this.onGetVokenMigrations)
        .catch(this.onGetVokenMigrationsError)
    },
    async onGetVokenMigrations(events) {
      console.log(events)

      if (events.length > 0) {
        let migrations = []
        for (let i = 0; i < events.length; i++) {
          const fromAccount = events[i].returnValues.from
          const vokenInt = await this.$store.state.voken.contract().methods.address2voken(fromAccount).call()
          console.log('vokenInt:', vokenInt)

          migrations.push({
            blockNumber: fnFormat.ns2Str(events[i].blockNumber, 0),
            transactionHash: events[i].transactionHash,
            from: fromAccount,
            to: vokenAddress.fromBNString(vokenInt),
            amount: fnFormat.ns2Str(events[i].returnValues.value),
          })

          this.migrations = migrations
          await setTimeout("", 300)
        }
      }
    },
    async onGetVokenMigrationsError(error) {
      console.error('::: P[voken-migration-list] onGetVokenMigrationsError:', error)
    }

  }
}
</script>

<style scoped>

</style>
