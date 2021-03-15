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


  SET_ACCOUNT_ISSUED(state, issued) {
    state.account.issued = issued
    state.account.issuedStr = fnFormat.ns2Str(issued)
    state.account.issuedObj = fnFormat.ns2Obj(state.account.issuedStr)

    state.account.volume = new BigNumber(state.account.issued).plus(state.account.bonuses).toString()
    state.account.volumeStr = fnFormat.ns2Str(state.account.volume)
    state.account.volumeObj = fnFormat.ns2Obj(state.account.volumeStr)
  },
  SET_ACCOUNT_BONUSES(state, bonuses) {
    state.account.bonuses = bonuses
    state.account.bonusesStr = fnFormat.ns2Str(bonuses)
    state.account.bonusesObj = fnFormat.ns2Obj(state.account.bonusesStr)

    state.account.volume = new BigNumber(state.account.issued).plus(state.account.bonuses).toString()
    state.account.volumeStr = fnFormat.ns2Str(state.account.volume)
    state.account.volumeObj = fnFormat.ns2Obj(state.account.volumeStr)
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


  async SYNC_STATUS({rootState, state, commit}) {
    await state
      .contract()
      .methods
      .status()
      .call()
      .then(payload => {
        commit('SET_USD_PRICE', payload.vokenUSD)
        commit('SET_ISSUED', payload.vokenIssued)
        commit('SET_BONUSES', payload.vokenBonuses)
        commit('SET_WEI_MIN', payload.weiMin)
        commit('SET_WEI_MAX', payload.weiMax)
      })
      .catch(error => {
        console.error('::: M[vokenEarlyBirdSale] status:', error)
      })
  },

  async SYNC_ACCOUNT({rootState, state, commit}) {
    await state
      .contract()
      .methods
      .getAccountStatus(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_ACCOUNT_ISSUED', payload.issued)
        commit('SET_ACCOUNT_BONUSES', payload.bonuses)
        // let status = {
        //   // issued: payload.issued,
        //   // bonuses: payload.bonuses,
        //   volume: payload.volume,
        //
        //   // voken: payload.voken,
        //   // vokenAddress: vokenAddress.fromBNString(payload.voken),
        //   // referrer: payload.referrer,
        //   // referrerVoken: payload.referrerVoken
        // }
        //
        // console.log('getAccountStatus:', status)
      })
      .catch(error => {
        console.error('::: M[vokenEarlyBirdSale] getAccountStatus:', error)
      })
  },
}
