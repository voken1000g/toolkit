<template>
  <div class="v12resale">
    <layout-hero-simple>
      <template #title>
        Resale/Upgrade Program
      </template>

      <template #text>
        For Voken1.0/2.0 Holders
      </template>
    </layout-hero-simple>

    <div class="py-16">
      <div class="resp-wide">
        <div class="countdown-progress vn-bg-gr-pink">
          <div class="countdown">
            <div class="font-bold">
              Deadline for Upgrade
            </div>
            <div class="mt-2 text-sm">
              {{ $moment(status.deadline * 1000) }}
            </div>
            <div class="mt-2 font-bold text-2xl xl:text-3xl">
              <span>
                {{ countdown.d }} days
              </span>
              <span>
                {{ countdown.hh }}:{{ countdown.mm }}:{{ countdown.ss }}
              </span>
            </div>
          </div>
          <div class="upgrade">
            <div class="font-bold text-2xl xl:text-3xl">
              <number-obj :value-obj="status.processInPercentObj" />
              %
            </div>
            <div class="mt-2 font-normal text-sm">
              of totally 21,000,000 VokenTB
            </div>
            <div class="mt-2 font-bold">
              upgraded
              <span v-show="status.processInPercentObj.d >= '100'">
                (cap reached)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <resale-audited class="bg-gray-50" />
    <resale-about />
    <resale-r class="bg-gray-50" />
    <resale-u />

    <div class="mt-8">
      {{ $store.state.vokenResale.status }}
    </div>
    <div class="mt-8">
      {{ $store.state.vokenResale.account }}
    </div>
  </div>
</template>

<script>
import DAPP from '~/utils/constants/dapp'

export default {
  name: "resale",
  middleware: ['web3', 'vokenResale'],
  layout: 'white',
  computed: {
    DAPP() {
      return DAPP
    },
    status() {
      return this.$store.state.vokenResale.status
    },
    countdown() {
      return this.$store.state.vokenResale.deadlineCountdown
    },
    account() {
      return this.$store.state.vokenResale.account
    }
  },
  watch: {
    '$store.state.ether.account': async function() {
      await this.update()
    }
  },
  async mounted() {
    await this.update()
  },
  methods: {
    async update() {
      await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V1_RESALE')
      await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V2_RESALE')
      await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V1_UPGRADE')
      await this.$store.dispatch('vokenResale/SYNC_ACCOUNT_V2_UPGRADE')
    },

  }
}
</script>

<style scoped>

</style>
