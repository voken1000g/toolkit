<template>
  <div class="resp-wide resp-my">

    <layout-voken-account class="px-2" :show-value="true"/>

    <div class="resp-mt max-w-xl mx-auto space-y-6">


      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            {{  $t('voken.Early_Bird_Sale') }}
          </h3>

          <p class="mt-1 text-cool-gray-500">
            {{  $t('voken.dist.Early_Bird_Sale') }}
          </p>

          <nuxt-link :to='localePath("/voken/early-bird")'
                     class="mt-4 w-full btn btn-pink justify-start py-4 px-8 space-x-4 sm:space-x-6">
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'gifts']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <fa :icon="['fas', 'dollar-sign']"/>
                <number-obj :value-obj="earlyBirdSale.usdPriceObj" />
                ~ $ 0.7
              </div>
              <p class="mt-2 text-sm text-pink-200">
                {{  $t('voken.sale.In_process') }}...
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            {{  $t('voken.Public_Sale') }}
          </h3>

          <p class="mt-1 text-cool-gray-500">
            {{  $t('voken.dist.Public_Sale') }}
          </p>

          <nuxt-link :to='localePath("/voken/public-sale")'
                     class="mt-4 w-full btn btn-gray justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none"
          >
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'cash-register']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <fa :icon="['fas', 'dollar-sign']"/>
                1.5+
              </div>
              <p class="mt-2 text-sm text-gray-200">
                {{  $t('voken.sale.Not_Started__planning__') }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            {{  $t('voken.uniswap.UniSwap') }}
          </h3>

          <nuxt-link :to='localePath("/voken/uniswap")'
                     class="mt-4 w-full btn btn-purple justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none"
          >
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'random']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <fa :icon="['fas', 'dollar-sign']"/>
                {{ voken.usdPriceStr }}
              </div>
              <p class="mt-2 text-sm text-purple-200">
                {{  $t('voken.uniswap.UniSwap_DEX__') }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div class="to-migrate bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            {{  $t('voken.migrate.Migrate_to_Voken_Blockchain') }}
          </h3>

          <nuxt-link :to='localePath("/voken/migrate")'
                     class="mt-4 w-full btn btn-teal justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none"
          >
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'glass-cheers']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                <number-obj :value-obj="voken.account.balanceObj" />
                VokenTB
              </div>
              <p class="mt-2 text-sm text-teal-200">
                {{ $t('voken.migrate.From_Ethereum_to_Voken_Blockchain') }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>

      <div v-show="v12Portal" class="bg-white shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <h3 class="text-lg leading-6 font-bold text-cool-gray-700">
            {{  $t('v12.Resale_or_Upgrade') }}
          </h3>

          <nuxt-link :to='localePath("/voken/v12")'
                     class="mt-4 w-full btn btn-yellow justify-start py-4 px-8 space-x-4 sm:space-x-6 cursor-pointer select-none"
          >
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon="['fas', 'bell']"/>
            </div>

            <div>
              <div class="font-bold text-lg">
                Voken1.0/2.0 {{ $t('v12.Portal') }}
              </div>
              <p class="mt-2 text-sm text-yellow-100">
                {{  $t('v12.Resale__Program_for__') }}
              </p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "voken-index",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale', 'vokenResale'],
  head() {
    return {
      title: this.$t('nav.VokenTB')
    }
  },
  layout: 'indigoRipple',
  computed: {
    voken() {
      return this.$store.state.voken
    },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    },

    v12Portal() {
      return (
        this.$store.state.vokenResale.account.v1.balance > '0'
        ||
        this.$store.state.vokenResale.account.v2.balance > '0'
      )
    }
  },
}
</script>

<style scoped>
.to-migrate {
  .number-f {
    @apply text-base text-teal-100;
  }
}
</style>
