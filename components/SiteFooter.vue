<template>
  <div class="site-footer bg-gradient-to-b from-indigo-800 via-indigo-800 to-indigo-900">
    <div class="resp-wide py-12 lg:py-16">
      <div class="site-footer-grids xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4>
                {{ $t('footer.Navigation') }}
              </h4>
              <ul class="mt-4">
                <li>
                  <nuxt-link :to="localePath('/voken/early-bird')">
                    {{ $t('voken.Early_Bird_Sale') }}
                  </nuxt-link>
                </li>
<!--                <li>-->
<!--                  <a target="_blank" :href="$t('link.VOKEN.href')">-->
<!--                    {{ $t('link.VOKEN.text') }}-->
<!--                  </a>-->
<!--                </li>-->
                <li>
                  <a target="_blank" :href="$t('link.White_Paper.href')">
                    {{ $t('link.White_Paper.text') }}
                  </a>
                </li>
                <li>
                  <nuxt-link :to="localePath('/voken/uniswap')">
                    UniSwap
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4>
                {{ $t('footer.Support') }}
              </h4>
              <ul class="mt-4">
                <li>
                  <a target="_blank" :href="$t('link.HD_Wallet_Generator.href')">
                    {{ $t('link.HD_Wallet_Generator.text') }}
                  </a>
                </li>
                <li>
                  <a target="_blank" :href="$t('link.VOKEN_Address_Validator.href')">
                    {{ $t('link.VOKEN_Address_Validator.text') }}
                  </a>
                </li>
                <li>
                  <a target="_blank" :href="$t('link.Documentation.href')">
                    {{ $t('link.Documentation.text') }}
                  </a>
                </li>
                <li>
                  <a target="_blank" :href="$t('link.GitHub.href')">
                    {{ $t('link.GitHub.text') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h4>
                {{ $t('footer.Contacts') }}
              </h4>
              <ul class="mt-4">
                <li>
                  <a target="_blank" :href="$t('link.Help_center.href')">
                    {{ $t('link.Help_center.text') }}
                  </a>
                </li>
                <li>
                  <a target="_blank" :href="$t('link.Mail.href')">
                    {{ $t('link.Mail.text') }}
                  </a>
                </li>
                <li>
                  <a target="_blank" :href="$t('link.Telegram.href')">
                    {{ $t('link.Telegram.text') }}
                  </a>
                </li>
                <li>
                  <a target="_blank" :href="$t('link.Join_us.href')">
                    {{ $t('link.Join_us.text') }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-12 md:mt-0">
              <h4>
                {{ $t('footer.Links') }}
              </h4>
              <ul class="mt-4">
                <li>
                  <a target="_blank" :href="$t('link.etherscan.href')">
                    {{ $t('link.etherscan.text') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-8 xl:mt-0">
          <h4>
            {{ $t('footer.VokenTB_contract_address') }}
          </h4>
          <p class="mt-4 text-indigo-300 text-sm leading-6 break-all">
            <a target="_blank" :href="fnEtherscan.token(DAPP.CONTRACT_ADDRESS_VOKEN_TB)">
              {{ DAPP.CONTRACT_ADDRESS_VOKEN_TB }}
            </a>
          </p>
        </div>
      </div>
      <div
        class="mt-8 border-t border-indigo-700 pt-8 md:flex md:items-center md:justify-between"
      >
        <div class="site-footer-socials flex md:order-2 text-3xl md:text-4xl">
          <a target="_blank" :href="$t('link.Telegram.href')">
            <fa :icon="['fab', 'telegram-plane']" />
          </a>
          <a target="_blank" :href="$t('link.Mail.href')">
            <fa :icon="['fas', 'envelope']" />
          </a>
          <a target="_blank" :href="$t('link.Documentation.href')">
            <fa :icon="['fas', 'book']" />
          </a>
          <a target="_blank" :href="$t('link.GitHub.href')">
            <fa :icon="['fab', 'github']" />
          </a>
        </div>

        <p class="mt-8 text-base leading-6 text-indigo-400 md:mt-0 md:order-1">
          &copy; 2018-{{ year }} Vision Network. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import fnEtherscan from '~/utils/fnEtherscan'
import DAPP from '~/utils/constants/dapp'

export default {
  name: 'SiteFooter',
  computed: {
    fnEtherscan() {
      return fnEtherscan
    },
    DAPP() {
      return DAPP
    },
    year() {
      const date = new Date()
      return date.getFullYear()
    }
  }
}
</script>

<style scoped>
.site-footer-grids {
  h4 {
    @apply text-sm leading-5 font-semibold tracking-wider text-indigo-400 uppercase;
  }

  ul li {
    @apply mt-4;
  }

  ul:first-child {
    @apply mt-0;
  }

  a {
    @apply text-base leading-6 text-indigo-300;
  }

  a:hover {
    @apply text-white;
  }
}

.site-footer-socials {
  a {
    @apply ml-6 text-indigo-400;
  }

  a:first-child {
    @apply ml-0;
  }

  a:hover {
    @apply text-indigo-300;
  }
}
</style>
