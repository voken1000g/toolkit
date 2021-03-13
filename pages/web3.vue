<template>
  <div class="resp-wide">
    <div class="max-w-2xl mx-auto py-16 sm:py-20 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Ethereum
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Information about Ethereum blockchain
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div v-show="!$store.state.ether.productionMode" class="div-striped-list-card">
              <dt>
                Production Mode
              </dt>
              <dd>
                {{ $store.state.ether.productionMode }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Chain ID
              </dt>
              <dd>
                {{ $store.state.ether.chainId }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Chain Name
              </dt>
              <dd>
                {{ fnEthereum.chainId2NetworkName($store.state.ether.chainId) }}
              </dd>
            </div>

            <div v-if="$store.state.ether.blockNumber" class="div-striped-list-card">
              <dt>
                Block Height
              </dt>
              <dd>
                {{ $store.state.ether.blockNumber }}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fnEthereum from '~/utils/fnEthereum'

export default {
  name: "web3",
  middleware: ['web3'],
  computed: {
    fnEthereum() {
      return fnEthereum
    },
  }
}
</script>
