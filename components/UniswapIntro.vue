<template>
  <div class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          {{ $t('uniswap.UniSwap') }}
        </template>

        <template #text>
          {{ $t('uniswap.The_only__trading_route') }}
        </template>
      </layout-h2>

      <article class="resp-mt prose lg:prose-lg xl:prose-xl max-w-none">
        <p>
          <a target="_blank" href="https://app.uniswap.org">
            UniSwap
          </a>
          -
          {{ $t('uniswap.DEX_TOP1__') }}
        </p>

        <p>
          {{ $t('uniswap.Why_UniSWap__') }}
        </p>

        <ul>
          <li>
            {{ $t('uniswap.Avoid__CEX__') }}
          </li>
          <li>
            {{ $t('uniswap.Avoid__malicious_speculators__') }}
          </li>
          <li>
            {{ $t('uniswap.Avoid__matched_orders__') }}
          </li>
          <li>
            {{ $t('uniswap.Avoid__malicious_OTC__') }}
          </li>
          <li>
            {{ $t('uniswap.Plentiful_liquidity__') }}
          </li>
        </ul>

      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "UniswapIntro"
}
</script>

<style scoped>

</style>
