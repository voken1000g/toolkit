import detectEthereumProvider from '@metamask/detect-provider'

export default async function ({store, app, redirect}) {
  await store.dispatch('vokenResale/SYNC_STATUS')
  await store.dispatch('vokenResale/SYNC_ACCOUNT')

  // on: Account Changed
  const provider = await detectEthereumProvider()
  await provider
    .on('accountsChanged', async function (accounts) {
      await store.dispatch('vokenResale/SYNC_STATUS')
      await store.dispatch('vokenResale/SYNC_ACCOUNT')
    })
}
