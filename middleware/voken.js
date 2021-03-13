// import BigNumber from 'bignumber.js'
import detectEthereumProvider from '@metamask/detect-provider'

export default async function ({store, app, redirect}) {
  if (!store.state.ether.web3) {
    console.error('::: M[voken]: no web3')
    return
  }

  if (!store.state.ether.productionMode) {
    console.error('::: M[voken]: not production mode')
    return
  }

  // Sync VokenTB balance
  await store.dispatch('voken/SYNC_STATUS', store.state.ether.blockNumber)

  // on: New Block -> Sync VokenTB balance
  await store.state.ether.web3().eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      await store.dispatch('voken/SYNC_STATUS', blockHeader.number)
    })

  // on: Account Changed
  const provider = await detectEthereumProvider()
  await provider
    .on('accountsChanged', async function (accounts) {
      await store.dispatch('ether/SET_ACCOUNT', accounts[0])
      await store.dispatch('voken/SYNC_STATUS_NOW', store.state.ether.blockNumber)
    })
}
