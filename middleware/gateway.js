import nuxtStorage from 'nuxt-storage'
import vokenAddress from '@voken/address'
import locales from "~/utils/constants/locales"
import home from '~/utils/constants/home'


export default async function ({app, route, store, redirect}) {
  const cachedKey = 'referral'
  const referral = route.query.r ? route.query.r : nuxtStorage.localStorage.getData(cachedKey)
  const valid = referral ? vokenAddress.isAddress(referral) : false

  if (referral && !valid) {
    nuxtStorage.localStorage.removeItem(cachedKey)
  }

  // updated cache
  if (valid) {
    // console.warn('::: M[gateway] Referral Voken Wallet Address:', referral)
    nuxtStorage.localStorage.setData(cachedKey, referral, 90, 'd')
    await store.dispatch('referral/SET_VOKEN_ADDRESS', referral)
  }

  // may redirect
  let path = route.path
  locales.forEach(function (locale) {
    path = path.replace(new RegExp('(^\/' + locale.code + '[\/]?)'), '/')
  })
  const host = location.host.split(':')[0]
  if ('localhost' === host || 'voken1000g.github.io' === host) {
    const baseUrls = ['toolkit', 'early\-bird', 'upgrade']
    baseUrls.forEach(function (baseUrl) {
      console.log('::: M[gateway] baseUrl:', baseUrl)
      path = path.replace(new RegExp('(^\/' + baseUrl + '[\/]?)'), '/')
    })
  }
  if (path === '/') {
    const HOME = home()
    console.warn('::: M[gateway] redirect to home:', HOME.path)
    redirect(app.localePath(HOME.path), route.query)
  }
}
