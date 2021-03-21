<template>
  <div class="bg-indigo-800">
    <div class='resp-wide border-t border-indigo-700 py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
      <div class="px-4">
        <div class="max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-5xl">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {{ $t('earlyBird.Early_bird_sale') }}
          </h1>
          <p class="mt-6 sm:mt-10 text-xl text-indigo-300">
            {{ $t('earlyBird.Ethereum_smart_contracts_ensure__') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EarlyBirdHero",
}
</script>

<style scoped>

</style>
