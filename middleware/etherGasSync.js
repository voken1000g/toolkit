export default async function ({store}) {
  await store.dispatch('ether/SET_GAS_PRICE_SYNC', true)
}
