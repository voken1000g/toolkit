<template>
  <div>
    <stat-account class="bg-indigo-50" />
    <stat-account-referrals v-if="granted" />
    <stat-account-early-bird-rewards v-if="granted" class="bg-indigo-50" />
  </div>
</template>

<script>
import Web3 from "web3"

export default {
  name: "stat--account",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale', 'comm0'],
  layout: 'white',
  validate({params}) {
    return Web3.utils.isAddress(params.account)
  },
  computed: {
    granted() {
      return this.$store.state.comm0.isProxy || this.$store.state.voken.account.isAgent
    }
  }
}
</script>
