<template>
  <div class="resp-wide pb-20">
    <div class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl">
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="div-striped-list-header space-x-2">
          <div>
            <h3>
              ETH (Ethereum) Blockchain
            </h3>
          </div>
          <div class="text-2xl text-gray-500">
            <fa :icon="['fab', 'ethereum']"/>
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                Chain ID (Name)
              </dt>
              <dd>
                {{ ether.chainId }} ({{ fnEthereum.chainId2NetworkName(ether.chainId) }})
              </dd>
            </div>

            <div v-if="ether.blockNumber" class="div-striped-list-card">
              <dt>
                Block Height
              </dt>
              <dd>
                {{ ether.blockNumberStr }}
              </dd>
            </div>

            <div v-show="!ether.productionMode" class="div-striped-list-card">
              <dt>
                ETH Balance
              </dt>
              <dd>
                <fa :icon="['fab', 'ethereum']" class="text-indigo-600"/>
                {{ ether.balanceStr }} ETH
              </dd>
            </div>

            <div v-show="ether.productionMode && ether.usdPrice > '0'" class="div-striped-list-card">
              <dt>
                Latest ETH Price
              </dt>
              <dd>
                <fa :icon="['fas', 'dollar-sign']" class="text-indigo-600"/>
                <comp-number :value="ether.usdPriceStr" />
                USD (DAI, on UniSwap)
              </dd>
            </div>

            <div v-show="ether.gasPrice > '0'" class="div-striped-list-card">
              <dt>
                GAS Price (.avg)
              </dt>
              <dd>
                <comp-number :value="ether.gasPriceStr" />
                GWei
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>


    <div v-show="ether.productionMode"
         class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="div-striped-list-header space-x-2">
          <div>
            <h3>
              VokenTB
            </h3>
            <p>
              On Ethereum blockchain
            </p>
          </div>
          <div class="font-mono text-sm" :class="{ 'text-gray-400': voken.blockNumber !== ether.blockNumber }">
            #{{ voken.blockNumberStr }}
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
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
                Latest Price
              </dt>
              <dd>
                <fa :icon="['fas', 'dollar-sign']" class="text-indigo-600"/>
                <number-obj :value-obj="voken.usdPriceObj" />
                USD (DAI, on UniSwap)
              </dd>
            </div>


            <div class="div-striped-list-card">
              <dt>
                Total Supply
              </dt>
              <dd>
                <div>
                  <number-obj :value-obj="voken.capObj" />
                </div>
                <div>
                  <number-obj :value-obj="voken.totalSupplyObj" /> for now
                </div>
              </dd>
            </div>


            <div class="div-striped-list-card">
              <dt>
                Distribution for Early-Bird
              </dt>
              <dd>
                5% of the Total Supply: 10.5 Million
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Distribution for Public-Sale
              </dt>
              <dd>
                40% of the Total Supply: 84 Million, NOT STARTED
              </dd>
            </div>


            <div v-show="voken.burningPermilleMin" class="div-striped-list-card">
              <dt>
                Transfer with burning
              </dt>
              <dd>
                {{ voken.burningPermilleMinStr }}% - {{ voken.burningPermilleMaxStr }}%
              </dd>
            </div>


            <div class="div-striped-list-card">
              <dt>
                Contract Address
              </dt>
              <dd>
                {{ DAPP.CONTRACT_ADDRESS_VOKEN_TB }}
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>

    <overview-wallet v-show="ether.productionMode" />

    <div v-show="ether.productionMode"
         class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="div-striped-list-header space-x-2">
          <div>
            <h3>
              VokenTB Early-Bird Sale
            </h3>
            <p>
              On Ethereum blockchain
            </p>
          </div>
          <div class="font-mono text-sm" :class="{ 'text-gray-400': earlyBirdSale.blockNumber !== ether.blockNumber }">
            #{{ earlyBirdSale.blockNumberStr }}
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                Sale Price
              </dt>
              <dd>
                <fa :icon="['fas', 'dollar-sign']" class="text-indigo-600"/>
                <number-obj :value-obj="earlyBirdSale.usdPriceObj" />
                USD (DAI)
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Minimum ~ Maximum
              </dt>
              <dd>
                {{ earlyBirdSale.weiMinStr }} ~ {{ earlyBirdSale.weiMaxStr }} ETH
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Sold
              </dt>
              <dd>
                {{ earlyBirdSale.progressPercentStr }}% ::
                <number-obj :value-obj="earlyBirdSale.summedObj" />
                VokenTB
                <!--  <div class="mt-1 ml-4 text-xs text-gray-500">-->
                <!--  ({{ earlyBirdSale.issuedObj.d }}<span v-show="earlyBirdSale.issuedObj.f"-->
                <!--                                        class="number-f">.{{ earlyBirdSale.issuedObj.f }}</span>-->
                <!--  +-->
                <!--  {{ earlyBirdSale.bonusesObj.d }}<span v-show="earlyBirdSale.bonusesObj.f"-->
                <!--                                        class="number-f">.{{ earlyBirdSale.bonusesObj.f }}</span>)-->
                <!--  </div>-->
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Contract Address
              </dt>
              <dd>
                {{ DAPP.CONTRACT_ADDRESS_EARLY_BIRD }}
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
import DAPP from '~/utils/constants/dapp'

export default {
  name: "overview-index",
  middleware: ['web3', 'voken', 'vokenEarlyBirdSale'],
  computed: {
    // fnEtherscan() {
    //   return fnEtherscan
    // },
    fnEthereum() {
      return fnEthereum
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
    },
    ebAccount() {
      return this.$store.state.vokenEarlyBirdSale.account
    }
  }
}
</script>
