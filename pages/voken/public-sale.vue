<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Public Sale
      </template>

      <template #text>
        40% of the Total Supply: 84 Million
      </template>
    </layout-hero-simple>

    <div class="resp-my resp-wide pb-72 text-center">
      <h2 class="font-mono text-3xl text-cool-gray-500">
        VokenTB Public Sale: NOT STARTED...
      </h2>
    </div>
  </div>

</template>

<script>
import DAPP from '~/utils/constants/dapp'

export default {
  name: "voken-public-sale",
  computed: {
    DAPP() {
      return DAPP
    },
  }
}
</script>

<style scoped>

</style>
