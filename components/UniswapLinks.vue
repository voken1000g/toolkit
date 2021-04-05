<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Shortcuts to UniSwap
        </template>
      </layout-h2>


      <div class="resp-mt mx-auto max-w-xl xl:max-w-4xl grid xl:grid-cols-2 gap-4">
        <a target="_blank" :href="'https://app.uniswap.org/#/swap?outputCurrency=' + DAPP.CONTRACT_ADDRESS_VOKEN_TB"
           class="w-full btn btn-pink justify-start py-4 px-8 space-x-4 sm:space-x-6">
          <div class='flex-shrink-0 h-8 w-8 text-3xl'>
            <fa :icon="['fas', 'shopping-bag']"/>
          </div>

          <div>
            <div class="font-bold text-lg">
              Buy VokenTB
            </div>
            <p class="mt-2 text-sm text-pink-200">
              $<comp-number :value="$store.state.voken.usdPrice" :decimals="6" />
            </p>
          </div>
        </a>

        <a target="_blank" :href="'https://app.uniswap.org/#/swap?inputCurrency=' + DAPP.CONTRACT_ADDRESS_VOKEN_TB"
           class="w-full btn btn-purple justify-start py-4 px-8 space-x-4 sm:space-x-6">
          <div class='flex-shrink-0 h-8 w-8 text-3xl'>
            <fa :icon="['fas', 'random']"/>
          </div>

          <div>
            <div class="font-bold text-lg">
              Sell VokenTB
            </div>
            <p class="mt-2 text-sm text-purple-200">
              $<comp-number :value="$store.state.voken.usdPrice" :decimals="6" />
            </p>
          </div>
        </a>
      </div>


    </div>
  </div>
</template>

<script>
import DAPP from '~/utils/constants/dapp'

export default {
  name: "UniswapLinks",
  data() {
    return {
      DAPP: DAPP
    }
  }
}
</script>

<style scoped>

</style>
