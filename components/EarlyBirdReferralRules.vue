<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <div class="refer space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
        <div class="col-span-2 prose sm:prose-md lg:prose-lg xl:prose-xl max-w-none">
          <h3>
            {{ $t('earlyBird.referral.Referral_Rewards__22percent') }}
          </h3>
          <p>
            {{ $t('The_') }}<a target="_blank" :href="$t('link.VokenTB_Early_Bird_Sale_Contract.href')">{{
              $t('link.VokenTB_Early_Bird_Sale_Contract.text')
            }}</a>
            {{ $t('earlyBird.referral.has_a_10_levels__') }}
          </p>

          <p>
            {{ $t('earlyBird.referral.Tell_your_friends_and__') }}
          </p>

          <ul>
            <li>
              {{ $t('earlyBird.referral.The_reward_ETH__') }}
              <a target="_blank" :href="$t('link.VokenTB_Early_Bird_Sale_Contract.href')">
                {{ $t('link.VokenTB_Early_Bird_Sale_Contract.text') }}
              </a>
            </li>

            <li>
              {{ $t('earlyBird.referral.The_referral_relationships__') }}
              <a target="_blank" :href="$t('link.VokenTB_Main_Contract.href')">
                {{ $t('link.VokenTB_Main_Contract.text') }}
              </a>
              {{ $t('earlyBird.referral.on_the_Ethereum__') }}
            </li>

            <li>
              {{ $t('earlyBird.referral.Everyone_who_join_the') }}
              <nuxt-link :to='localePath("/voken/early-bird")'>
                {{ $t('voken.Early_Bird_Sale') }}
              </nuxt-link>
              {{ $t('earlyBird.referral.and_the') }}
              <nuxt-link :to='localePath("/voken/public-sale")'>
                {{ $t('voken.Public_Sale') }}
              </nuxt-link>
              {{ $t('earlyBird.referral.by_using_your__') }}
            </li>
          </ul>

          <p>
            {{ $t('earlyBird.referral.You_will_get_rewarded__') }}
          </p>
        </div>

        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="pt-0 px-4 md:pt-2 md:px-0 feed-simple-with-icons">
          <ul class="-mb-8">
            <li>
              <div class="feed">
                <span class="line" aria-hidden="true"></span>
                <div class="row">
                  <div class="icon">
                    <fa :icon="['fas', 'handshake']" class="text-green-500"/>
                  </div>
                  <div class="text">
                    <div>
                      {{ $t('earlyBird.referral.From_direct_referrals__') }} #0
                    </div>
                    <div>
                      10%
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="feed">
                <span class="line" aria-hidden="true"></span>
                <div class="row">
                  <div class="icon">
                    <fa :icon="['fas', 'user-friends']" class="text-green-500"/>
                  </div>
                  <div class="text">
                    <div>
                      {{ $t('earlyBird.referral.From_indirect_referrals__') }} #1
                    </div>
                    <div>
                      3%
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <div class="feed">
                <span class="line" aria-hidden="true"></span>
                <div class="row">
                  <div class="icon">
                    <fa :icon="['fas', 'user-friends']" class="text-green-500"/>
                  </div>
                  <div class="text">
                    <div>
                      {{ $t('earlyBird.referral.From_indirect_referrals__') }} #2
                    </div>
                    <div>
                      2%
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li v-for="level in [3, 4, 5, 6, 7, 8, 9]" :key="level">
              <div class="feed">
                <span v-show="level < 9" class="line" aria-hidden="true"></span>
                <div class="row">
                  <div class="icon">
                    <fa v-if="referred < level" :icon="['fas', 'user-friends']" class="text-gray-300"/>
                    <fa v-else :icon="['fas', 'user-friends']" class="text-green-500"/>
                  </div>
                  <div class="text">
                    <div>
                      <p>
                        {{ $t('earlyBird.referral.From_indirect_referrals__') }} #{{ level }}
                      </p>
                      <p v-if="referred < level" class="mt-1 text-green-500">
                        {{ $t('earlyBird.referral.Refer') }}
                        {{ level }} ETH
                        {{ $t('earlyBird.referral.to_unlock') }}
                      </p>
                      <p v-else class="mt-1 text-orange-500">
                        {{ $t('earlyBird.referral.Unlocked') }}
                      </p>
                    </div>
                    <div>
                      1%
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarlyBirdReferralRules",
  computed: {
    referred() {
      // return 6
      return Number(
        this.$store.state.ether.web3().utils.fromWei(this.$store.state.vokenEarlyBirdSale.account.referred, 'ether')
      )
    },
  }
}
</script>

<style scoped>


</style>
