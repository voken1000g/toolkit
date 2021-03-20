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
              Can I optimize the miner fees?
            </dt>
            <dd>
              <p>
                In most cases it is not necessary to adjust it.
                And if you are not a newbie:
                Don't modify the <b>gas limit</b>,
                just use the default (automatic) to avoid failure;
                it won't waste - unused gas will be refunded automatically.
                But for the <b>gas price</b>, there are 3 tools for you:
                <a target="_blank" href="https://etherscan.io/gastracker">
                  Gas Tracker (by etherscan.io)
                </a>/
                <a target="_blank" href="https://ethgasstation.info/">
                  ETH Gas Station
                </a>/
                <a target="_blank" href="https://www.gasnow.org/">
                  Gas Now
                </a>,
                you can see 3 levels of gas price in GWei there,
                just take one as you prefer.
              </p>
            </dd>
          </div>


          <div>
            <dt>
              Can I invest more than 1 ETH?
            </dt>
            <dd>
              <p>
                Nope here.
                We always believe that users bring energy to the ecosystem.
                As we said in the
                <b>Base Principles: value is based on service, the user pays, and the service provider charges, it is the natural trading scenario.</b>
                Users are the customers, users are the providers, users are the miners, users are the builders,
                users are community members...
                If you need more VokenTB, you may go to
                <nuxt-link :to="localePath('/voken/uniswap')">
                  UniSwap
                </nuxt-link>
                which is the only DEX we recommended for trading (with no burning).
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
  name: "SaleEarlyBirdFaq"
}
</script>

<style scoped>

</style>
