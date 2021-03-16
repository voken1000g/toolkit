import nuxtStorage from 'nuxt-storage'
import vokenAddress from '@voken/address'


export default async function ({route, store}) {
  const cachedKey = 'referral'
  const referral = route.query.r ? route.query.r : nuxtStorage.localStorage.getData(cachedKey)
  const valid = referral ? vokenAddress.isAddress(referral) : false

  if (referral && !valid) {
    nuxtStorage.localStorage.removeItem(cachedKey)
    return
    // let query = Object.assign({}, route.query)
    // delete query.r
    // redirect(route.path, query)
  }

  // updated cache
  if (valid) {
    nuxtStorage.localStorage.setData(cachedKey, referral, 90, 'd')
    await store.dispatch('referral/SET_VOKEN_ADDRESS', referral)
  }
}
