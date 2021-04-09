export const state = () => ({
  contract: null,
  pairContract: null,
})


export const mutations = {
  SET_CONTRACT(state, contract) {
    state.contract = function () {
      return contract
    }
  },
  SET_PAIR_CONTRACT(state, pairContract) {
    state.pairContract = function () {
      return pairContract
    }
  },
}


export const actions = {
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
  async SET_PAIR_CONTRACT({commit}, pairContract) {
    commit('SET_PAIR_CONTRACT', pairContract)
  },
}
