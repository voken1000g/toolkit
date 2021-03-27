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

    <resale-progress />
    <resale-audited class="bg-gray-50" />
    <resale-about />
    <resale-r class="bg-gray-50" />
    <resale-u />

    <div class="resp-wide">
      <div class="mt-8">
        {{ $store.state.vokenResale.status }}
      </div>
      <div class="mt-8">
        {{ $store.state.vokenResale.account }}
      </div>
      <div class="mt-8">
        {{ $store.state.vokenResale.account.v1 }}
      </div>
      <div class="mt-8">
        {{ $store.state.vokenResale.account.v2 }}
      </div>
      <div class="mt-8">
        {{ $store.state.vokenResale.account.v1.upgrade }}
      </div>
      <div class="mt-8">
        {{ $store.state.vokenResale.account.v2.upgrade }}
      </div>
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
      await this.$store.dispatch('vokenResale/SYNC_ACCOUNT')
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
