<template>
  <div class="resp-my resp-wide text-center">
    <h2 class="font-mono text-3xl text-cool-gray-500">
      UniSwap Guide: coming soon...
    </h2>

    <p class="resp-mt font-bold text-lg text-cool-gray-500">
      VokenTB Contract Address
    </p>

    <p class="mt-4 font-mono text-lg text-cool-gray-500">
      {{ DAPP.CONTRACT_ADDRESS_VOKEN_TB }}
    </p>
  </div>
</template>

<script>
import DAPP from '~/utils/constants/dapp'

export default {
  name: "uniswap",
  computed: {
    DAPP() {
      return DAPP
    },
  }
}
</script>

<style scoped>

</style>
