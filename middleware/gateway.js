import nuxtStorage from 'nuxt-storage'
import vokenAddress from '@voken/address'
import locales from "~/utils/constants/locales"
import fnMulti from '~/utils/fnMulti'


export default async function ({app, route, store, redirect}) {
  const cachedKey = 'referral'
  const referral = route.query.r ? route.query.r : nuxtStorage.localStorage.getData(cachedKey)
  const valid = referral ? vokenAddress.isAddress(referral) : false

  if (referral && !valid) {
    nuxtStorage.localStorage.removeItem(cachedKey)
  }

  // updated cache
  if (valid) {
    console.warn('::: M[gateway] Referral Voken Wallet Address:', referral)
    nuxtStorage.localStorage.setData(cachedKey, referral, 90, 'd')
    await store.dispatch('referral/SET_VOKEN_ADDRESS', referral)
  }

  // may redirect
  let path = route.path
  locales.forEach(function (locale) {
    path = path.replace(new RegExp('(^\/' + locale.code + '[\/]?)'), '/')
  })
  if (path === '/') {
    const home = fnMulti.home()
    if (home) {
      console.warn('::: M[gateway] redirect to home:', home)
      redirect(app.localePath(home), route.query)
      return null
    }
  }
}
