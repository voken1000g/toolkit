<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('uniswap.UniSwap_Guide') }}
      </template>

      <template #text>
        {{ $t('uniswap.UniSwap_DEX__') }}
      </template>
    </layout-hero-simple>

<!--    <uniswap-intro />-->

    <div class="resp-my resp-wide pb-24 text-center">
      <h2 class="font-mono text-3xl text-cool-gray-500">
        Coming soon...
      </h2>

      <p class="resp-mt font-bold text-lg text-cool-gray-500">
        VokenTB Contract Address
      </p>

      <p class="mt-4 font-mono text-lg text-cool-gray-500">
        {{ DAPP.CONTRACT_ADDRESS_VOKEN_TB }}
      </p>
    </div>

    <uniswap-links class="bg-indigo-50" />
  </div>
</template>

<script>
import DAPP from '~/utils/constants/dapp'

export default {
  name: "uniswap",
  middleware: ['web3', 'voken'],
  layout: 'white',
  computed: {
    DAPP() {
      return DAPP
    },
  }
}
</script>

<style scoped>

</style>
