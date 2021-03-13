// import BigNumber from 'bignumber.js'

export default async function ({store, app, redirect}) {
  if (!store.state.ether.web3) {
    console.error('::: Middleware - vokenEarlyBirdSale: no web3')
    return
  }

  if (!store.state.ether.productionMode) {
    console.error('::: Middleware - vokenEarlyBirdSale: not production mode')
    return
  }

  // Sync STATUS
  await store.dispatch('vokenEarlyBirdSale/SYNC_STATUS', store.state.ether.blockNumber)

  // on: New Block -> Sync VokenTB balance
  await store.state.ether.web3().eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      await store.dispatch('vokenEarlyBirdSale/SYNC_STATUS', blockHeader.number)
    })
}
