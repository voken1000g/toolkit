<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <div class="early-bird-data">
        <layout-h2>
          <template #title>
            {{ $t('voken.Realtime_Data') }}
          </template>
        </layout-h2>

        <dl>
          <div>
            <dt>
              {{ $t('voken.ETH_Price') }}
            </dt>
            <dd>
              <span>
                <comp-number :value="ether.usdPrice" :decimals="6" :mantissa="3" />
              </span>
              <span class="usd">
                USD
              </span>
            </dd>
          </div>

          <div>
            <dt>
              {{ $t('voken.Early_Bird_Sale_Price') }}
            </dt>
            <dd>
              <span>
                $ <comp-number :value="earlyBirdSale.usdPrice" :decimals="6" />
              </span>
              <span class="usd">
                USD
              </span>
            </dd>
          </div>

          <div>
            <dt>
              {{ $t('voken.Early_Bird_Sale_Progress') }}
            </dt>
            <dd>
              <span>
                <comp-number :value="earlyBirdSale.progressPercent" :mantissa="4" />
              </span>
              <span class="usd">
                %
              </span>
            </dd>
          </div>

          <div>
            <dt>
              {{ $t('voken.UniSwap_Price') }}
            </dt>
            <dd>
              <span>
                $ <comp-number :value="voken.usdPrice" :decimals="6" />
              </span>
              <span class="usd">
                USD
              </span>
            </dd>
          </div>


          <div>
            <dt>
              {{ $t('ether.Average_Gas_Price') }}
            </dt>
            <dd>
              <span v-if="ether.gasPrice === '0'">
                ?
              </span>
              <span v-else>
                <comp-number :value="ether.gasPrice" :decimals="9" />
              </span>
              <span class="usd">
                GWei
              </span>
            </dd>
          </div>

          <div>
            <dt>
              {{ $t('ether.Ethereum_Block_Height') }}
            </dt>
            <dd>
              <span>
                #<comp-number :value="voken.blockNumber" />
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarlyBirdData",
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



</style>
