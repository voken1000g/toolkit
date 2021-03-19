<template>
  <div class="resp-wide pb-40">
    <wallet-bind v-if="vokenAccount.vokenInt === '0'"/>
    <div v-else class="resp-mt mx-auto max-w-xl text-center">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Already Done
      </h2>

      <div
        class='w-14 h-14 resp-mt lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
        <vue-avatar :value='vokenAccount.vokenAddress'/>
      </div>

      <h3 class="resp-mt text-cool-gray-500">
        Your Voken Wallet Address
      </h3>

      <p class="mt-4 text-lg font-mono font-bold text-cool-gray-700 break-all">
        {{ vokenAccount.vokenAddress }}
      </p>

      <div class="mt-6 font-mono text-cool-gray-700">
        {{ vokenAccount.balanceObj.d }}<span v-show="vokenAccount.balanceObj.f"
                                             class="number-f">.{{ vokenAccount.balanceObj.f }}</span>
        VokenTB
        <span v-if="vokenAccount.balance === vokenAccount.vesting" class="text-cool-gray-400">(vesting)</span>
        <span v-else>
          ({{ vokenAccount.availableObj.d }}<span v-show="vokenAccount.availableObj.f"
                                                  class="number-f">.{{ vokenAccount.availableObj.f }}</span>
            available)
        </span>
      </div>

      <div class="resp-mt">
        <nuxt-link :to="localePath('/migrate')" class="w-full btn justify-center py-3 font-bold text-lg">
          Migrate to Voken Blockchain
        </nuxt-link>
      </div>
      <div class="mt-3">
        <nuxt-link :to="localePath('/voken/early-bird-referral')"
                   class="w-full btn btn-pink justify-center py-3 font-bold text-lg"
        >
          Learn Early-Bird Referral Rewards
        </nuxt-link>
      </div>
    </div>

    <div class="resp-mt mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900">
            Ready to Voken Blockchain?
          </h2>
          <p class="mt-4 leading-7 text-lg text-gray-500">
            Just one-step away.
            Bind your Voken wallet address, then migrate and experience.
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-12">
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                FREE: Susitna Voken on the beta network
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                After you set up your Voken Address,
                you would receive some <b>Susitna Voken</b> on vnCHAIN Susitna (beta network) within 48 hours.
                Meanwhile, you can experience the Proxy ClientBase by using it, even send some to your friends.
              </dd>
            </div>

            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Voken on vnCHAIN main network
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                <p>
                  The transfer function of VokenTB will not be disabled
                  in order to facilitate user transfer, distribution, or trade.
                </p>

                <p>
                  Once the main network is online,
                  you can map the ERC20 version of VokenTB to the vnCHAIN main network
                  by transferring all or part of your funds to a specific address.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueAvatar from '@voken/vue-avatar'

export default {
  name: "bind",
  middleware: ['web3', 'voken'],
  layout: 'indigoBubble',
  components: {VueAvatar},

  data() {
    return {
      address: ''
    }
  },
  computed: {
    vokenAccount() {
      return this.$store.state.voken.account
    },
  },
}
</script>

<style scoped>
.number-f {
  @apply text-sm text-cool-gray-400;
}
</style>
