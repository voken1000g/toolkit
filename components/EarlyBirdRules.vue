<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {{ $t('earlyBird.rules.title') }}
          </h2>
          <p class="mt-3 text-xl text-gray-500 sm:mt-4">
            {{ $t('earlyBird.rules.subtitle') }}
          </p>
        </div>
      </div>

      <article class="resp-mt mx-auto prose sm:prose-md lg:prose-lg xl:prose-xl max-w-7xl">
        <h3>
          {{ $t('earlyBird.rules.Only_10_5_million__') }}
        </h3>
        <p>
          {{ $t('earlyBird.rules.There_ar_only_10_5__') }}
          <nuxt-link :to='localePath("/voken/early-bird")'>
            {{ $t('voken.Early_Bird_Sale') }}
          </nuxt-link>{{ $t('__comma') }}{{ $t('earlyBird.rules.that_is_5percent__') }}
        </p>
        <p>
          {{ $t('earlyBird.rules.Running_by') }}
          <a target="_blank" :href="$t('link.VokenTB_Early_Bird_Sale_Contract.href')">
            {{ $t('link.VokenTB_Early_Bird_Sale_Contract.text') }}
          </a>
          {{ $t('earlyBird.rules.__running__on_the_Ethereum__') }}
        </p>

        <!-- Incremental Sales Price -->
        <h3>
          {{ $t('earlyBird.rules.Incremental_Sales_Price_') }} $0.5 ~ $0.7
        </h3>
        <p>
          {{ $t('earlyBird.rules.Starting_at') }}
          <b>1 VokenTB = $0.5 USD</b>{{ $t('__comma') }}{{ $t('earlyBird.rules.ends_at') }}
          <b>$0.7 USD</b>
          {{ $t('__dot') }}{{ $t('earlyBird.rules.The_latest_price_depends__') }}
          <nuxt-link :to='localePath("/voken/early-bird")'>
            {{ $t('voken.Early_Bird_Sale_DApp') }}
          </nuxt-link>{{ $t('__dot') }}{{ $t('earlyBird.rules.The_earlier__') }}
        </p>


        <!-- Limited Sales -->
        <h3>
          {{ $t('earlyBird.rules.Limited_Sales') }}
        </h3>
        <p>
          {{ $t('earlyBird.rules.We_hope_that_more_users__') }}
          <b>{{ earlyBirdSale.weiMinStr }}~{{ earlyBirdSale.weiMaxStr }} ETH</b>
          {{ $t('earlyBird.rules.for_each_address__') }}
          <b>{{ earlyBirdSale.weiMinStr }}~0.5 ETH</b>
        </p>
        <p>
          {{ $t('earlyBird.rules.And__only_one_purchase__') }}
        </p>


        <!-- Realtime ETH Price -->
        <h3>
          {{ $t('earlyBird.rules.Realtime_ETH_Price') }}
        </h3>
        <p>
          {{ $t('earlyBird.rules.Crypto_currency_ETH_will__') }}
          {{ $t('The_') }}<a target="_blank" :href="$t('link.Ether_USD_Price_Contract.href')">{{
            $t('link.Ether_USD_Price_Contract.text')
          }}</a>
          {{ $t('earlyBird.rules.will_always_track__') }}
          {{ $t('earlyBird.rules.For_now__it_is') }}
          <b>${{ ether.usdPriceStr }}</b>
        </p>


        <!-- Additional 1%-10% bonus -->
        <h3>
          {{ $t('earlyBird.rules.Additional___bonus__') }}
        </h3>
        <p>
          {{ $t('earlyBird.rules.If_you_have_a_referral__') }}
          <b>{{ $t('earlyBird.rules.additional___random_bonus__') }}</b>
        </p>

        <!-- Vesting plan -->
        <h3>
          {{ $t('earlyBird.rules.Vesting_plan') }}
        </h3>
        <p>
          {{ $t('earlyBird.rules.Early_Birds_has__') }}
          <nuxt-link :to='localePath("/voken/public-sale")'>
            {{ $t('voken.Public_Sale') }}
          </nuxt-link>
          {{ $t('__dot') }}{{ $t('earlyBird.rules.So_most_of_the_positions__') }}
          <nuxt-link :to='localePath("/voken/So_most_of_the_positions__-sale")'>
            {{ $t('voken.Public_Sale') }}
          </nuxt-link>
        </p>
        <ul>
          <li>
            {{ $t('earlyBird.rules._10percent__') }}
          </li>
          <li>
            {{ $t('earlyBird.rules._90percent__') }}
          </li>
          <li>
            {{ $t('earlyBird.rules.The_bonuses_will_released__') }}
          </li>
        </ul>

        <!-- Additional 1%-10% bonus -->
        <h3>
          {{ $t('earlyBird.rules.Referral_Rewards') }}
        </h3>
        <p>
          <nuxt-link :to='localePath("/voken/early-bird-referral")'>
            {{ $t('earlyBird.rules.Click_here_to_learn_more') }}
          </nuxt-link>
        </p>

      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarlyBirdRules",
  computed: {
    ether() {
      return this.$store.state.ether
    },
    // voken() {
    //   return this.$store.state.voken
    // },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    },
  }
}
</script>

<style scoped>


</style>
