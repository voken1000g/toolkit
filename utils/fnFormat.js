import numbro from 'numbro'
import BigNumber from "bignumber.js"

const ns2Str = function (balance, decimals = 9) {
  let bn = new BigNumber(balance)

  if (decimals > 0) {
    bn = bn.div(10 ** decimals)
  }

  let bnObj = ns2Obj(bn.toString())

  bnObj.d = numbro(bnObj.d).format({
    thousandSeparated: true,
  })

  if (bnObj.f) {
    return bnObj.d + '.' + bnObj.f
  }

  return bnObj.d
}

const ns2Obj = function (balance) {
  const balanceArray = balance.split('.')

  let bnObj = {
    d: balanceArray[0],
    f: balanceArray.length > 1 ? balanceArray[1] : null
  }

  if (bnObj.f) {
    bnObj.f = bnObj.f.replace(/[0]+$/, '')
    if (!bnObj.f) {
      bnObj.f = null
    }
  }

  return bnObj
}

export default {
  ns2Str: ns2Str,
  ns2Obj: ns2Obj,
}
