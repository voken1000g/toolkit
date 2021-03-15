<template>
  <div class="resp-wide resp-my">
    <div class="flex items-center justify-center">
      <ul>
        <li v-for='link in walletLinks' :key='link.path' class="my-4">
          <nuxt-link :to='localePath(link.path)'
                     :class="link.class"
                     class="w-full justify-start py-4 px-8 space-x-4 sm:space-x-6">
            <div class='flex-shrink-0 h-8 w-8 text-3xl'>
              <fa :icon='link.icon'/>
            </div>

            <div>
              <div class="font-bold text-lg">
                {{ $t(link.title) }}
              </div>
              <p class="mt-2 text-sm" :class="link.textClass">
                {{ $t(link.description) }}
              </p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import walletLinks from '~/utils/constants/walletLinks'

export default {
  name: "wallet-index",
  computed: {
    walletLinks() {
      return walletLinks
    },
  },
}
</script>

<style scoped>

</style>
