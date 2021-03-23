<template>
  <div>
    <layout-hero-simple>
      <template #title>
        {{ $t('voken.Migrate') }}
      </template>

      <template #text>
        {{ $t('voken.From_Ethereum_to_Voken_Blockchain') }}
      </template>
    </layout-hero-simple>


    <voken-migrate-main />
    <voken-migrate-records class="bg-orange-50" />
    <voken-migrate-faq class="bg-indigo-50" />
  </div>

</template>

<script>
export default {
  name: "voken-migrate",
  middleware: ['web3', 'voken'],
  layout: 'white',
}
</script>

<style scoped>

</style>
