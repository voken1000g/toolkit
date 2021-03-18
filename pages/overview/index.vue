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
                {{ ether.usdPriceObj.d }}<span v-show="ether.usdPriceObj.f"
                                               class="number-f">.{{ ether.usdPriceObj.f }}</span>
                USD (DAI, on UniSwap)
              </dd>
            </div>

            <div v-show="ether.gasPrice > '0'" class="div-striped-list-card">
              <dt>
                GAS Price (.avg)
              </dt>
              <dd>
                {{ ether.gasPriceObj.d }}<span v-show="ether.gasPriceObj.f"
                                               class="number-f">.{{ ether.gasPriceObj.f }}</span>
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
                {{ voken.usdPriceStr }} USD (DAI, on UniSwap)
              </dd>
            </div>


            <div class="div-striped-list-card">
              <dt>
                Total Supply
              </dt>
              <dd>
                {{ voken.capObj.d }}<span v-show="voken.capObj.f"
                                          class="number-f">.{{ voken.capObj.f }}</span>

                ({{ voken.totalSupplyObj.d }}<span v-show="voken.totalSupplyObj.f"
                                                   class="number-f">.{{ voken.totalSupplyObj.f }}</span> for now)
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


    <div v-show="ether.productionMode"
         class="max-w-2xl mx-auto my-8 sm:my-16 sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="div-striped-list-header space-x-2">
          <div>
            <h3>
              ETH & VokenTB Wallet
            </h3>
            <p>
              {{ ether.account }}
            </p>
          </div>
          <div class="text-3xl text-gray-500">
            <fa v-show="voken.account.isBank" :icon="['fas', 'compact-disc']"/>
            <fa v-show="!voken.account.isBank" :icon="['fas', 'user-circle']"/>
          </div>
        </div>
        <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl class="sm:divide-y sm:divide-gray-200">
            <div class="div-striped-list-card">
              <dt>
                ETH Balance
              </dt>
              <dd>
                <fa :icon="['fab', 'ethereum']" class="text-indigo-600"/>
                {{ ether.balanceStr }} ETH
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                VokenTB Balance
              </dt>
              <dd>
                <div>
                  {{ voken.account.balanceObj.d }}<span v-show="voken.account.balanceObj.f"
                                                        class="number-f">.{{ voken.account.balanceObj.f }}</span>
                  VokenTB
                  <span v-show="voken.account.balance > '0'">
                    <span v-if="voken.account.balance === voken.account.vesting" class="text-gray-400">
                      (vesting)
                    </span>
                    <span v-else-if="voken.account.balance === voken.account.available" class="text-gray-400">
                      (all available)
                    </span>
                    <span v-else>
                      ({{
                        voken.account.availableObj.d
                      }}<span v-show="voken.account.availableObj.f"
                              class="number-f">.{{ voken.account.availableObj.f }}</span>
                        available)
                    </span>
                  </span>
                </div>

                <div v-show="ebAccount.summed > '0'" class="mt-1 ml-2 text-xs text-gray-400">
                  Include {{ ebAccount.summedObj.d }}<span v-show="ebAccount.summedObj.f"
                                                           class="number-f">.{{ ebAccount.summedObj.f }}</span>
                  VokenTB via Early-Bird Sale
                </div>
              </dd>
            </div>

            <div class="div-striped-list-card">
              <dt>
                Voken Wallet Address
              </dt>
              <dd>
                <div v-if="voken.account.vokenInt > '0'">
                  <div>
                    {{ voken.account.vokenAddress }}
                  </div>
                  <div class="mt-1 text-blue-700">
                    For Voken Blockchain, both beta and prod
                  </div>
                </div>
                <div v-else>
                  <nuxt-link :to="localePath('/wallet/bind')"
                             class="btn btn-pink py-1 px-3 text-sm text-center break-normal"
                  >
                    {{ $t('nav.Wallet_Bind') }}
                  </nuxt-link>
                </div>
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
                {{ earlyBirdSale.usdPriceObj.d }}<span v-show="earlyBirdSale.usdPriceObj.f"
                                                       class="number-f">.{{ earlyBirdSale.usdPriceObj.f }}</span>
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
                {{ earlyBirdSale.summedObj.d }}<span v-show="earlyBirdSale.summedObj.f"
                                                     class="number-f">.{{ earlyBirdSale.summedObj.f }}</span>
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

    <div>
      {{ ebAccount.issued }}
      {{ ebAccount.bonuses }}
      {{ ebAccount.summed }}
      {{ ebAccount.vesting }}
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
