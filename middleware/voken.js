// import BigNumber from 'bignumber.js'

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
  await store.dispatch('voken/SYNC_BALANCE', store.state.ether.blockNumber)

  // on: New Block -> Sync VokenTB balance
  await store.state.ether.web3().eth
    .subscribe('newBlockHeaders')
    .on('data', async blockHeader => {
      await store.dispatch('voken/SYNC_BALANCE', blockHeader.number)
    })
}
