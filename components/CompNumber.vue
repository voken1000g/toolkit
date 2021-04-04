<template>
  <span>{{ numberObj.d }}<span v-if="numberObj.f" class="number-f">.{{ numberObj.f }}</span></span>
</template>

<script>
import Web3 from 'web3'
import numbro from 'numbro'
import BigNumber from 'bignumber.js'
import fnFormat from '~/utils/fnFormat'


export default {
  name: "CompNumber",
  props: {
    value: {
      type: String,
      required: true
    },
    decimals: {
      type: Number,
      default: 0
    },
    mantissa: {
      type: Number,
      default: 0
    },
  },
  computed: {
    numberStr() {
      const decimals = Math.floor(this.decimals)
      const mantissa = Math.floor(this.mantissa) || decimals

      let bn = new BigNumber(this.value)
      if (decimals) {
        bn = bn.div(10 ** Math.floor(decimals))
      }

      let bnObj = fnFormat.ns2Obj(numbro(bn.toString()).format({mantissa: mantissa}))

      bnObj.d = numbro(bnObj.d).format({
        thousandSeparated: true,
      })

      if (bnObj.f) {
        return bnObj.d + '.' + bnObj.f
      }

      return bnObj.d
    },
    numberObj() {
      return fnFormat.ns2Obj(this.numberStr)
    },
  },
}
</script>
