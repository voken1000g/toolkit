// import BigNumber from 'bignumber.js'
import detectEthereumProvider from '@metamask/detect-provider'
import DAPP from "~/utils/constants/dapp";

export default async function ({store, app, redirect}) {
  if (store.state.voken.blockNumber) {
    console.log('::: M[voken] loaded')
    return
  }

  if (!store.state.ether.web3) {
    console.error('::: M[voken]: no web3')
    return
  }

  if (!store.state.ether.productionMode) {
    console.error('::: M[voken]: not production mode')
    return
  }



  // Sync VokenTB Data
  await store.dispatch('voken/SYNC_DATA')
  await store.dispatch('voken/SYNC_ACCOUNT')
  await store.dispatch('voken/SET_BLOCK_NUMBER', store.state.ether.blockNumber)

  // on: New Block -> Sync VokenTB balance
  await store.state.ether.web3().eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      if (blockHeader.number > store.state.voken.blockNumber + DAPP.VOKEN_TB_INTERVAL_BLOCK_DIFF) {
        await store.dispatch('voken/SYNC_DATA')
        await store.dispatch('voken/SYNC_ACCOUNT')
        await store.dispatch('voken/SET_BLOCK_NUMBER', blockHeader.number)
      }
    })

  // on: Account Changed
  const provider = await detectEthereumProvider()
  await provider
    .on('accountsChanged', async function (accounts) {
      await store.dispatch('voken/SYNC_DATA')
      await store.dispatch('voken/SYNC_ACCOUNT')

      await store.dispatch('voken/SET_BLOCK_NUMBER', store.state.ether.blockNumber)
    })
}
