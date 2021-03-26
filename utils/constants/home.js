import repo from '~/repo'

const HOST = location.host.split(':')[0]

export default function() {
  switch (repo ? repo : HOST) {
    case 'toolkit':
    case 'toolkit.voken.io':
      return {
        title: 'VOKEN_Toolkit',
        path: '/wallet',
        icon: ['fas', 'tools'],
      }
    case 'early-bird':
    case 'get.voken.io':
    case 'early-bird.voken.io':
      return {
        title: 'VOKEN_Early_Bird_Sale',
        path: '/voken/early-bird',
        icon: ['fas', 'gifts'],
      }
    case 'migrate':
    case 'migrate.voken.io':
      return {
        title: 'VOKEN_Toolkit',
        path: '/voken/migrate',
        icon: ['fas', 'tools'],
      }
    case 'localhost':
      return {
        title: 'VOKEN_Toolkit',
        path: '/wallet',
        icon: ['fas', 'tools'],
      }
    default:
      return {
        title: 'VOKEN_Toolkit',
        path: '/',
        icon: ['fas', 'tools'],
      }
  }
}
