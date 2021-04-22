import numbro from 'numbro'
import Web3 from 'web3'
import BigNumber from 'bignumber.js'
import DAPP from '../utils/constants/dapp'
import fnFormat from '~/utils/fnFormat'

export const state = () => ({
  blockNumber: 0,
  contract: null,
  dataContract: null,

  usdPrice: '0',
  issued: '0',
  random: '0',
  summed: '0',

  progressPercent: '0',

  weiMin: '0',
  weiMax: '0',

  account: {
    isAgent: false,

    issued: '0',
    bonuses: '0',
    summed: '0',
    referred: '0',
    rewards: '0',

    vesting: '0',
    available: '0',

  },
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
  SET_DATA_CONTRACT(state, dataContract) {
    state.dataContract = function () {
      return dataContract
    }
  },

  SET_USD_PRICE(state, usdPrice) {
    state.usdPrice = usdPrice
  },

  SET_ISSUED(state, issued) {
    state.issued = issued
    state.summed = new BigNumber(state.issued).plus(state.random).toString()
    state.progressPercent = new BigNumber(issued).dividedBy(DAPP.EARLY_BIRD_SALE2_CAP).multipliedBy(100).toString()
  },
  SET_RANDOM(state, random) {
    state.random = random
    state.summed = new BigNumber(state.issued).plus(state.random).toString()
  },
  SET_WEI_MIN(state, weiMin) {
    state.weiMin = weiMin
  },
  SET_WEI_MAX(state, weiMax) {
    state.weiMax = weiMax
  },

  SET_ACCOUNT(state, account) {
    state.account.isAgent = account.isAgent
    state.account.issued = account.issued
    state.account.bonuses = account.bonuses
    state.account.referred = account.referred
    state.account.rewards = account.rewards
    state.account.vesting = account.vesting

    state.account.summed = (
      new BigNumber(state.account.issued)
        .plus(state.account.bonuses)
        .plus(state.account.rewards)
        .toString()
    )

    state.account.available = (
      new BigNumber(state.account.summed)
        .minus(state.account.vesting)
        .toString()
    )
  },

  // SET_ACCOUNT_ISSUED(state, issued) {
  //   state.account.issued = issued
  //   state.account.summed = (
  //     new BigNumber(state.account.issued)
  //       .plus(state.account.bonuses)
  //       .plus(state.account.rewards)
  //       .toString()
  //   )
  // },
  // SET_ACCOUNT_BONUSES(state, bonuses) {
  //   state.account.bonuses = bonuses
  //   state.account.summed = (
  //     new BigNumber(state.account.issued)
  //       .plus(state.account.bonuses)
  //       .plus(state.account.rewards)
  //       .toString()
  //   )
  // },
  // SET_ACCOUNT_REFERRED(state, referred) {
  //   state.account.referred = referred
  // },
  // SET_ACCOUNT_REWARDS(state, rewards) {
  //   state.account.rewards = new BigNumber(rewards).dividedBy(10 ** 12).toString()
  //   state.account.summed = (
  //     new BigNumber(state.account.issued)
  //       .plus(state.account.bonuses)
  //       .plus(state.account.rewards)
  //       .toString()
  //   )
  // },
  // SET_ACCOUNT_VESTING(state, vesting) {
  //   state.account.vesting = vesting
  //   state.account.available = (
  //     new BigNumber(state.account.summed)
  //       .minus(new BigNumber(state.account.vesting))
  //       .toString()
  //   )
  // },

  SET_IS_AGENT(state, isAgent) {
    state.account.isAgent = isAgent
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

  async SYNC_IS_AGENT({rootState, state, commit}) {
    await state
      .contract().methods.isAgent(rootState.ether.account)
      .call()
      .then(async function (payload) {
        commit('SET_IS_AGENT', payload)
      })
      .catch(error => {
        console.error('::: S[vokenEarlyBirdSale2] SYNC_IS_AGENT', error)
      })
  },

  async SYNC_DATA({rootState, state, commit}) {
    if (!rootState.ether.productionMode) {
      console.error('::: S[vokenEarlyBirdSale2] SYNC_DATA: not production mode')
      return
    }

    await state
      .contract()
      .methods
      .data(rootState.ether.account)
      .call()
      .then(payload => {
        console.log('::: payload:', payload)

        commit('SET_WEI_MIN', payload.weiMin)
        commit('SET_WEI_MAX', payload.weiMax)

        commit('SET_USD_PRICE', payload.vokenPrice)

        commit('SET_ISSUED', payload.totalIssued)
        commit('SET_RANDOM', payload.totalRandom)

        commit('SET_ACCOUNT', {
          isAgent: payload.agent,
          issued: payload.issued,
          bonuses: payload.bonuses,
          referred: payload.referred,
          rewards: payload.rewards,
          vesting: payload.vesting
        })
        // commit('SET_ACCOUNT_ISSUED', payload.issued)
        // commit('SET_ACCOUNT_BONUSES', payload.bonuses)
        // commit('SET_ACCOUNT_REWARDS', payload.rewards)
        // commit('SET_ACCOUNT_REFERRED', payload.referred)
        // commit('SET_ACCOUNT_VESTING', payload.vesting)
      })
      .catch(error => {
        console.error('::: S[vokenEarlyBirdSale2] SYNC_DATA:', error)
      })
  },
}
