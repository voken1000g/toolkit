<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Stat
      </template>
    </layout-hero-simple>

    <div class="resp-wide py-16 lg:py-24">
      <layout-h2>
        <template #title>
          Account
        </template>
      </layout-h2>

      <div class="resp-mt flex items-end space-x-2">
        <div class="flex-grow" :class="addressStatus">
          <label for='default1'>
            ETH Address
          </label>

          <div class='relative mt-1'>
            <input type='text'
                   id='default1'
                   class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                   v-model="address"
                   placeholder='ETH Address'/>

            <layout-input-esw/>
          </div>
        </div>

        <div class="flex-grow-0">
          <nuxt-link :to="localePath(statUrl)"
                     class='w-full btn justify-center py-3 px-6 uppercase cursor-pointer'
          >
            Go
          </nuxt-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import Web3 from "web3"

export default {
  name: "stat--index",
  data() {
    return {
      address: '',
    }
  },
  computed: {
    addressStatus() {
      if (this.address) {
        if (Web3.utils.isAddress(this.address)) {
          return 'success'
        }

        return 'error'
      }

      return null
    },
    statUrl() {
      if (this.addressStatus === 'success') {
        return '/stat/' + this.address
      }

      return '/stat'
    }
  }
}
</script>

<style scoped>

</style>
