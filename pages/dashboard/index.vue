<template>
  <div class="resp-wide pb-20">
    <div class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Ethereum Blockchain
          </h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
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
                {{ $store.state.ether.blockNumberStr }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Latest ETH Price
              </dt>
              <dd>
                {{ ether.usdPriceObj.d }}<span v-show="ether.usdPriceObj.f"
                                              class="number-f">.{{ ether.usdPriceObj.f }}</span>
                DAI (USD)
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>


    <div v-show="$store.state.ether.productionMode"
         class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            ETH Wallet
          </h3>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                Address
              </dt>
              <dd>
                {{ $store.state.ether.account }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                ETH Balance
              </dt>
              <dd>
                {{ $store.state.ether.balanceStr }} ETH
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                VokenTB Balance (total)
              </dt>
              <dd>
                {{ voken.balanceObj.d }}<span v-show="voken.balanceObj.f"
                                              class="number-f">.{{ voken.balanceObj.f }}</span>
                VokenTB
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <div v-show="$store.state.ether.productionMode"
         class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            VokenTB
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Voken TeraByte on Ethereum blockchain #{{ $store.state.voken.blockNumberStr }}
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                VokenTB Main Contract
              </dt>
              <dd>
                {{ DAPP.CONTRACT_ADDRESS_VOKEN_TB }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Token Symbol (Name)
              </dt>
              <dd>
                VokenTB (Voken TeraByte)
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Total Supply / Cap
              </dt>
              <dd>
                {{ voken.totalSupplyObj.d }}<span v-show="voken.totalSupplyObj.f"
                                                  class="number-f">.{{ voken.totalSupplyObj.f }}</span>
                /
                {{ voken.capObj.d }}<span v-show="voken.capObj.f"
                                          class="number-f">.{{ voken.capObj.f }}</span>
                VokenTB
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>

    <div v-show="$store.state.ether.productionMode"
         class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            VokenTB Early-Bird Sale
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
            Early-Bird Sale on Ethereum Blockchain #{{ earlyBirdSale.blockNumberStr }}
          </p>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                Early-Bird Sale Contract
              </dt>
              <dd>
                {{ DAPP.CONTRACT_ADDRESS_EARLY_BIRD }}
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Sale Price
              </dt>
              <dd>
                {{ earlyBirdSale.usdPriceObj.d }}<span v-show="earlyBirdSale.usdPriceObj.f"
                                                       class="number-f">.{{ earlyBirdSale.usdPriceObj.f }}</span>
                DAI (USD)
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Sold
              </dt>
              <dd>
                {{ earlyBirdSale.issuedObj.d }}<span v-show="earlyBirdSale.issuedObj.f"
                                                     class="number-f">.{{ earlyBirdSale.issuedObj.f }}</span>
                +
                {{ earlyBirdSale.bonusesObj.d }}<span v-show="earlyBirdSale.bonusesObj.f"
                                                      class="number-f">.{{ earlyBirdSale.bonusesObj.f }}</span>
                =
                {{ earlyBirdSale.volumeObj.d }}<span v-show="earlyBirdSale.volumeObj.f"
                                                     class="number-f">.{{ earlyBirdSale.volumeObj.f }}</span>
                VokenTB
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Maximum
              </dt>
              <dd>
                {{ earlyBirdSale.weiMaxStr }} ETH
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Minimum
              </dt>
              <dd>
                {{ earlyBirdSale.weiMinStr }} ETH
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'
import fnEthereum from '~/utils/fnEthereum'
import fnEtherscan from '~/utils/fnEtherscan'
import DAPP from '~/utils/constants/dapp'

export default {
  name: "dashboard-index",
  middleware: ['web3', 'vokenEarlyBirdSale'],
  computed: {
    Web3() {
      return Web3
    },
    fnEthereum() {
      return fnEthereum
    },
    fnEtherscan() {
      return fnEtherscan
    },
    DAPP() {
      return DAPP
    },
    ether() {
      return this.$store.state.ether
    },
    voken() {
      return this.$store.state.voken
    },
    earlyBirdSale() {
      return this.$store.state.vokenEarlyBirdSale
    }
  }
}
</script>
