import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from "web3"
import DAPP from '../utils/constants/dapp'
import vokenTbAbi from '../utils/contracts/vokenTb.json'
import vokenTbDataAbi from '../utils/contracts/vokenTbData.json'
import vokenTbAccountDataAbi from '../utils/contracts/vokenTbAccountData.json'
import earlyBirdAbi from '../utils/contracts/earlyBird.json'

export default async function ({store, app, redirect, route }) {
  if (store.state.ether.blockNumber) {
    console.log('::: M[web3] loaded')
    return
  }

  const provider = await detectEthereumProvider()

  if (!provider) {
    app.$toast.error('M[web3] detect web3 provider: Failed')
    console.error('::: M[web3] detect web3 provider: Failed')

    redirect(app.localePath('/onboard?url=' + route.fullPath))
    return
  }
  ethereum.autoRefreshOnNetworkChange = false

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

  await store.dispatch('voken/SET_ACCOUNT_DATA_CONTRACT', new Contract(
    vokenTbAccountDataAbi, DAPP.CONTRACT_ADDRESS_VOKEN_TB_ACCOUNT_DATA
  ))

  await store.dispatch('vokenEarlyBirdSale/SET_CONTRACT', new Contract(
    earlyBirdAbi, DAPP.CONTRACT_ADDRESS_EARLY_BIRD
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
  await web3.eth.getBalance(store.state.ether.account)
    .then(async function (balance) {
      await store.dispatch('ether/SET_BALANCE', balance)
    })
    .catch(error => {
      app.$toast.error(error.message)
    })

  // // Sync GAS Price
  // await store.dispatch('ether/SYNC_GAS_PRICE')

  // Verify Chain ID
  if (!store.state.ether.productionMode) {
    console.error('[Ethereum Chain ID ERROR]')
    // TODO: redirect
    // redirect(app.localePath('/'))
    // return
  }

  // on: Chain Changed
  await provider
    .on('chainChanged', async function (chainId) {
      await store.dispatch('ether/SET_CHAIN_ID', parseInt(chainId))
      if (!store.state.ether.productionMode) {
        console.error('[Ethereum Chain ID ERROR]')
        // TODO: redirect
        // redirect(app.localePath('/'))
      }
    })

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

  // // dApp Contracts
  // if (!store.state.ether.productionMode) {
  //   console.error('::: Middleware - vokenEarlyBirdSale: not production mode')
  //   return
  // }
}
