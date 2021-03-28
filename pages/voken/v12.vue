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

    <v12-audited />
    <v12-progress class="bg-indigo-50" />
    <v12-resale />
    <v12-upgrade class="bg-indigo-50" />
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
