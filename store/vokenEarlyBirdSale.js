import numbro from 'numbro'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import DAPP from '../utils/constants/dapp'
import fnFormat from '~/utils/fnFormat'

export const state = () => ({
  blockNumber: 0,
  blockNumberStr: '0',
  contract: null,

  usdPrice: '0',
  usdPriceStr: '0',
  usdPriceObj: {
    d: '0',
    f: null,
  },

  issued: '0',
  issuedStr: '0',
  issuedObj: {
    d: '0',
    f: null,
  },

  bonuses: '0',
  bonusesStr: '0',
  bonusesObj: {
    d: '0',
    f: null,
  },

  volume: '0',
  volumeStr: '0',
  volumeObj: {
    d: '0',
    f: null,
  },

  weiMin: '0',
  weiMinStr: '0',
  weiMax: '0',
  weiMaxStr: '0',

  account: {
    issued: '0',
    issuedStr: '0',
    issuedObj: {
      d: '0',
      f: null,
    },

    bonuses: '0',
    bonusesStr: '0',
    bonusesObj: {
      d: '0',
      f: null,
    },

    volume: '0',
    volumeStr: '0',
    volumeObj: {
      d: '0',
      f: null,
    },

    voken: '0',
    vokenAddress: null,
    referrer: null,
    referrerVoken: '0',
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

  SET_USD_PRICE(state, usdPrice) {
    state.usdPrice = usdPrice
    state.usdPriceStr = fnFormat.ns2Str(usdPrice, 6)
    state.usdPriceObj = fnFormat.ns2Obj(state.usdPriceStr)
  },


  SET_ISSUED(state, issued) {
    state.issued = issued
    state.issuedStr = fnFormat.ns2Str(issued)
    state.issuedObj = fnFormat.ns2Obj(state.issuedStr)

    state.volume = new BigNumber(state.issued).plus(state.bonuses).toString()
    state.volumeStr = fnFormat.ns2Str(state.volume)
    state.volumeObj = fnFormat.ns2Obj(state.volumeStr)
  },
  SET_BONUSES(state, bonuses) {
    state.bonuses = bonuses
    state.bonusesStr = fnFormat.ns2Str(bonuses)
    state.bonusesObj = fnFormat.ns2Obj(state.bonusesStr)

    state.volume = new BigNumber(state.issued).plus(state.bonuses).toString()
    state.volumeStr = fnFormat.ns2Str(state.volume)
    state.volumeObj = fnFormat.ns2Obj(state.volumeStr)
  },
  SET_WEI_MIN(state, weiMin) {
    state.weiMin = weiMin
    state.weiMinStr = numbro(Web3.utils.fromWei(weiMin, 'ether')).format({
      thousandSeparated: true,
      mantissa: 1
    })
  },
  SET_WEI_MAX(state, weiMax) {
    state.weiMax = weiMax
    state.weiMaxStr = numbro(Web3.utils.fromWei(weiMax, 'ether')).format({
      thousandSeparated: true,
      mantissa: 1
    })
  },

  SET_ACCOUNT(state, account) {
    state.account = account
  },
}


export const actions = {
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
  // async SET_USD_PRICE({commit}, usdPrice) {
  //   commit('SET_USD_PRICE', usdPrice)
  // },
  // async SET_ISSUED({commit}, issued) {
  //   commit('SET_ISSUED', issued)
  // },
  // async SET_BONUSES({commit}, bonuses) {
  //   commit('SET_BONUSES', bonuses)
  // },
  // async SET_WEI_MIN({commit}, weiMin) {
  //   commit('SET_WEI_MIN', weiMin)
  // },
  // async SET_WEI_MAX({commit}, weiMax) {
  //   commit('SET_WEI_MAX', weiMax)
  // },
  async SYNC_STATUS_NOW({rootState, state, commit, dispatch}, blockNumber = 0) {
    commit('SET_BLOCK_NUMBER', blockNumber)

    await state
      .contract()
      .methods
      .status()
      .call()
      .then(payload => {
        dispatch('ether/SET_USD_PRICE', payload.etherUSD, {root: true})
        dispatch('voken/SET_BLOCK_NUMBER', blockNumber, {root: true})
        dispatch('voken/SET_CAP', payload.vokenCap, {root: true})
        dispatch('voken/SET_TOTAL_SUPPLY', payload.vokenTotalSupply, {root: true})

        commit('SET_USD_PRICE', payload.vokenUSD)
        commit('SET_ISSUED', payload.vokenIssued)
        commit('SET_BONUSES', payload.vokenBonuses)
        commit('SET_WEI_MIN', payload.weiMin)
        commit('SET_WEI_MAX', payload.weiMax)
      })
      .catch(error => {
        console.error('::: M[vokenEarlyBirdSale] status:', error)
      })

    await state
      .contract()
      .methods
      .getAccountStatus(rootState.ether.account)
      .call()
      .then(payload => {
        dispatch('voken/SET_BALANCE', payload.vokenBalance, {root: true})


        let status = {
          issued: payload.issued,
          bonuses: payload.bonuses,
          volume: payload.volume,

          etherBalance: payload.etherBalance,
          vokenBalance: payload.vokenBalance,

          voken: payload.voken,
          // vokenAddress: vokenAddress.fromBNString(payload.voken),
          referrer: payload.referrer,
          referrerVoken: payload.referrerVoken
        }

        console.log('getAccountStatus:', status)

        // this._commit('SET_ACCOUNT_STATUS', status)
      })
      .catch(error => {
        console.error('::: M[vokenEarlyBirdSale] getAccountStatus:', error)
      })
  },


  async SYNC_STATUS({rootState, state, commit, dispatch}, blockNumber = 0, forceUpdate = false) {
    if (!forceUpdate && blockNumber < state.blockNumber + DAPP.VOKEN_TB_EARLY_BIRD_SALE_INTERVAL_BLOCK_DIFF) {
      return
    }

    dispatch('SYNC_STATUS_NOW', blockNumber)
  },
}
