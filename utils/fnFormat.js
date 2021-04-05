import numbro from 'numbro'
import BigNumber from "bignumber.js"

const ns2Str = function (balance, decimals = 9) {
  let bn = new BigNumber(balance)

  if (decimals > 0) {
    bn = bn.div(10 ** decimals)
  }

  let bnObj = ns2Obj(numbro(bn.toString()).format({mantissa: decimals}))

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

const fixNumberStr = function (input, decimals = 0) {
  input = String(input)
    .replace('。', '.')
    .replace(/[^\d.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace('.', '#')
    .replace(/\./g, '')
    .replace('#', '.')

  decimals = Math.floor(decimals)

  if (decimals) {
    return input.replace(new RegExp('^(\\d+)\\.(\\d{0,' + decimals + '}).*$' ), '$1.$2')
  }

  return input
}

export default {
  ns2Str: ns2Str,
  ns2Obj: ns2Obj,
  fixNumberStr: fixNumberStr,
}
