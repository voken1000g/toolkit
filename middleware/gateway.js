import nuxtStorage from 'nuxt-storage'
import vokenAddress from '@voken/address'
import locales from '~/utils/constants/locales'

const target = function (host, path = '/', protocol = 'https:') {
  return protocol + '//' + host + path
}

export default async function ({app, route, store, redirect}) {
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

  // redirect
  let path = route.path
  locales.forEach(function(locale) {
    path = path.replace(new RegExp('(^\/' + locale.code + '\/)'), '/')
  })
  if (path === '/') {
    if ('localhost:3000' === location.host) {
      const to = target('sample.google.com', '/')
      console.warn('::: M[gateway], should redirect to:', to)

      // TODO:
      // redirect(to, route.query)
    }

    if ('get.voken.io' === location.host || 'early-bird.voken.io' === location.host) {
      redirect(app.localePath('/voken/early-bird'), route.query)
      return null
    }
  }
}
