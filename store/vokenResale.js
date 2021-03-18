import fnFormat from '~/utils/fnFormat'

export const state = () => ({
  blockNumber: 0,
  blockNumberStr: '0',

  contract: null,
})


export const mutations = {
  SET_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
    state.blockNumberStr = fnFormat.ns2Str(blockNumber, 0)
  },
  SET_CONTRACT(state, contract) {
    state.contract = function () {
      return contract
    }
  },
}


export const actions = {
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
}
