<template>
  <span>
    {{ numberObj.d }}<span v-if="numberObj.f" class="number-f">.{{ numberObj.f }}</span>
  </span>
</template>

<script>
import fnFormat from '~/utils/fnFormat'

export default {
  name: "CompNumber",
  props: {
    value: {
      type: String,
      required: true
    },
  },
  computed: {
    numberObj() {
      return fnFormat.ns2Obj(this.value)
    },
  },
}
</script>
