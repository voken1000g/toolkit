<template>
  <div class="resp-wide">
    <div class="max-w-2xl mx-auto py-16 sm:py-20 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3>
            ETH (Ethereum) Blockchain
          </h3>
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
                Chain ID (Name)
              </dt>
              <dd>
                {{ $store.state.ether.chainId }} ({{ fnEthereum.chainId2NetworkName($store.state.ether.chainId) }})
              </dd>
            </div>

            <div v-if="$store.state.ether.blockNumber" class="div-striped-list-card">
              <dt>
                Block Height
              </dt>
              <dd>
                {{ $store.state.ether.blockNumberStr }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                ETH Balance
              </dt>
              <dd>
                <fa :icon="['fab', 'ethereum']" class="text-indigo-600"/>
                {{ $store.state.ether.balanceStr }} ETH
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div v-if="$store.state.ether.productionMode && $route.query.url" class="mx-auto w-full max-w-lg">
      <nuxt-link :to="$route.query.url" class="w-full btn btn-pink justify-center py-3">
        Back to the Previous Page
      </nuxt-link>
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
