export default function () {
  const domain = location.host.split(':')[0]
  if ('localhost' === domain) {
    return '/wallet'
  }

  if ('get.voken.io' === domain || 'early-bird.voken.io' === domain) {
    return '/voken/early-bird'
  }

  if ('migrate.voken.io' === domain) {
    return '/voken/migrate'
  }

  return null
}
