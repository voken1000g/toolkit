// import BigNumber from 'bignumber.js'
import detectEthereumProvider from '@metamask/detect-provider'
import DAPP from "~/utils/constants/dapp";

export default async function ({store, app, redirect}) {
  if (store.state.vokenEarlyBirdSale.blockNumber) {
    console.log('::: M[vokenEarlyBirdSale] loaded')
    return
  }

  if (!store.state.ether.web3) {
    console.error('::: Middleware - vokenEarlyBirdSale: no web3')
    return
  }

  if (!store.state.ether.productionMode) {
    console.error('::: Middleware - vokenEarlyBirdSale: not production mode')
    return
  }

  // Sync STATUS
  await store.dispatch('vokenEarlyBirdSale/SYNC_STATUS')
  await store.dispatch('vokenEarlyBirdSale/SYNC_ACCOUNT')
  await store.dispatch('vokenEarlyBirdSale/SET_BLOCK_NUMBER', store.state.ether.blockNumber)

  // on: New Block -> Sync VokenTB balance
  await store.state.ether.web3().eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      if (blockHeader.number > store.state.vokenEarlyBirdSale.blockNumber + DAPP.VOKEN_TB_EARLY_BIRD_SALE_INTERVAL_BLOCK_DIFF) {
        await store.dispatch('vokenEarlyBirdSale/SYNC_STATUS')
        await store.dispatch('vokenEarlyBirdSale/SYNC_ACCOUNT')
        await store.dispatch('vokenEarlyBirdSale/SET_BLOCK_NUMBER', blockHeader.number)
      }
    })

  // on: Account Changed
  const provider = await detectEthereumProvider()
  await provider
    .on('accountsChanged', async function (accounts) {
      await store.dispatch('vokenEarlyBirdSale/SYNC_STATUS')
      await store.dispatch('vokenEarlyBirdSale/SYNC_ACCOUNT')
      await store.dispatch('vokenEarlyBirdSale/SET_BLOCK_NUMBER', store.state.ether.blockNumber)
    })
}
