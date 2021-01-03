<template>
  <div class='relative'>
    <input :type='inputType'
           :id='inputId'
           class='esw-input w-full'
           :class='inputClass'
           :value='value'
           v-on:input='$emit("input", $event.target.value)'
           :placeholder='inputPlaceholder' />

    <div class='absolute block inset-y-0 right-0 flex items-center pointer-events-none' :class='iconClass'>
      <fa class='fa-error' :icon="['fas', 'times']" />
      <fa class='fa-success' :icon="['fas', 'check']" />
      <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'EswInput',
  props: {
    value: {
      type: String
    },

    inputType: {
      type: String,
      default: 'text'
    },
    inputId: {
      type: String,
      required: true
    },
    inputClass: {
    },
    inputPlaceholder: {
      type: String,
      default: ''
    },

    iconClass: {
      type: String,
      default: 'pr-3'
    }
  }
}
</script>

<style scoped>

</style>
