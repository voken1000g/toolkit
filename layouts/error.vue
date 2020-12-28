<template>
  <div class='text-center'>
    <h1 class='text-gray-700 text-5xl'>
      Error
      {{ error.statusCode }}
    </h1>

    <h2 class='mt-6 text-gray-600 text-2xl'>
      {{ error.message }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'middleCenter',
  props: ['error']
}
</script>
