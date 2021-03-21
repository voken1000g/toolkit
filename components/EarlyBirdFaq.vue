<template>
  <div>
    <div class="resp-wide">
      <div class="faq-side-by-side">
        <h2>
          {{ $t('earlyBird.faq.title') }}
        </h2>
        <dl>
          <div>
            <dt>
              {{ $t('earlyBird.faq.Can_I_optimize_the_miner_fees_') }}
            </dt>
            <dd>
              <p>
                {{ $t('earlyBird.faq.GAS__In_most_cases__') }}
                <b>gas limit</b>{{ $t('__comma') }}
                {{ $t('earlyBird.faq.GAS__just_use_the_default__') }}
                {{ $t('earlyBird.faq.GAS__But_for_the_') }}
                <b>gas price</b>{{ $t('__comma') }}
                {{ $t('earlyBird.faq.GAS__There_are_3_tools__') }}
                <a target="_blank" href="https://etherscan.io/gastracker">
                  Gas Tracker (by etherscan.io)
                </a>/
                <a target="_blank" href="https://ethgasstation.info/">
                  ETH Gas Station
                </a>/
                <a target="_blank" href="https://www.gasnow.org/">
                  Gas Now
                </a>
                {{ $t('__comma') }}
                {{ $t('earlyBird.faq.GAS_you_can_find_3_levels__') }}
              </p>
            </dd>
          </div>


          <div>
            <dt>
              {{ $t('earlyBird.faq.Can_I_buy_more_than_1_ETH_') }}
            </dt>
            <dd>
              <p>
                {{ $t('earlyBird.faq.LIMIT__Nope_here__') }}
                {{ $t('earlyBird.faq.LIMIT__Or_you_may_go_to') }}
                <nuxt-link :to="localePath('/voken/uniswap')">
                  UniSwap
                </nuxt-link>
                {{ $t('earlyBird.faq.LIMIT__which_is__DEX__') }}
              </p>
            </dd>
          </div>

        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarlyBirdFaq"
}
</script>

<style scoped>

</style>
