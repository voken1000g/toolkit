export const state = () => ({
  menuMobile: false,
  languageMenu: false,
  flyoutWallet: false,
  flyoutMessenger: false,
  flyoutTools: false,
  flyoutUser: false
})


export const mutations = {
  TOGGLE_MENU_MOBILE(state) {
    state.menuMobile = !state.menuMobile
    state.languageMenu = false
    state.flyoutWallet = false
    state.flyoutMessenger = false
    state.flyoutTools = false
    state.flyoutUser = false
  },
  TOGGLE_LANGUAGE_MENU(state) {
    state.menuMobile = false
    state.languageMenu = !state.languageMenu
    state.flyoutWallet = false
    state.flyoutMessenger = false
    state.flyoutTools = false
    state.flyoutUser = false
  },
  TOGGLE_FLYOUT_WALLET(state) {
    state.menuMobile = false
    state.languageMenu = false
    state.flyoutWallet = !state.flyoutWallet
    state.flyoutMessenger = false
    state.flyoutTools = false
    state.flyoutUser = false
  },
  TOGGLE_FLYOUT_MESSENGER(state) {
    state.menuMobile = false
    state.languageMenu = false
    state.flyoutWallet = false
    state.flyoutMessenger = !state.flyoutMessenger
    state.flyoutTools = false
    state.flyoutUser = false
  },
  TOGGLE_FLYOUT_TOOLS(state) {
    state.menuMobile = false
    state.languageMenu = false
    state.flyoutWallet = false
    state.flyoutMessenger = false
    state.flyoutTools = !state.flyoutTools
    state.flyoutUser = false
  },
  TOGGLE_FLYOUT_USER(state) {
    state.menuMobile = false
    state.languageMenu = false
    state.flyoutWallet = false
    state.flyoutMessenger = false
    state.flyoutTools = false
    state.flyoutUser = !state.flyoutUser
  },

  HIDE_ALL(state) {
    state.menuMobile = false
    state.languageMenu = false
    state.flyoutWallet = false
    state.flyoutMessenger = false
    state.flyoutTools = false
    state.flyoutUser = false
  },
}


export const actions = {
  TOGGLE_MENU_MOBILE({ commit }) {
    commit('TOGGLE_MENU_MOBILE')
  },
  TOGGLE_LANGUAGE_MENU({ commit }) {
    commit('TOGGLE_LANGUAGE_MENU')
  },
  TOGGLE_FLYOUT_WALLET({ commit }) {
    commit('TOGGLE_FLYOUT_WALLET')
  },
  TOGGLE_FLYOUT_MESSENGER({ commit }) {
    commit('TOGGLE_FLYOUT_MESSENGER')
  },
  TOGGLE_FLYOUT_TOOLS({ commit }) {
    commit('TOGGLE_FLYOUT_TOOLS')
  },
  TOGGLE_FLYOUT_USER({ commit }) {
    commit('TOGGLE_FLYOUT_USER')
  },
  HIDE_FLYOUT_USER({ commit }) {
    commit('HIDE_ALL')
  },
  HIDE_ALL({ commit }) {
    commit('HIDE_ALL')
  },
}
