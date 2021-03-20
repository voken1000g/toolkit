const HOMES = {
  'default': {
    title: 'VOKEN_Toolkit',
    path: '/wallet',
    icon: ['fas', 'tools'],
  },

  'localhost': {
    title: 'VOKEN_Toolkit',
    path: '/wallet',
    icon: ['fas', 'tools'],
  },

  // Toolkit
  'toolkit.voken.io': {
    title: 'VOKEN_Toolkit',
    path: '/wallet',
    icon: ['fas', 'tools'],
  },

  // EarlyBird
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
  'migrate.voken.io': {
    title: 'VOKEN_Toolkit',
    path: '/voken/migrate',
    icon: ['fas', 'tools'],
  },
}

const HOME = HOMES[location.host.split(':')[0]]

export default function() {
  return HOME ? HOME : HOMES['default']
}
