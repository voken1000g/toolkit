import DAPP from '../utils/constants/dapp'
import fnFormat from '~/utils/fnFormat'
import vokenAddress from '@voken/address'

export const state = () => ({
  blockNumber: 0,
  blockNumberStr: '0',

  contract: null,
  dataContract: null,
  accountDataContract: null,

  usdPrice: '0',
  usdPriceStr: '0',
  usdPriceObj: {
    d: '0',
    f: null,
  },

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

  burningPermilleMin: '0',
  burningPermilleMinStr: '0',
  burningPermilleMinObj: {
    d: '0',
    f: null,
  },

  burningPermilleMax: '0',
  burningPermilleMaxStr: '0',
  burningPermilleMaxObj: {
    d: '0',
    f: null,
  },

  account: {
    balance: '0',
    balanceStr: '0',
    balanceObj: {
      d: '0',
      f: null,
    },

    vesting: '0',
    vestingStr: '0',
    vestingObj: {
      d: '0',
      f: null,
    },

    available: '0',
    availableStr: '0',
    availableObj: {
      d: '0',
      f: null,
    },

    vokenInt: '0',
    vokenAddress: '',
    isBank: false,
    referrer: '',
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
  SET_DATA_CONTRACT(state, dataContract) {
    state.dataContract = function () {
      return dataContract
    }
  },
  SET_ACCOUNT_DATA_CONTRACT(state, accountDataContract) {
    state.accountDataContract = function () {
      return accountDataContract
    }
  },
  SET_USD_PRICE(state, usdPrice) {
    state.usdPrice = usdPrice
    state.usdPriceStr = fnFormat.ns2Str(usdPrice, 6)
    state.usdPriceObj = fnFormat.ns2Obj(state.usdPriceStr)
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
  SET_BURNING_PERMILLE_MIN(state, burningPermilleMin) {
    state.burningPermilleMin = burningPermilleMin
    state.burningPermilleMinStr = fnFormat.ns2Str(burningPermilleMin, 1)
    state.burningPermilleMinObj = fnFormat.ns2Obj(state.burningPermilleMinStr)
  },
  SET_BURNING_PERMILLE_MAX(state, burningPermilleMax) {
    state.burningPermilleMax = burningPermilleMax
    state.burningPermilleMaxStr = fnFormat.ns2Str(burningPermilleMax, 1)
    state.burningPermilleMaxObj = fnFormat.ns2Obj(state.burningPermilleMaxStr)
  },

  // Account
  SET_BALANCE(state, balance) {
    state.account.balance = balance
    state.account.balanceStr = fnFormat.ns2Str(balance)
    state.account.balanceObj = fnFormat.ns2Obj(state.account.balanceStr)
  },
  SET_VESTING(state, vesting) {
    state.account.vesting = vesting
    state.account.vestingStr = fnFormat.ns2Str(vesting)
    state.account.vestingObj = fnFormat.ns2Obj(state.account.vestingStr)
  },
  SET_AVAILABLE(state, available) {
    state.account.available = available
    state.account.availableStr = fnFormat.ns2Str(available)
    state.account.availableObj = fnFormat.ns2Obj(state.account.availableStr)
  },
  SET_VOKEN_ADDRESS(state, vokenInt) {
    state.account.vokenInt = vokenInt
    state.account.vokenAddress = vokenAddress.fromBNString(vokenInt)
  },
  SET_IS_BANK(state, isBank) {
    state.account.isBank = isBank
  },
  SET_REFERRER(state, referrer) {
    state.account.referrer = referrer
  },
}


export const actions = {
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
  async SET_DATA_CONTRACT({commit}, dataContract) {
    commit('SET_DATA_CONTRACT', dataContract)
  },
  async SET_ACCOUNT_DATA_CONTRACT({commit}, accountDataContract) {
    commit('SET_ACCOUNT_DATA_CONTRACT', accountDataContract)
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
  async SET_VESTING({commit}, vesting) {
    commit('SET_VESTING', vesting)
  },
  async SET_AVAILABLE({commit}, available) {
    commit('SET_VESTING', available)
  },

  async SYNC_DATA({state, commit, dispatch}) {
    await state
      .dataContract().methods.data()
      .call()
      .then(async function (payload) {
        commit('SET_BURNING_PERMILLE_MIN', payload.burningPermilleMin)
        commit('SET_BURNING_PERMILLE_MAX', payload.burningPermilleMax)
        commit('SET_CAP', payload.cap)
        commit('SET_TOTAL_SUPPLY', payload.totalSupply)
        commit('SET_USD_PRICE', payload.vokenPrice)

        dispatch('ether/SET_USD_PRICE', payload.etherPrice, {root: true})
      })
      .catch(error => {
        console.error('::: M[voken] SYNC_DATA', error)
      })
  },

  async SYNC_ACCOUNT({rootState, state, commit, dispatch}) {
    await state
      .accountDataContract().methods.query(rootState.ether.account)
      .call()
      .then(async function (payload) {
        commit('SET_BALANCE', payload.balance)
        commit('SET_VESTING', payload.vesting)
        commit('SET_AVAILABLE', payload.available)
        commit('SET_VOKEN_ADDRESS', payload.voken)
        commit('SET_IS_BANK', payload.isBank)
        commit('SET_REFERRER', payload.referrer)
      })
      .catch(error => {
        console.error('::: M[voken] SYNC_ACCOUNT_DATA', error)
      })
  },
}
