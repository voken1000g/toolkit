<template>
  <div>
    <div v-if="!$store.state.comm0.isProxy && !$store.state.voken.account.isAgent" class="resp-wide py-40 text-center">
      Not for you
    </div>
    <div v-else>
      <layout-hero-simple>
        <template #title>
          For Skyler
        </template>

        <template #text>
          <span class="font-mono break-all">
            {{ DAPP.CONTRACT_ADDRESS_COMM_SKYLER }}
          </span>
        </template>
      </layout-hero-simple>



      <comm0-main />
      <comm0-rules class="bg-indigo-50" />
      <comm0-records />
    </div>
  </div>
</template>

<script>
import DAPP from '~/utils/constants/dapp'
import commSkylerAbi from '~/utils/contracts/commSkyler.json'


export default {
  name: "skyler",
  middleware: ['web3', 'voken', 'comm0'],
  layout: 'white',
  data() {
    return {
      DAPP: DAPP,
    }
  },
  // async mounted() {
  //   if (this.$store.state.comm0.blockNumber) {
  //     return
  //   }
  //
  //   const Contract = this.$store.state.ether.web3().eth.Contract
  //   await this.$store.dispatch('comm0/SET_CONTRACT', new Contract(
  //     commSkylerAbi, DAPP.CONTRACT_ADDRESS_COMM_SKYLER
  //   ))
  //
  //   await this.$store.dispatch('comm0/SYNC_IS_AGENT')
  //   await this.$store.dispatch('comm0/SYNC_IS_PROXY')
  //
  //   // Sync STATUS
  //   await this.$store.dispatch('comm0/SYNC_STATUS')
  //   await this.$store.dispatch('comm0/SET_BLOCK_NUMBER', this.$store.state.ether.blockNumber)
  // },
  // watch: {
  //   '$store.state.ether.account': async function() {
  //     await this.$store.dispatch('comm0/SYNC_IS_AGENT')
  //     await this.$store.dispatch('comm0/SYNC_IS_PROXY')
  //   }
  // },
}
</script>
