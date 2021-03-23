<template>
  <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
    <div v-if="$store.state.voken.account.vokenInt === '0'"
         class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
    >
      <fa :icon="['fas', 'seedling']"/>
    </div>
    <vue-avatar v-else :value='$store.state.voken.account.vokenAddress'/>
  </div>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'

export default {
  name: "LayoutVokenAvatar",
  components: {VueAvatar},
}
</script>
