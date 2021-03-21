import BigNumber from 'bignumber.js'
import fnFormat from '~/utils/fnFormat'
import vokenAddress from '@voken/address'
import fnEthereum from '~/utils/fnEthereum'

export const state = () => ({
  blockNumber: 0,
  blockNumberStr: '0',

  contract: null,
  dataContract: null,

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
    referrer: fnEthereum.ZERO_ADDRESS,
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

    state.account.available = new BigNumber(state.account.balance).minus(new BigNumber(state.account.vesting)).toString()
    state.account.availableStr = fnFormat.ns2Str(state.account.available)
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

  async SYNC_DATA({rootState, state, commit, dispatch}) {
    if (!rootState.ether.productionMode) {
      console.error('::: S[voken] SYNC_DATA: not production mode')
      return
    }

    await state
      .dataContract().methods.data(rootState.ether.account)
      .call()
      .then(async function (payload) {
        dispatch('ether/SET_BALANCE', payload.etherBalance, {root: true})
        dispatch('ether/SET_USD_PRICE', payload.etherPrice, {root: true})
        commit('SET_USD_PRICE', payload.vokenPrice)

        commit('SET_CAP', payload.cap)
        commit('SET_TOTAL_SUPPLY', payload.totalSupply)
        commit('SET_BURNING_PERMILLE_MIN', payload.burningPermilleMin)
        commit('SET_BURNING_PERMILLE_MAX', payload.burningPermilleMax)

        commit('SET_VOKEN_ADDRESS', payload.vokenInt)

        commit('SET_BALANCE', payload.balance)
        commit('SET_VESTING', payload.vesting)

        commit('SET_IS_BANK', payload.isBank)
        commit('SET_REFERRER', payload.referrer)
      })
      .catch(error => {
        console.error('::: S[voken] SYNC_DATA', error)
      })

    if (rootState.ether.gasPriceSync) {
      dispatch('ether/SYNC_GAS_PRICE', null, {root: true})
    }
  },
}
