import DAPP from '../utils/constants/dapp'
import fnFormat from '~/utils/fnFormat'

export const state = () => ({
  blockNumber: 0,
  blockNumberStr: '0',
  contract: null,

  cap: '0',
  capStr: '0',
  capObj: {
    d: '0',
    f: null,
  },

  totalSupply: '0',
  totalSupplyStr: '0',
  totalSupplyObj: {
    d: '0',
    f: null,
  },

  balance: '0',
  balanceStr: '0',
  balanceObj: {
    d: '0',
    f: null,
  },
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
  SET_CAP(state, cap) {
    state.cap = cap
    state.capStr = fnFormat.ns2Str(cap)
    state.capObj = fnFormat.ns2Obj(state.capStr)
  },
  SET_TOTAL_SUPPLY(state, totalSupply) {
    state.totalSupply = totalSupply
    state.totalSupplyStr = fnFormat.ns2Str(totalSupply)
    state.totalSupplyObj = fnFormat.ns2Obj(state.totalSupplyStr)

  },
  SET_BALANCE(state, balance) {
    state.balance = balance
    state.balanceStr = fnFormat.ns2Str(balance)
    state.balanceObj = fnFormat.ns2Obj(state.balanceStr)
  },
}


export const actions = {
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
  async SET_CAP({commit}, cap) {
    commit('SET_CAP', cap)
  },
  async SET_TOTAL_SUPPLY({commit}, totalSupply) {
    commit('SET_TOTAL_SUPPLY', totalSupply)
  },
  async SET_BALANCE({commit}, balance) {
    commit('SET_BALANCE', balance)
  },
  async SYNC_STATUS_NOW({rootState, state, commit}, blockNumber = 0) {
    commit('SET_BLOCK_NUMBER', blockNumber)

    await state
      .contract()
      .methods
      .balanceOf(rootState.ether.account)
      .call()
      .then(async function (balance) {
        commit('SET_BALANCE', balance)
      })
      .catch(error => {
        console.error('::: M[vokenTb] SYNC_BALANCE', error)
      })
  },
  async SYNC_STATUS({rootState, state, commit, dispatch}, blockNumber = 0) {
    if (blockNumber < state.blockNumber + DAPP.VOKEN_TB_INTERVAL_BLOCK_DIFF) {
      return
    }

    dispatch('SYNC_BALANCE_NOW', blockNumber)
  },
}
