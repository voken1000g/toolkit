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
      type: [String, Number],
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
    padding: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    iDecimals() {
      return Math.floor(this.decimals)
    },
    iMantissa() {
      return Math.floor(this.mantissa) || this.iDecimals
    },

    valueStr() {
      try {
        let bn = new BigNumber(this.value)
        if (this.iDecimals) {
          bn = bn.dividedBy(new BigNumber(10 ** this.iDecimals))
        }

        return bn.toString()
      }
      catch (e) {
        return '0'
      }
    },
    numberObj() {
      const bnArr = this.valueStr.split('.')

      let bnObj = {
        d: bnArr[0],
        f: bnArr.length > 1 ? bnArr[1] : null
      }

      bnObj.d = numbro(bnObj.d).format({
        thousandSeparated: true,
      })

      if (bnObj.f) {
        bnObj.f = bnObj.f.replace(/[0]+$/, '')
        if (!bnObj.f) {
          bnObj.f = null
        }
      }

      if (this.iMantissa && bnObj.f && bnObj.f.length > this.iMantissa) {
        bnObj.f = bnObj.f.substring(0, this.iMantissa)
      }

      if (this.padding) {
        if (bnObj.f) {
          bnObj.f = bnObj.f.padEnd(this.iMantissa, '0')
        } else {
          bnObj.f = '0'.padEnd(this.iMantissa, '0')
        }
      }

      return bnObj
    },
  },
}
</script>
