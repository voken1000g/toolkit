<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('earlyBird.referral.Referral_System') }}
      </template>

      <template #text>
        {{ $t('earlyBird.referral.Earn_VokenTB__') }}
      </template>
    </layout-hero-simple>

    <early-bird-referral-link />
<!--    <early-bird-referral-link class="bg-indigo-50" />-->
<!--    <early-bird-referral-rules />-->
<!--    <voken-direct-referral-list class="bg-indigo-50" />-->
<!--    <early-bird-referral-rewards />-->
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
