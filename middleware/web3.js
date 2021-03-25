// import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider'
import DAPP from '../utils/constants/dapp'
import vokenTbAbi from '../utils/contracts/vokenTb.json'
import vokenTbDataAbi from '../utils/contracts/vokenTbData.json'
import earlyBirdAbi from '../utils/contracts/earlyBird.json'
import earlyBirdDataAbi from '../utils/contracts/earlyBirdData.json'
import resaleAbi from '../utils/contracts/resale.json'

export default async function ({store, app, redirect, route }) {
  if (store.state.ether.blockNumber) {

  }

  const provider = await detectEthereumProvider()

  if (!provider) {
    app.$toast.error('M[web3] detect web3 provider: Failed')
    console.error('::: M[web3] detect web3 provider: Failed')

    redirect(app.localePath('/onboard?url=' + route.fullPath))
    return
  }
  ethereum.autoRefreshOnNetworkChange = false

  if (store.state.ether.web3) {
    return
  }

  // Set web3
  const web3 = new Web3(window.ethereum)
  if (!web3) {
    app.$toast.error('::: M[web3] initialize web3: Failed')
    console.error('::: M[web3] initialize web3: Failed')

    redirect(app.localePath('/onboard?url=' + route.fullPath))
    return
  }
  await store.dispatch('ether/SET_WEB3', web3)

  // Contracts
  const Contract = web3.eth.Contract
  await store.dispatch('voken/SET_CONTRACT', new Contract(
    vokenTbAbi, DAPP.CONTRACT_ADDRESS_VOKEN_TB
  ))
  await store.dispatch('voken/SET_DATA_CONTRACT', new Contract(
    vokenTbDataAbi, DAPP.CONTRACT_ADDRESS_VOKEN_TB_DATA
  ))
  await store.dispatch('vokenEarlyBirdSale/SET_CONTRACT', new Contract(
    earlyBirdAbi, DAPP.CONTRACT_ADDRESS_EARLY_BIRD
  ))
  await store.dispatch('vokenEarlyBirdSale/SET_DATA_CONTRACT', new Contract(
    earlyBirdDataAbi, DAPP.CONTRACT_ADDRESS_EARLY_BIRD_DATA
  ))
  await store.dispatch('vokenResale/SET_CONTRACT', new Contract(
    resaleAbi, DAPP.CONTRACT_ADDRESS_RESALE
  ))

  // Connect
  await provider
    .request({method: 'eth_requestAccounts'})
    .then(async function (accounts) {
      await store.dispatch('ether/SET_ACCOUNT', accounts[0])
    })
    .catch(error => {
      app.$toast.error(error.message)
    })

  // Chain ID
  await web3.eth
    .getChainId()
    .then(async function (chainId) {
      await store.dispatch('ether/SET_CHAIN_ID', chainId)
    })
    .catch(error => {
      app.$toast.error(error.message)
    })

  // Get Latest Block Number
  await web3.eth
    .getBlock('latest')
    .then(async function (block) {
      await store.dispatch('ether/SET_BLOCK_NUMBER', block.number)
    })
    .catch(error => {
      app.$toast.error(error.message)
    })

  // Get ETH balance
  await store.dispatch('ether/SYNC_BALANCE')

  // on: Chain Changed
  await provider
    .on('chainChanged', async function (chainId) {
      await store.dispatch('ether/SET_CHAIN_ID', parseInt(chainId))
      await store.dispatch('ether/SYNC_BALANCE')

      if (!store.state.ether.productionMode) {
        console.error('::: M[web3] on `chainChanged`: Chain ID ERROR')
        const target = app.localePath('/web3')
        if (target !== route.path) {
          redirect(target + '?url=' + route.fullPath)
        }
      }
    })


  /**
   * Only Production Mode
   * =================================================================================================================
   */
  if (!store.state.ether.productionMode) {
    const pathTarget = app.localePath('/web3')
    if (pathTarget !== route.path) {
      console.error('::: M[web3]: Chain ID ERROR, will redirect to:', pathTarget)

      redirect(pathTarget + '?url=' + route.fullPath)
    } else {
      console.error('::: M[web3]: not production mode')
    }

    return
  }

  // // Sync GAS Price
  // await store.dispatch('ether/SYNC_GAS_PRICE')

  // on: Account Changed
  await provider
    .on('accountsChanged', async function (accounts) {
      await store.dispatch('ether/SET_ACCOUNT', accounts[0])
    })

  // on: New Block
  await web3.eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      await store.dispatch('ether/SET_BLOCK_NUMBER', blockHeader.number)
    })

  // Verify Chain ID
  if (!store.state.ether.productionMode) {
    console.error('::: M[web3] Verify Chain ID: Chain ID ERROR')
    const target = app.localePath('/web3')
    if (target !== route.path) {
      redirect(target + '?url=' + route.fullPath)
    }
  }

  // // dApp Contracts
  // if (!store.state.ether.productionMode) {
  //   console.error('::: Middleware - vokenEarlyBirdSale: not production mode')
  //   return
  // }
}
