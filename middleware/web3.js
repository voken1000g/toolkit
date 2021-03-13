import BigNumber from 'bignumber.js'
import detectEthereumProvider from '@metamask/detect-provider'
import Web3 from "web3"
import DAPP from '../utils/constants/dapp'
import vokenTbAbi from '../utils/contracts/vokenTb.json'
import earlyBirdAbi from '../utils/contracts/earlyBird.json'

export default async function ({store, app, redirect}) {
  const provider = await detectEthereumProvider()

  if (!provider) {
    app.$toast.error('M[web3] detect Ethereum Provider: Failed')
    console.error('::: M[web3] detect Ethereum Provider: Failed')
    // TODO: redirect
    // redirect(app.localePath('/'))
    return
  }

  ethereum.autoRefreshOnNetworkChange = false

  // Set web3
  const web3 = new Web3(Web3.givenProvider)
  if (!web3) {
    console.error('::: M[web3] initialize web3: Failed')
    return
  }
  await store.dispatch('ether/SET_WEB3', web3)



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

  // on: New Block
  await web3.eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      await store.dispatch('ether/SET_BLOCK_NUMBER', blockHeader.number)
    })

  // dApp Contracts
  if (!store.state.ether.productionMode) {
    console.error('::: Middleware - vokenEarlyBirdSale: not production mode')
    return
  }

  const Contract = web3.eth.Contract

  await store.dispatch('voken/SET_CONTRACT', new Contract(
    vokenTbAbi, DAPP.CONTRACT_ADDRESS_VOKEN_TB
  ))

  await store.dispatch('vokenEarlyBirdSale/SET_CONTRACT', new Contract(
    earlyBirdAbi, DAPP.CONTRACT_ADDRESS_EARLY_BIRD
  ))
}
