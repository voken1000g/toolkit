import numbro from 'numbro'
// import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import DAPP from '../utils/constants/dapp'
import fnFormat from '~/utils/fnFormat'

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

  summed: '0',
  summedStr: '0',
  summedObj: {
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

    summed: '0',
    summedStr: '0',
    summedObj: {
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

    referred: '0',
    referredStr: '0',
    referredObj: {
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


  SET_ISSUED(state, issued) {
    state.issued = issued
    state.issuedStr = fnFormat.ns2Str(issued)
    state.issuedObj = fnFormat.ns2Obj(state.issuedStr)

    state.summed = new BigNumber(state.issued).plus(state.bonuses).toString()
    state.summedStr = fnFormat.ns2Str(state.summed)
    state.summedObj = fnFormat.ns2Obj(state.summedStr)
  },
  SET_BONUSES(state, bonuses) {
    state.bonuses = bonuses
    state.bonusesStr = fnFormat.ns2Str(bonuses)
    state.bonusesObj = fnFormat.ns2Obj(state.bonusesStr)

    state.summed = new BigNumber(state.issued).plus(state.bonuses).toString()
    state.summedStr = fnFormat.ns2Str(state.summed)
    state.summedObj = fnFormat.ns2Obj(state.summedStr)
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

    state.account.summed = new BigNumber(state.account.issued).plus(state.account.bonuses).toString()
    state.account.summedStr = fnFormat.ns2Str(state.account.summed)
    state.account.summedObj = fnFormat.ns2Obj(state.account.summedStr)
  },
  SET_ACCOUNT_BONUSES(state, bonuses) {
    state.account.bonuses = bonuses
    state.account.bonusesStr = fnFormat.ns2Str(bonuses)
    state.account.bonusesObj = fnFormat.ns2Obj(state.account.bonusesStr)

    state.account.summed = new BigNumber(state.account.issued).plus(state.account.bonuses).toString()
    state.account.summedStr = fnFormat.ns2Str(state.account.summed)
    state.account.summedObj = fnFormat.ns2Obj(state.account.summedStr)
  },
  SET_ACCOUNT_VESTING(state, vesting) {
    state.account.vesting = vesting
    state.account.vestingStr = fnFormat.ns2Str(vesting)
    state.account.vestingObj = fnFormat.ns2Obj(state.account.vestingStr)

    state.account.available = new BigNumber(state.account.summed).minus(new BigNumber(state.account.vesting)).toString()
    state.account.availableStr = fnFormat.ns2Str(state.account.available)
    state.account.availableObj = fnFormat.ns2Obj(state.account.availableStr)
  },

  SET_ACCOUNT_REFERRED(state, volume) {
    state.account.referred = volume
    state.account.referredStr = Web3.utils.fromWei(volume, 'ether')
    state.account.referredObj = fnFormat.ns2Obj(state.account.referredStr)
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

  async SYNC_DATA({rootState, state, commit}) {
    if (!rootState.ether.productionMode) {
      console.error('::: M[vokenEarlyBirdSale] SYNC_DATA: not production mode')
      return
    }

    await state
      .dataContract()
      .methods
      .data(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_WEI_MIN', payload.weiMin)
        commit('SET_WEI_MAX', payload.weiMax)

        commit('SET_USD_PRICE', payload.vokenPrice)

        commit('SET_ISSUED', payload.totalIssued)
        commit('SET_BONUSES', payload.totalBonuses)

        commit('SET_ACCOUNT_ISSUED', payload.issued)
        commit('SET_ACCOUNT_BONUSES', payload.bonuses)
        commit('SET_ACCOUNT_VESTING', payload.vesting)

        commit('SET_ACCOUNT_REFERRED', payload.referred)
      })
      .catch(error => {
        console.error('::: M[vokenEarlyBirdSale] SYNC_DATA:', error)
      })
  },

  // async SYNC_STATUS({rootState, state, commit}) {
  //   if (!rootState.ether.productionMode) {
  //     console.error('::: M[vokenEarlyBirdSale] SYNC_STATUS: not production mode')
  //     return
  //   }
  //
  //   await state
  //     .contract()
  //     .methods
  //     .status()
  //     .call()
  //     .then(payload => {
  //       commit('SET_USD_PRICE', payload.vokenUSD)
  //       commit('SET_ISSUED', payload.vokenIssued)
  //       commit('SET_BONUSES', payload.vokenBonuses)
  //
  //       commit('SET_WEI_MIN', payload.weiMin)
  //       commit('SET_WEI_MAX', payload.weiMax)
  //     })
  //     .catch(error => {
  //       console.error('::: M[vokenEarlyBirdSale] status:', error)
  //     })
  // },
  //
  // async SYNC_ACCOUNT({rootState, state, commit, dispatch}) {
  //   if (!rootState.ether.productionMode) {
  //     console.error('::: M[vokenEarlyBirdSale] SYNC_ACCOUNT: not production mode')
  //     return
  //   }
  //
  //   await state
  //     .contract()
  //     .methods
  //     .getAccountStatus(rootState.ether.account)
  //     .call()
  //     .then(payload => {
  //       commit('SET_ACCOUNT_ISSUED', payload.issued)
  //       commit('SET_ACCOUNT_BONUSES', payload.bonuses)
  //       commit('SET_ACCOUNT_VOLUME', payload.volume)
  //
  //       dispatch('ether/SET_BALANCE', payload.etherBalance, {root: true})
  //
  //       // let status = {
  //       //   // issued: payload.issued,
  //       //   // bonuses: payload.bonuses,
  //       //   volume: payload.volume,
  //       //
  //       //   // voken: payload.voken,
  //       //   // vokenAddress: vokenAddress.fromBNString(payload.voken),
  //       //   // referrer: payload.referrer,
  //       //   // referrerVoken: payload.referrerVoken
  //       // }
  //       //
  //       // console.log('getAccountStatus:', status)
  //     })
  //     .catch(error => {
  //       console.error('::: M[vokenEarlyBirdSale] getAccountStatus:', error)
  //     })
  // },
}
