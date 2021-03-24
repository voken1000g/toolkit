<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <div class="stats">
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
                $ {{ ether.usdPriceObj.d }}<span v-show="ether.usdPriceObj.f"
                                                 class="number-f">.{{ ether.usdPriceObj.f }}</span>
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
                $ {{ earlyBirdSale.usdPriceObj.d }}<span v-show="earlyBirdSale.usdPriceObj.f"
                                                         class="number-f">.{{ earlyBirdSale.usdPriceObj.f }}</span>
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
                {{ earlyBirdSale.progressPercentStr }}
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
                $ {{ voken.usdPriceObj.d }}<span v-show="voken.usdPriceObj.f"
                                                 class="number-f">.{{ voken.usdPriceObj.f }}</span>
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
              <span>
                {{ ether.gasPriceObj.d }}<span v-show="ether.gasPriceObj.f"
                                               class="number-f">.{{ ether.gasPriceObj.f }}</span>
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
                #{{ voken.blockNumberStr }}
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
.stats {
  dl {
    @apply mt-8 mx-auto grid grid-cols-1 gap-5;

    @screen sm {
      @apply mt-10;
    }

    @screen lg {
      @apply mt-12 grid-cols-3;
    }

    @screen xl {
      @apply max-w-5xl;
    }

    div {
      @apply bg-gradient-to-br from-indigo-500 to-indigo-600 shadow rounded-lg overflow-hidden;
      @apply px-4 py-5 space-y-2;


      @screen sm {
        @apply p-6;
      }

      @apply mx-auto w-full max-w-lg;

      @screen lg {
        @apply max-w-full;
      }

      dt {
        @apply text-base font-bold text-white truncate;
      }

      dd {
        @apply flex items-end justify-center space-x-2;
        @apply font-semibold text-2xl text-white;

        span.usd {
          @apply text-lg text-indigo-200;
        }

        .number-f {
          @apply text-lg text-indigo-200;
        }
      }

      &:nth-child(odd) {
        @apply from-cool-gray-600 to-cool-gray-700;

        dd {
          span.usd,
          .number-f {
            @apply text-gray-300;
          }
        }
      }
    }
  }
}


</style>
