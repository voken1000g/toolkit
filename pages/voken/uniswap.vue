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

    <uniswap-intro />
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
