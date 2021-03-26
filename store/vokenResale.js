import BigNumber from "bignumber.js"
import fnFormat from '~/utils/fnFormat'
import numbro from "numbro";

export const state = () => ({
  blockNumber: 0,
  blockNumberStr: '0',

  contract: null,

  status: {
    deadline: 0,

    usdAudit: '0',
    usdAuditStr: '0',
    usdAuditObj: {
      d: '0',
      f: null,
    },

    usdClaimed: '0',
    usdClaimedStr: '0',
    usdClaimedObj: {
      d: '0',
      f: null,
    },

    usdReceived: '0',
    usdReceivedStr: '0',
    usdReceivedObj: {
      d: '0',
      f: null,
    },

    resaleEtherUSDPrice: '0',
    resaleEtherUSDPriceStr: '0',
    resaleEtherUSDPriceObj: {
      d: '0',
      f: null,
    },

    v1Claimed: '0',
    v1ClaimedStr: '0',
    v1ClaimedObj: {
      d: '0',
      f: null,
    },

    v1Bonuses: '0',
    v1BonusesStr: '0',
    v1BonusesObj: {
      d: '0',
      f: null,
    },

    v2Claimed: '0',
    v2ClaimedStr: '0',
    v2ClaimedObj: {
      d: '0',
      f: null,
    },

    v2Bonuses: '0',
    v2BonusesStr: '0',
    v2BonusesObj: {
      d: '0',
      f: null,
    },

    vokenTbTotal: '0',
    vokenTbTotalStr: '0',
    vokenTbTotalObj: {
      d: '0',
      f: null,
    },

    processInPercent: '0',
    processInPercentStr: '0',
    processInPercentObj: {
      d: '0',
      f: null,
    },

    // etherUSDPrice: '0',
    // etherUSDPriceStr: '0',
    // etherUSDPriceObj: {
    //   d: '0',
    //   f: null,
    // },
    //
    // vokenUSDPrice: '0',
    // vokenUSDPriceStr: '0',
    // vokenUSDPriceObj: {
    //   d: '0',
    //   f: null,
    // },
  },

  account: {
    canOnlyResale: false,

    v1ResaleAppliedTimestamp: 0,
    v2ResaleAppliedTimestamp: 0,
    v1UpgradeAppliedTimestamp: 0,
    v2UpgradeAppliedTimestamp: 0,

    /**
     * Voken 1.0
     */
    v1: {
      txsIn: 0,
      txsOut: 0,

      balance: '',
      balanceStr: '0',
      balanceObj: {
        d: '0',
        f: null,
      },

      proportion: '0',
      proportionStr: '0',
      proportionObj: {
        d: '0',
        f: null,
      },

      weiPurchased: '0',
      weiPurchasedStr: '0',
      weiPurchasedObj: {
        d: '0',
        f: null,
      },

      weiRewarded: '0',
      weiRewardedStr: '0',
      weiRewardedObj: {
        d: '0',
        f: null,
      },

      weiAudit: '0',
      weiAuditStr: '0',
      weiAuditObj: {
        d: '0',
        f: null,
      },

      resale: {
        usdQuota: '0',
        usdQuotaStr: '0',
        usdQuotaObj: {
          d: '0',
          f: null,
        },

        usdAudit: '0',
        usdAuditStr: '0',
        usdAuditObj: {
          d: '0',
          f: null,
        },

        usdClaimed: '0',
        usdClaimedStr: '0',
        usdClaimedObj: {
          d: '0',
          f: null,
        },

        timestamp: 0
      },

      upgrade: {


        claim: '0',
        claimStr: '0',
        claimObj: {
          d: '0',
          f: null,
        },

        bonus: '0',
        bonusStr: '0',
        bonusObj: {
          d: '0',
          f: null,
        },

        etherUSDPrice: '0',
        etherUSDPriceStr: '0',
        etherUSDPriceObj: {
          d: '0',
          f: null,
        },

        vokenUSDPrice: '0',
        vokenUSDPriceStr: '0',
        vokenUSDPriceObj: {
          d: '0',
          f: null,
        },

        timestamp: 0
      },
    },

    /**
     * Voken 2.0
     */
    v2: {
      txsIn: 0,
      txsOut: 0,

      balance: '',
      balanceStr: '0',
      balanceObj: {
        d: '0',
        f: null,
      },

      proportion: '0',
      proportionStr: '0',
      proportionObj: {
        d: '0',
        f: null,
      },

      weiPurchased: '0',
      weiPurchasedStr: '0',
      weiPurchasedObj: {
        d: '0',
        f: null,
      },

      weiRewarded: '0',
      weiRewardedStr: '0',
      weiRewardedObj: {
        d: '0',
        f: null,
      },

      weiAudit: '0',
      weiAuditStr: '0',
      weiAuditObj: {
        d: '0',
        f: null,
      },

      resale: {
        usdQuota: '0',
        usdQuotaStr: '0',
        usdQuotaObj: {
          d: '0',
          f: null,
        },

        usdAudit: '0',
        usdAuditStr: '0',
        usdAuditObj: {
          d: '0',
          f: null,
        },

        usdClaimed: '0',
        usdClaimedStr: '0',
        usdClaimedObj: {
          d: '0',
          f: null,
        },

        timestamp: 0
      },

      upgrade: {
        claim: '0',
        claimStr: '0',
        claimObj: {
          d: '0',
          f: null,
        },

        bonus: '0',
        bonusStr: '0',
        bonusObj: {
          d: '0',
          f: null,
        },

        etherUSDPrice: '0',
        etherUSDPriceStr: '0',
        etherUSDPriceObj: {
          d: '0',
          f: null,
        },

        vokenUSDPrice: '0',
        vokenUSDPriceStr: '0',
        vokenUSDPriceObj: {
          d: '0',
          f: null,
        },

        timestamp: 0
      },
    },
  },

  deadlineCountdown: {
    interval: null,

    d: '0',
    hh: '00',
    mm: '00',
    ss: '00',
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
  DEADLINE_COUNTDOWN(state) {
    let diff = state.status.deadline * 1000 - new Date().getTime()

    if (diff > 0) {
      const s = Math.floor(diff / 1000 % 60)
      const m = Math.floor(diff / 60000 % 60)
      const h = Math.floor(diff / 1440000 % 24)
      const d = Math.floor(diff / 86400000)

      const ss = s < 10 ? '0' + s : s
      const mm = m < 10 ? '0' + m : m
      const hh = h < 10 ? '0' + h : h

      state.deadlineCountdown.ss = ss
      state.deadlineCountdown.mm = mm
      state.deadlineCountdown.hh = hh
      state.deadlineCountdown.d = d
    } else {
      state.deadlineCountdown.ss = '00'
      state.deadlineCountdown.mm = '00'
      state.deadlineCountdown.hh = '00'
      state.deadlineCountdown.d = '0'
    }
  },
  SET_DEADLINE_COUNTDOWN_INTERVAL(state, payload) {
    state.deadlineCountdown.interval = payload
  },

  SET_STATUS(state, payload) {
    state.status.deadline = parseInt(payload.deadline)

    state.status.usdAudit = payload.usdAudit
    state.status.usdAuditStr = fnFormat.ns2Str(payload.usdAudit, 6)
    state.status.usdAuditObj = fnFormat.ns2Obj(state.status.usdAuditStr)

    state.status.usdClaimed = payload.usdClaimed
    state.status.usdClaimedStr = fnFormat.ns2Str(payload.usdClaimed, 6)
    state.status.usdClaimedObj = fnFormat.ns2Obj(state.status.usdClaimedStr)

    state.status.usdReceived = payload.usdReceived
    state.status.usdReceivedStr = fnFormat.ns2Str(payload.usdReceived, 6)
    state.status.usdReceivedObj = fnFormat.ns2Obj(state.status.usdReceivedStr)

    state.status.resaleEtherUSDPrice = payload.resaleEtherUSD
    state.status.resaleEtherUSDPriceStr = fnFormat.ns2Str(state.status.resaleEtherUSDPrice, 6)
    state.status.resaleEtherUSDPriceObj = fnFormat.ns2Obj(state.status.resaleEtherUSDPriceStr)

    state.status.v1Claimed = payload.v1Claimed
    state.status.v1ClaimedStr = fnFormat.ns2Str(payload.v1Claimed)
    state.status.v1ClaimedObj = fnFormat.ns2Obj(state.status.v1ClaimedStr)

    state.status.v1Bonuses = payload.v1Bonuses
    state.status.v1BonusesStr = fnFormat.ns2Str(payload.v1Bonuses)
    state.status.v1BonusesObj = fnFormat.ns2Obj(state.status.v1BonusesStr)

    state.status.v2Claimed = payload.v2Claimed
    state.status.v2ClaimedStr = fnFormat.ns2Str(payload.v2Claimed)
    state.status.v2ClaimedObj = fnFormat.ns2Obj(state.status.v2ClaimedStr)

    state.status.v2Bonuses = payload.v2Bonuses
    state.status.v2BonusesStr = fnFormat.ns2Str(payload.v2Bonuses)
    state.status.v2BonusesObj = fnFormat.ns2Obj(state.status.v2BonusesStr)

    const vokenTbTotal = (
      new BigNumber(payload.v1Claimed)
        .plus(payload.v1Bonuses)
        .plus(payload.v2Claimed)
        .plus(payload.v2Bonuses)
    )

    state.status.vokenTbTotal = vokenTbTotal.toString()
    state.status.vokenTbTotalStr = fnFormat.ns2Str(state.status.vokenTbTotal)
    state.status.vokenTbTotalObj = fnFormat.ns2Obj(state.status.vokenTbTotalStr)

    state.status.processInPercent = vokenTbTotal.multipliedBy(100).div(21000000 * 10 ** 9).toString()
    state.status.processInPercentStr = numbro(state.status.processInPercent).format({
      thousandSeparated: true,
      mantissa: 2
    })
    state.status.processInPercentObj = fnFormat.ns2Obj(state.status.processInPercentStr)

    // state.status.etherUSDPrice = payload.etherUSD
    // state.status.etherUSDPriceStr = fnFormat.ns2Str(state.status.etherUSDPrice, 6)
    // state.status.etherUSDPriceObj = fnFormat.ns2Obj(state.status.v2BonusesStr)
    //
    // state.status.vokenUSDPrice = payload.vokenUSD
    // state.status.vokenUSDPriceStr = fnFormat.ns2Str(state.status.vokenUSDPrice, 6)
    // state.status.vokenUSDPriceObj = fnFormat.ns2Obj(state.status.vokenUSDPriceStr)
  },
  SET_ACCOUNT(state, payload) {
    state.account.canOnlyResale = payload.canOnlyResale
    state.account.v1ResaleAppliedTimestamp = parseInt(payload.v1ResaleAppliedTimestamp)
    state.account.v2ResaleAppliedTimestamp = parseInt(payload.v2ResaleAppliedTimestamp)
    state.account.v1UpgradeAppliedTimestamp = parseInt(payload.v1UpgradeAppliedTimestamp)
    state.account.v2UpgradeAppliedTimestamp = parseInt(payload.v2UpgradeAppliedTimestamp)

    state.account.v1.balance = payload.v1Balance
    state.account.v1.balanceStr = fnFormat.ns2Str(payload.v1Balance, 6)
    state.account.v1.balanceObj = fnFormat.ns2Obj(state.account.v1.balanceStr)

    state.account.v1.proportion = (
      new BigNumber(state.account.v1.balance)
        .multipliedBy(100)
        .dividedBy(35 * 10 ** 15)
        .toString()
    )
    state.account.v1.proportionStr = numbro(state.account.v1.proportion).format({
      thousandSeparated: true,
      mantissa: 8
    })
    state.account.v1.proportionObj = fnFormat.ns2Obj(state.account.v1.proportionStr)

    state.account.v2.balance = payload.v2Balance
    state.account.v2.balanceStr = fnFormat.ns2Str(payload.v2Balance, 6)
    state.account.v2.balanceObj = fnFormat.ns2Obj(state.account.v2.balanceStr)

    state.account.v2.proportion = (
      new BigNumber(state.account.v2.balance)
        .multipliedBy(100)
        .dividedBy(35 * 10 ** 15)
        .toString()
    )
    state.account.v2.proportionStr = numbro(state.account.v2.proportion).format({
      thousandSeparated: true,
      mantissa: 8
    })
    state.account.v2.proportionObj = fnFormat.ns2Obj(state.account.v2.proportionStr)
  },

  SET_ACCOUNT_V1_RESALE(state, payload) {
    state.account.v1.resale.timestamp = parseInt(payload.timestamp)

    state.account.v1.resale.usdQuota = payload.usdQuota
    state.account.v1.resale.usdQuotaStr = fnFormat.ns2Str(payload.usdQuota, 6)
    state.account.v1.resale.usdQuotaObj = fnFormat.ns2Obj(state.account.v1.resale.usdQuotaStr)

    state.account.v1.resale.usdAudit = payload.usdAudit
    state.account.v1.resale.usdAuditStr = fnFormat.ns2Str(payload.usdAudit, 6)
    state.account.v1.resale.usdAuditObj = fnFormat.ns2Obj(state.account.v1.resale.usdAuditStr)

    state.account.v1.resale.usdClaimed = payload.usdClaimed
    state.account.v1.resale.usdClaimedStr = fnFormat.ns2Str(payload.usdClaimed, 6)
    state.account.v1.resale.usdClaimedObj = fnFormat.ns2Obj(state.account.v1.resale.usdClaimedStr)
  },
  SET_ACCOUNT_V2_RESALE(state, payload) {
    state.account.v2.resale.timestamp = parseInt(payload.timestamp)

    state.account.v2.resale.usdQuota = payload.usdQuota
    state.account.v2.resale.usdQuotaStr = fnFormat.ns2Str(payload.usdQuota, 6)
    state.account.v2.resale.usdQuotaObj = fnFormat.ns2Obj(state.account.v2.resale.usdQuotaStr)

    state.account.v2.resale.usdAudit = payload.usdAudit
    state.account.v2.resale.usdAuditStr = fnFormat.ns2Str(payload.usdAudit, 6)
    state.account.v2.resale.usdAuditObj = fnFormat.ns2Obj(state.account.v2.resale.usdAuditStr)

    state.account.v2.resale.usdClaimed = payload.usdClaimed
    state.account.v2.resale.usdClaimedStr = fnFormat.ns2Str(payload.usdClaimed, 6)
    state.account.v2.resale.usdClaimedObj = fnFormat.ns2Obj(state.account.v2.resale.usdClaimedStr)
  },
  SET_ACCOUNT_V1_UPGRADE(state, payload) {
    state.account.v1.txsIn = parseInt(payload.txsIn)
    state.account.v1.txsOut = parseInt(payload.txsOut)

    state.account.v1.weiPurchased = payload.weiPurchased
    state.account.v1.weiPurchasedStr = Web3.utils.fromWei(payload.weiPurchased, 'ether')
    state.account.v1.weiPurchasedObj = fnFormat.ns2Obj(state.account.v1.weiPurchasedStr)

    state.account.v1.weiRewarded = payload.weiRewarded
    state.account.v1.weiRewardedStr = Web3.utils.fromWei(payload.weiRewarded, 'ether')
    state.account.v1.weiRewardedObj = fnFormat.ns2Obj(state.account.v1.weiRewardedStr)

    state.account.v1.weiAudit = payload.weiAudit
    state.account.v1.weiAuditStr = Web3.utils.fromWei(payload.weiAudit, 'ether')
    state.account.v1.weiAuditObj = fnFormat.ns2Obj(state.account.v1.weiAuditStr)

    state.account.v1.upgrade.timestamp = parseInt(payload.timestamp)

    state.account.v1.upgrade.claim = payload.claim
    state.account.v1.upgrade.claimStr = fnFormat.ns2Str(payload.claim)
    state.account.v1.upgrade.claimObj = fnFormat.ns2Obj(state.account.v1.upgrade.claimStr)

    state.account.v1.upgrade.bonus = payload.bonus
    state.account.v1.upgrade.bonusStr = fnFormat.ns2Str(payload.bonus)
    state.account.v1.upgrade.bonusObj = fnFormat.ns2Obj(state.account.v1.upgrade.bonusStr)

    state.account.v1.upgrade.etherUSDPrice = payload.etherUSD
    state.account.v1.upgrade.etherUSDPriceStr = fnFormat.ns2Str(payload.etherUSD, 6)
    state.account.v1.upgrade.etherUSDPriceObj = fnFormat.ns2Obj(state.account.v1.upgrade.etherUSDPriceStr)

    state.account.v1.upgrade.vokenUSDPrice = payload.vokenUSD
    state.account.v1.upgrade.vokenUSDPriceStr = fnFormat.ns2Str(payload.vokenUSD, 6)
    state.account.v1.upgrade.vokenUSDPriceObj = fnFormat.ns2Obj(state.account.v1.upgrade.vokenUSDPriceStr)
  },
  SET_ACCOUNT_V2_UPGRADE(state, payload) {
    state.account.v2.txsIn = parseInt(payload.txsIn)
    state.account.v2.txsOut = parseInt(payload.txsOut)

    state.account.v2.weiPurchased = payload.weiPurchased
    state.account.v2.weiPurchasedStr = Web3.utils.fromWei(payload.weiPurchased, 'ether')
    state.account.v2.weiPurchasedObj = fnFormat.ns2Obj(state.account.v2.weiPurchasedStr)

    state.account.v2.weiRewarded = payload.weiRewarded
    state.account.v2.weiRewardedStr = Web3.utils.fromWei(payload.weiRewarded, 'ether')
    state.account.v2.weiRewardedObj = fnFormat.ns2Obj(state.account.v2.weiRewardedStr)

    state.account.v2.weiAudit = payload.weiAudit
    state.account.v2.weiAuditStr = Web3.utils.fromWei(payload.weiAudit, 'ether')
    state.account.v2.weiAuditObj = fnFormat.ns2Obj(state.account.v2.weiAuditStr)

    state.account.v2.upgrade.timestamp = parseInt(payload.timestamp)

    state.account.v2.upgrade.claim = payload.claim
    state.account.v2.upgrade.claimStr = fnFormat.ns2Str(payload.claim)
    state.account.v2.upgrade.claimObj = fnFormat.ns2Obj(state.account.v2.upgrade.claimStr)

    state.account.v2.upgrade.bonus = payload.bonus
    state.account.v2.upgrade.bonusStr = fnFormat.ns2Str(payload.bonus)
    state.account.v2.upgrade.bonusObj = fnFormat.ns2Obj(state.account.v2.upgrade.bonusStr)

    state.account.v2.upgrade.etherUSDPrice = payload.etherUSD
    state.account.v2.upgrade.etherUSDPriceStr = fnFormat.ns2Str(payload.etherUSD, 6)
    state.account.v2.upgrade.etherUSDPriceObj = fnFormat.ns2Obj(state.account.v2.upgrade.etherUSDPriceStr)

    state.account.v2.upgrade.vokenUSDPrice = payload.vokenUSD
    state.account.v2.upgrade.vokenUSDPriceStr = fnFormat.ns2Str(payload.vokenUSD, 6)
    state.account.v2.upgrade.vokenUSDPriceObj = fnFormat.ns2Obj(state.account.v2.upgrade.vokenUSDPriceStr)
  },
}


export const actions = {
  async SET_BLOCK_NUMBER({commit}, blockNumber) {
    commit('SET_BLOCK_NUMBER', blockNumber)
  },
  async SET_CONTRACT({commit}, contract) {
    commit('SET_CONTRACT', contract)
  },
  async KEEP_DEADLINE_COUNTDOWN({commit, state}) {
    if (!state.deadlineCountdown.interval) {
      commit('SET_DEADLINE_COUNTDOWN_INTERVAL',
        window.setInterval(
          () => {
            commit('DEADLINE_COUNTDOWN')
          },
          1000)
      )
    }
  },
  async SYNC_STATUS({commit, state, dispatch}) {
    await state.contract().methods.status()
      .call()
      .then(payload => {
        commit('SET_STATUS', payload)
        dispatch('KEEP_DEADLINE_COUNTDOWN')
      })
      .catch(error => {
        console.error('::: S[vokenResale] SYNC_STATUS:', error)
      })
  },
  async SYNC_ACCOUNT({commit, state, rootState}) {
    await state.contract().methods.getAccountStatus(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_ACCOUNT', payload)
      })
      .catch(error => {
        console.error('::: S[vokenResale] SYNC_ACCOUNT:', error)
      })
  },
  async SYNC_ACCOUNT_V1_RESALE({commit, state, rootState}) {
    await state.contract().methods.v1ResaleStatus(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_ACCOUNT_V1_RESALE', payload)
      })
      .catch(error => {
        console.error('::: S[vokenResale] SYNC_ACCOUNT_V1_RESALE:', error)
      })
  },
  async SYNC_ACCOUNT_V2_RESALE({commit, state, rootState}) {
    await state.contract().methods.v2ResaleStatus(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_ACCOUNT_V2_RESALE', payload)
      })
      .catch(error => {
        console.error('::: S[vokenResale] SYNC_ACCOUNT_V2_RESALE:', error)
      })
  },
  async SYNC_ACCOUNT_V1_UPGRADE({commit, state, rootState}) {
    await state.contract().methods.v1UpgradeStatus(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_ACCOUNT_V1_UPGRADE', payload)
      })
      .catch(error => {
        console.error('::: S[vokenResale] SYNC_ACCOUNT_V1_RESALE:', error)
      })
  },
  async SYNC_ACCOUNT_V2_UPGRADE({commit, state, rootState}) {
    await state.contract().methods.v2UpgradeStatus(rootState.ether.account)
      .call()
      .then(payload => {
        commit('SET_ACCOUNT_V2_UPGRADE', payload)
      })
      .catch(error => {
        console.error('::: S[vokenResale] SYNC_ACCOUNT_V2_RESALE:', error)
      })
  },


}
