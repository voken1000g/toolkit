export const state = () => ({
  vokenAddress: '',
})

export const mutations = {
  SET_VOKEN_ADDRESS(state, vokenAddress) {
    state.vokenAddress = vokenAddress
  }
}

export const actions = {
  SET_VOKEN_ADDRESS({ commit }, vokenAddress) {
    if (vokenAddress) {
      commit('SET_VOKEN_ADDRESS', vokenAddress)
    }
  }
}
