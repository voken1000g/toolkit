<template>
  <div class="hero-simple">
    <div class='hero-simple-wrapper'>
      <h1>
        <slot name="title" />
      </h1>
      <div class="div-hero-simple" v-if="$slots.text">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeroSimple",
}
</script>

<style scoped>

</style>
