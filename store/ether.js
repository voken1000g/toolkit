import Web3 from 'web3'
import DAPP from '~/utils/constants/dapp'
import fnFormat from '~/utils/fnFormat'


export const state = () => ({
  productionMode: false,

  web3: null,
  chainId: null,
  blockNumber: 0,
  blockNumberStr: '0',

  usdPrice: '0',
  usdPriceStr: '0',
  usdPriceObj: {
    d: '0',
    f: null,
  },

  account: null,

  balance: '0',
  balanceStr: '0',
  balanceObj: {
    d: '0',
    f: null,
  },
})


export const mutations = {
  SET_WEB3(state, web3) {
    state.web3 = function () {
      return web3
    }
  },
  SET_CHAIN_ID(state, chainId) {
    state.chainId = chainId
    state.productionMode = chainId === DAPP.PROD_CHAIN_ID
  },
  SET_BLOCK_NUMBER(state, blockNumber) {
    state.blockNumber = blockNumber
    state.blockNumberStr = fnFormat.ns2Str(blockNumber, 0)
  },
  SET_USD_PRICE(state, usdPrice) {
    state.usdPrice = usdPrice
    state.usdPriceStr = fnFormat.ns2Str(usdPrice, 6)
    state.usdPriceObj = fnFormat.ns2Obj(state.usdPriceStr)
  },
  SET_ACCOUNT(state, account) {
    state.account = state.web3().utils.toChecksumAddress(account)
  },
  SET_BALANCE(state, balance) {
    state.balance = balance
    state.balanceStr = Web3.utils.fromWei(balance, 'ether')
    state.balanceObj = fnFormat.ns2Obj(state.balanceStr)
  },
}


export const actions = {
  async SET_WEB3({commit}, web3) {
    commit('SET_WEB3', web3)
  },
  async SET_CHAIN_ID({commit}, chainId) {
    commit('SET_CHAIN_ID', parseInt(chainId))
  },
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_USD_PRICE({commit}, usdPrice) {
    commit('SET_USD_PRICE', usdPrice)
  },
  async SET_ACCOUNT({commit}, account) {
    commit('SET_ACCOUNT', account)
  },
  async SET_BALANCE({commit}, balance) {
    commit('SET_BALANCE', balance)
  },
}
