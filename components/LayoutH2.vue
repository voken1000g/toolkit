<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        <slot name="title" />
      </h2>

      <p v-if="$slots.text" class="mt-3 text-xl text-gray-500 sm:mt-4">
        <slot name="text" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutH2"
}
</script>

<style scoped>

</style>
