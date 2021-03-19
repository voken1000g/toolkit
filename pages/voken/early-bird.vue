<template>
  <div>
    <sale-early-bird-hero />
    <sale-early-bird-swap />
    <sale-early-bird-price class="bg-indigo-50" />
    <sale-early-bird-rules />
    <sale-early-bird-faq class="bg-indigo-50" />
  </div>
</template>

<script>
// import fnEtherscan from '~/utils/fnEtherscan'
import fnEthereum from '~/utils/fnEthereum'
import DAPP from '~/utils/constants/dapp'

export default {
  name: "early-bird",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
  layout: 'white',
  // middleware: ['web3', 'voken'],
  computed: {
    // fnEtherscan() {
    //   return fnEtherscan
    // },
    fnEthereum() {
      return fnEthereum
    },
    DAPP() {
      return DAPP
    },
    ether() {
      return this.$store.state.ether
    },
    voken() {
      return this.$store.state.voken
    },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    },
    ebAccount() {
      return this.$store.state.vokenEarlyBirdSale.account
    }
  }
}
</script>


<style scoped>

</style>
