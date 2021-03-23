<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('earlyBird.referral.Referral_System') }}
      </template>

      <template #text>
        {{ $t('earlyBird.referral.Earn_ETH_up_to_22percent__') }}
      </template>
    </layout-hero-simple>

    <early-bird-referral-link class="bg-indigo-50" />
    <early-bird-referral-rules />
    <early-bird-referral-rewards class="bg-indigo-50" />
  </div>
</template>

<script>

export default {
  name: "early-bird-referral",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
  layout: 'white',
}
</script>

<style scoped>

</style>
