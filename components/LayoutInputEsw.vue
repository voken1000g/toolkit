<template>
  <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
    <fa class='fa-error' :icon="['fas', 'times']" />
    <fa class='fa-success' :icon="['fas', 'check']" />
    <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
  </div>
</template>

<script>
export default {
  name: "LayoutInputEsw"
}
</script>
