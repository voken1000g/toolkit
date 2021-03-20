<template>
  <div class="py-24">
    <div class="max-w-2xl mx-auto">
      <!-- Avatar -->
      <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
        <div v-if="vokenAccount.vokenInt === '0'"
             class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
        >
          <fa :icon="['fas', 'seedling']"/>
        </div>
        <vue-avatar v-else :value='vokenAccount.vokenAddress'/>
      </div>



      <!-- Balance -->
      <div class="resp-mt font-mono text-cool-gray-700 text-center">
        <div class="text-2xl md:text-3xl">
          {{ vokenAccount.balanceObj.d }}<span v-show="vokenAccount.balanceObj.f"
                                               class="text-base md:text-2xl">.{{ vokenAccount.balanceObj.f }}</span>
          <span class="text-xl md:text-2xl">
            VokenTB
          </span>
        </div>
        <div v-show="vokenAccount.balance > '0'" class="mt-2">
          <span v-if="vokenAccount.balance === vokenAccount.vesting" class="text-gray-400">
            (vesting)
          </span>
          <span v-else-if="vokenAccount.balance === vokenAccount.available" class="text-gray-400">
            (all available)
          </span>
          <span v-else class="text-gray-500">
            ({{ vokenAccount.availableObj.d }}<span v-show="vokenAccount.availableObj.f"
                                                    class="text-sm">.{{ vokenAccount.availableObj.f }}</span>
              available)
          </span>
        </div>
      </div>





      <!-- 0 -->
      <div v-if="vokenAccount.balance === '0'" class="resp-mt mx-auto max-w-md">
        <a href="https://get.voken.io/" class="w-full btn btn-pink justify-center py-2 text-lg">
          Go to Early-Bird Sale
        </a>
      </div>

      <!-- No Voken Address -->
      <div v-else-if="vokenAccount.vokenInt === '0'" class="resp-mt mx-auto max-w-md">
        <nuxt-link :to="localePath('/wallet/bind')" class="w-full btn btn-pink justify-center py-2 text-lg">
          Bind Your Voken Wallet Address
        </nuxt-link>
      </div>

      <!-- Migrate -->
      <div v-else class="resp-mt mx-auto max-w-md">



        <div class="">
          <label for='migrate-amount'>
            Migrate
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='migrate-amount'
                   class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                   v-model="amount"
                   :placeholder="'Maximum: ' + vokenAccount.availableStr" />

            <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <fa class='fa-error' :icon="['fas', 'times']" />
              <fa class='fa-success' :icon="['fas', 'check']" />
              <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
            </div>
          </div>
        </div>

        <div v-show="vokenAccount.vokenInt > '0'"
             class="mt-4 text-lg font-mono text-center text-cool-gray-700 break-all"
        >
          TO:
          <span class="font-bold">
            {{ vokenAccount.vokenAddress }}
          </span>
        </div>

        <button class="mt-8 w-full btn btn-indigo justify-center py-2 text-lg" @click="migrate">
          Coming Soon...
        </button>
      </div>
    </div>

  </div>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'

export default {
  name: "VokenMigrateExe",
  components: {VueAvatar},
  data() {
    return {
      amount: ''
    }
  },
  computed: {
    ether() {
      return this.$store.state.ether
    },
    vokenAccount() {
      return this.$store.state.voken.account
    },
  },
  methods: {
    migrate() {
      this.$toast.info('Coming soon...')
    }
  }
}
</script>

<style scoped>

</style>
