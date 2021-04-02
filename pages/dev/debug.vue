<template>
  <div>

  </div>
</template>

<script>
import DAPP from "~/utils/constants/dapp";
import fnFormat from "~/utils/fnFormat";

export default {
  name: "debug",
  middleware: ['etherGasSync', 'web3', 'voken', 'vokenEarlyBirdSale'],

  async mounted() {
    await this.getVokenMigrations()
  },

  methods: {
    async getVokenMigrations() {
      await this.$store.state.voken.contract()
        .getPastEvents(
          'Mint', {
            // filter: {
            //   from: this.$store.state.ether.account,
            //   to: DAPP.CONTRACT_ADDRESS_MIGRATE
            // },
            fromBlock: 0,
            toBlock: 'latest',
            address: DAPP.CONTRACT_ADDRESS_EARLY_BIRD
          }
        )
        .then(this.onGetVokenMigrations)
        .catch(this.onGetVokenMigrationsError)
    },
    async onGetVokenMigrations(events) {
      console.log(events)

      if (events.length > 0) {
        // let migrations = []
        for (let i = 0; i < events.length; i++) {
          console.log(events[i].transactionHash)

          // migrations.push({
          //   blockNumber: fnFormat.ns2Str(events[i].blockNumber, 0),
          //   transactionHash: events[i].transactionHash,
          //   amount: fnFormat.ns2Str(events[i].returnValues.value),
          // })
        }

        // this.migrations = migrations
      }
    },
    async onGetVokenMigrationsError(error) {
      console.error('::: P[/dev/debug] onGetVokenMigrationError:', error)
    }
  }
}
</script>

<style scoped>

</style>
