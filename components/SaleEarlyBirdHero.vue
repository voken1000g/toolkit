<template>
  <div class="bg-indigo-800">
    <div class='resp-wide border-t border-indigo-800 py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div class="px-4">
        <!-- text -->
        <div class="max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {{ $t('earlyBird.Early_bird_sale') }}
          </h1>
          <p class="mt-6 sm:mt-10 text-xl text-indigo-300">
            {{ $t('earlyBird.Ethereum_smart_contracts_ensure__') }}
          </p>

          <ul class="eb-features-ul">
            <li>
              {{ $t('earlyBird.Five_percent_for_early_bird') }}
            </li>
            <li>
              {{ $t('earlyBird.Only_one_purchase_per_address') }}
            </li>
            <li>
              {{ $t('earlyBird.Maximum_') }} {{ earlyBirdSale.weiMaxStr }} ETH
            </li>
            <li>
              {{ $t('earlyBird.Minimum_') }} {{ earlyBirdSale.weiMinStr }} ETH
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SaleEarlyBirdHero",
  computed: {
    ether() {
      return this.$store.state.ether
    },
    voken() {
      return this.$store.state.voken
    },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    },
  }
}
</script>

<style scoped>
.eb-features-ul {
  @apply mt-5 pl-5 list-disc font-mono text-indigo-300;
}

.eb-features-ul li {
  @apply leading-7;
}
</style>
