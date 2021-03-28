<template>
  <div class="v12resale">
    <layout-hero-simple>
      <template #title>
        {{ $t('v12.Resale_or_Upgrade') }}
      </template>

      <template #text>
        {{ $t('v12.Resale__Program_for__') }}
      </template>
    </layout-hero-simple>

    <div v-if="notWorkForYourAddress" class="resp-wide pt-24 pb-80 text-gray-500 text-center">
      <div class="font-bold text-xl xl:text-2xl">
        {{ $t('v12.Not_work_for_your_address') }}
      </div>
      <div class="resp-mt font-mono text-base xl:text-xl break-all">
        {{ $store.state.ether.account }}
      </div>
    </div>

    <div v-else>
      <v12-audited />
      <v12-progress class="bg-indigo-50" />
      <v12-resale />
      <v12-upgrade class="bg-indigo-50" />
    </div>
  </div>
</template>

<script>
export default {
  name: "voken-v12",
  middleware: ['web3', 'vokenResale'],
  layout: 'white',
  computed: {
    status() {
      return this.$store.state.vokenResale.status
    },
    countdown() {
      return this.$store.state.vokenResale.deadlineCountdown
    },
    account() {
      return this.$store.state.vokenResale.account
    },

    notWorkForYourAddress() {
      return (
        this.$store.state.vokenResale.account.v1.balance === '0'
        ||
        this.$store.state.vokenResale.account.v2.balance === '0'
      )
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
