<template>
  <div class="resp-my resp-wide">
    <h2 class="text-center font-mono text-3xl text-cool-gray-500">
      Coming soon...
    </h2>

    <div class="mt-60 mx-auto max-w-sm">
      <nuxt-link :to="localePath('/wallet/bind')" class="w-full btn btn-pink justify-center text-xl py-2">
        Set Your Voken Wallet Address
      </nuxt-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "voken-migrate"
}
</script>

<style scoped>

</style>
