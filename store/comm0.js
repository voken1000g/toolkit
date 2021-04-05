import fnEthereum from '~/utils/fnEthereum'

export const state = () => ({
  blockNumber: 0,

  contract: null,

  isProxy: false,
  credit: '0',
  issued: '0',
})


export const mutations = {
  SET_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
  },
  SET_CONTRACT(state, contract) {
    state.contract = function () {
      return contract
    }
  },
  SET_IS_PROXY(state, isProxy) {
    state.isProxy = isProxy
  },
  SET_CREDIT(state, credit) {
    state.credit = credit
  },
  SET_ISSUED(state, issued) {
    state.issued = issued
  },
}


export const actions = {
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
  async SET_CREDIT({commit}, credit) {
    commit('SET_CREDIT', credit)
  },
  async SET_ISSUED({commit}, issued) {
    commit('SET_ISSUED', issued)
  },

  async SYNC_STATUS({rootState, state, commit}) {
    if (!rootState.ether.productionMode) {
      console.error('::: S[comm0] SYNC_STATUS: not production mode')
      return
    }

    await state
      .contract().methods.status(fnEthereum.ZERO_ADDRESS)
      .call()
      .then(async function (payload) {
        commit('SET_CREDIT', payload.credit)
        commit('SET_ISSUED', payload.issued)
      })
      .catch(error => {
        console.error('::: S[comm0] SYNC_STATUS', error)
      })
  },

  async SYNC_IS_PROXY({rootState, state, commit}) {
    if (!rootState.ether.productionMode) {
      console.error('::: S[comm0] SYNC_IS_PROXY: not production mode')
      return
    }

    await state
      .contract().methods.isProxy(rootState.ether.account)
      .call()
      .then(async function (isProxy) {
        commit('SET_IS_PROXY', isProxy)
      })
      .catch(error => {
        console.error('::: S[comm0] SYNC_IS_PROXY', error)
      })
  },
}
