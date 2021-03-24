<template>
  <div v-if="migrations.length > 0" class="py-20">
    <layout-h2>
      <template #title>
        Migration Records
      </template>
    </layout-h2>

    <div class="mt-12 max-w-md mx-auto">
      <layout-table-simple>
        <table>
          <thead>
          <tr>
            <th>
              Block
            </th>
            <th>
              Amount
            </th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="migration in migrations" class="font-mono">
            <td>
              <a target="_blank" :href="fnEtherscan.tx(migration.transactionHash)">
                #{{ migration.blockNumber }}
              </a>
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
</template>

<script>
import vokenAddress from "@voken/address"
import fnEtherscan from "~/utils/fnEtherscan"
import fnFormat from "~/utils/fnFormat"
import DAPP from '~/utils/constants/dapp'

export default {
  name: "VokenMigrateRecords",
  data() {
    return {
      fnEtherscan: fnEtherscan,

      migrations: []
    }
  },
  async mounted() {
    await this.getVokenMigrations()
  },
  methods: {
    async getVokenMigrations() {
      await this.$store.state.voken.contract()
        .getPastEvents(
          'Transfer', {
            filter: {
              from: this.$store.state.ether.account,
              to: DAPP.CONTRACT_ADDRESS_MIGRATE
            },
            fromBlock: 12074853,
            toBlock: 'latest'
          }
        )
        .then(this.onGetVokenMigrations)
        .catch(this.onGetVokenMigrationsError)
    },
    async onGetVokenMigrations(events) {
      if (events.length > 0) {
        let migrations = []
        for (let i = 0; i < events.length; i++) {
          migrations.push({
            blockNumber: fnFormat.ns2Str(events[i].blockNumber, 0),
            transactionHash: events[i].transactionHash,
            amount: fnFormat.ns2Str(events[i].returnValues.value),
          })
        }

        this.migrations = migrations
      }
    },
    async onGetVokenMigrationsError(error) {
      console.error('::: C[VokenMigrateRecords] onGetVokenMigrationError:', error)
    }
  }
}
</script>

<style scoped>

</style>
