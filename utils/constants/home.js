import repo from '~/repo'

const HOST = location.host.split(':')[0]

console.log('::: home.js HOST:', HOST)

const HOMES = {
  'default': {
    title: 'VOKEN_Toolkit',
    path: '/',
    icon: ['fas', 'tools'],
  },

  'localhost': {
    title: 'VOKEN_Toolkit',
    path: '/voken/early-bird',
    icon: ['fas', 'tools'],
  },

  // Toolkit
  'toolkit': {
    title: 'VOKEN_Toolkit',
    path: '/wallet',
    icon: ['fas', 'tools'],
  },
  'toolkit.voken.io': {
    title: 'VOKEN_Toolkit',
    path: '/wallet',
    icon: ['fas', 'tools'],
  },

  // EarlyBird
  'early-bird': {
    title: 'VOKEN_Early_Bird_Sale',
    path: '/voken/early-bird',
    icon: ['fas', 'gifts'],
  },
  'get.voken.io': {
    title: 'VOKEN_Early_Bird_Sale',
    path: '/voken/early-bird',
    icon: ['fas', 'gifts'],
  },
  'early-bird.voken.io': {
    title: 'VOKEN_Early_Bird_Sale',
    path: '/voken/early-bird',
    icon: ['fas', 'gifts'],
  },

  // Migrate
  'migrate': {
    title: 'VOKEN_Toolkit',
    path: '/voken/migrate',
    icon: ['fas', 'tools'],
  },
  'migrate.voken.io': {
    title: 'VOKEN_Toolkit',
    path: '/voken/migrate',
    icon: ['fas', 'tools'],
  },
}

const HOME = HOMES[HOST]

export default function() {
  if (repo) {
    return HOMES[repo]
  }

  return HOME ? HOME : HOMES['default']
}
