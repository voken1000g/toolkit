<template>
  <div class="hero-simple">
    <div class='hero-simple-wrapper'>
      <h1>
        <slot name="title" />
      </h1>
      <p>
        <slot name="text" />
      </p>
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
