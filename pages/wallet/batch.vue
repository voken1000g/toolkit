<template>
  <layout-w class='pb-36'>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        {{ $t('nav.Wallet_Batch') }}
      </h1>
    </layout-w-prose>

    <div class='my-8 md:my-10 lg:my-12 xl:my-14 2xl:my-16 lg:px-4'>
      <label class='text-gray-600' for='result'>
        Result
      </label>

      <div class='mt-2'>
        <textarea class='w-full textarea-indigo p-4 font-mono text-sm'
                  name='result'
                  id='result'
                  rows='10'
                  :value='result'
                  readonly></textarea>
      </div>
    </div>

    <div
      class='mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 flex flex-col space-y-4 lg:flex-row lg:space-x-2 lg:space-y-0 xl:space-x-4 2xl:space-x-6 justify-center'>
      <button type='button'
              class='w-full md:max-w-xl btn btn-pink py-4 font-sans font-semibold text-xl'
              @click='generate'
      >
        <svg-ripple class='mr-4 w-8 h-8' style='margin-top: 0; margin-bottom: 0' />
        Batch Generate
      </button>
    </div>

    <div v-if='wallets.length > 0'
         class='mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-9 lg:grid-cols-10 xl:grid-cols-12 gap-4'
    >
      <div v-for='wallet in wallets' :key='wallet.index'>
        <vue-avatar class='w-16 h-16 mx-auto bg-white rounded-md border border-gray-300 shadow-md'
                    :value='wallet.address'/>
        <div class='mt-1 font-mono text-gray-500 text-center'>
          #{{ wallet.index }}
        </div>
      </div>
    </div>
  </layout-w>
</template>

<script>
import * as bip39 from 'bip39'
import base32 from '@voken/base32'
import Wallet from '@voken/hd-wallet'
import publicKey from '@voken/public-key'
import VueAvatar from '@voken/vue-avatar'
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'
import CompWallet from '~/components/CompWallet'
import SvgRipple from '~/components/SvgRipple'

export default {
  name: 'wallet-batch',
  layout: 'wallet',
  components: { SvgRipple, CompWallet, LayoutWProse, LayoutW, VueAvatar },
  head() {
    return {
      title: this.$t('nav.Wallet_Batch')
    }
  },
  data() {
    return {
      base32: base32,

      result: '',

      mnemonic: '',
      seed: null,
      rootWallet: null,
      wallets: []
    }
  },
  methods: {
    async generate() {
      this.mnemonic = await bip39.generateMnemonic(192)
      this.result = this.mnemonic
      this.seed = bip39.mnemonicToSeedSync(this.mnemonic)
      this.rootWallet = new Wallet(this.seed)
      this.wallets = []

      for (let i = 0; i < 500; i++) {
        const wallet = this.rootWallet.derive(i)
        this.wallets.push(wallet)

        const prvKey = wallet.hdKey.privateKey
        const pubKey = wallet.hdKey.publicKey
        const pubKeyDecompressed = publicKey.decompress(pubKey)

        this.result += '\n\n#' + wallet.index + ' ' + wallet.address
        this.result += '\n' + wallet.vpriv + ' ' + prvKey.toString('hex')
        this.result += '\n' + wallet.vpub + ' ' + pubKey.toString('hex')
        this.result += '\n' + pubKeyDecompressed.toString('hex')
      }
    }
  }
}
</script>

<style scoped>

</style>
