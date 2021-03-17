<template>
  <div class="resp-wide resp-my">

    <div class="max-w-xl mx-auto space-y-6">
      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            Early-Bird Sale
          </h3>

          <p class="mt-1 text-cool-gray-500">
            5% of the Total Supply: 10.5 Million
          </p>

          <nuxt-link :to='localePath("/voken/early-bird")'
                     class="mt-4 w-full btn btn-pink justify-start py-4 px-8 space-x-4 sm:space-x-6">
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'cash-register']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <fa :icon="['fas', 'dollar-sign']"/>
                {{ earlyBirdSale.usdPriceObj.d }}<span v-show="earlyBirdSale.usdPriceObj.f"
                                                       class="number-f">.{{ earlyBirdSale.usdPriceObj.f }}</span>
              </div>
              <p class="mt-2 text-sm text-pink-200">
                In process...
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            Public Sale
          </h3>

          <p class="mt-1 text-cool-gray-500">
            40% of the Total Supply: 84 Million
          </p>

          <div class="mt-4 w-full btn btn-gray justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none"
               @click="publicSale"
          >
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'cash-register']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <fa :icon="['fas', 'dollar-sign']"/>
                ...
              </div>
              <p class="mt-2 text-sm text-gray-200">
                Not Started
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            UniSwap
          </h3>

          <nuxt-link :to='localePath("/voken/uniswap")'
                     class="mt-4 w-full btn btn-purple justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none"
          >
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'cash-register']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <fa :icon="['fas', 'dollar-sign']"/>
                {{ voken.usdPriceStr }}
              </div>
              <p class="mt-2 text-sm text-purple-200">
                Trade on UniSwap DEX...
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- Voken Map -->
    <div class="mt-16">
      <img src="~/assets/image/voken-map.png" alt="voken-map" />
    </div>

  </div>
</template>

<script>
export default {
  name: "voken-index",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
  layout: 'indigoRipple',
  computed: {
    voken() {
      return this.$store.state.voken
    },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    },
  },
  methods: {
    publicSale() {
      this.$toast.show('Not Started')
    }
  }
}
</script>

<style scoped>

</style>
