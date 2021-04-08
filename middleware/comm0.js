import detectEthereumProvider from '@metamask/detect-provider'
import DAPP from "~/utils/constants/dapp"
import commSkylerAbi from "~/utils/contracts/commSkyler.json"

export default async function ({store, app, redirect}) {
  if (store.state.comm0.blockNumber) {
    return
  }

  if (!store.state.ether.web3) {
    console.error('::: M[comm0]: no web3')
    return
  }

  const Contract = store.state.ether.web3().eth.Contract
  await store.dispatch('comm0/SET_CONTRACT', new Contract(
    commSkylerAbi, DAPP.CONTRACT_ADDRESS_COMM_SKYLER
  ))

  await store.dispatch('voken/SYNC_IS_AGENT')
  await store.dispatch('comm0/SYNC_IS_PROXY')
  await store.dispatch('comm0/SYNC_STATUS')
  await store.dispatch('comm0/SET_BLOCK_NUMBER', store.state.ether.blockNumber)

  // on: Account Changed
  const provider = await detectEthereumProvider()
  await provider
    .on('accountsChanged', async function (accounts) {
      await store.dispatch('voken/SYNC_IS_AGENT')
      await store.dispatch('comm0/SYNC_IS_PROXY')
      await store.dispatch('comm0/SYNC_STATUS')
      await store.dispatch('comm0/SET_BLOCK_NUMBER', store.state.ether.blockNumber)
    })
}
