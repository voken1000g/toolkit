<template>
  <span>
    {{ valueObj.d }}<span v-show="valueObj.f" class="number-f">.{{ valueObj.f }}</span>
  </span>
</template>

<script>
export default {
  name: "NumberObj",
  props: ['valueObj']
}
</script>
