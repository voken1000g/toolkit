<template>
  <layout-w class='pb-36'>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        {{ $t('nav.Wallet_Generator') }}
      </h1>
      <p>
        {{ $t('wallet.HD_Wallets_helps__') }}
      </p>

      <h2>
        <a target='_blank'
           href='https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki'
        >
          BIP39
        </a>
        {{ $t('wallet.Mnemonic_Phrase') }}
      </h2>

      <p>
        {{ $t('wallet.Human__readable_and_') }}
      </p>

      <p>
        {{ $t('wallet.The_BIP39_Mnemonic_is') }}
        <b>{{ $t('wallet.the_very_beginning') }}</b>
        {{ $t('wallet.also_the_most_important_part') }}
      </p>

      <div v-if='!mnemonic && showBtnGenerateMnemonic && showBtnInputMnemonic'
           class='mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 flex flex-col space-y-4 lg:flex-row lg:space-x-2 lg:space-y-0 xl:space-x-4 2xl:space-x-6 justify-center'>
        <button type='button'
                class='w-full md:max-w-xl btn-new-mnemonic'
                @click='newMnemonic'
        >
          <svg-ripple class='mr-4 w-8 h-8' style='margin-top: 0; margin-bottom: 0' />
          {{ $t('wallet.Generate_a_random_Mnemonic') }}
        </button>

        <button type='button'
                class='w-full md:max-w-xl btn-input-mnemonic'
                @click='inputMnemonic'
        >
          {{ $t('wallet.Input_mnemonic_manually') }}
        </button>
      </div>
    </layout-w-prose>

    <div v-show='showTextareaMnemonic' :class='mnemonicStatus' class='my-8 md:my-10 lg:my-12 xl:my-14 2xl:my-16'>
      <label for='mnemonic'
             class='block text-gray-700 text-center'>
        <span v-show='mnemonicStatus === "success" || mnemonicStatus === null'>
          {{ $t('wallet.Input_Your_Mnemonic_Manually') }}
        </span>
        <span v-show='mnemonicStatus === "error"'>
          {{ $t('wallet.Invalid_Mnemonic') }}
        </span>
      </label>

      <textarea id='mnemonic'
                ref='mnemonic'
                name='mnemonic'
                rows='4'
                class='textarea-indigo block w-full mt-1 md:mt-2 py-3 px-6 text-sm md:text-base lg:text-xl'
                :class='{ "font-mono font-bold": mnemonic }'
                v-model='mnemonic'
                :placeholder='$t("wallet.Placeholder__textarea_mnemonic")'></textarea>

      <div v-show='!mnemonicSuccess' class='mt-4 lg:mt-8 flex justify-center'>
        <button type='button'
                class='w-full md:max-w-xl btn-new-mnemonic'
                @click='newMnemonic'
        >
          <svg-ripple class='mr-4 w-8 h-8' style='margin-top: 0; margin-bottom: 0' />
          {{ $t('wallet.Generate_a_random_Mnemonic') }}
        </button>
      </div>
    </div>

    <div v-show='mnemonicSuccess'
         class='mt-4 lg:mt-6 2xl:mt-8 py-6 xl:py-8 px-4 bg-gradient-to-br from-red-100 to-orange-200 rounded-md'>
      <div
        class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
        <img :src='avatar.svgDataUriFromSeed(mnemonic)' alt='mnemonic avatar'>
      </div>

      <h3 class='mt-4 lg:mt-6 xl:mt-8 text-2xl xl:text-3xl text-gray-600 text-center'>
        {{ $t('wallet.BIP39_Mnemonic__backup_phrase_') }}
      </h3>

      <div
        class='mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6 xl:gap-6 2xl:grid-cols-7'
      >
        <div v-for='(word, index) in mnemonic.split(" ")'
             class='mnemonic text-base xl:text-lg 2xl:text-xl'
        >
          <span class='mnemonic-index'>
            {{ index + 1 }}.
          </span>
          <span class='mnemonic-word'>
            {{ word }}
          </span>
        </div>
      </div>

      <div class='mt-2 md:mt-4 lg:mt-6 flex justify-center'>
        <button type='button'
                class='mt-6 mx-auto w-full md:max-w-xl btn-new-mnemonic'
                @click='newMnemonic'
        >
          {{ $t('wallet.Generate_a_random_Mnemonic__renew_') }}
        </button>
      </div>
    </div>

    <layout-w-prose v-if='mnemonicSuccess' class='mt-2 lg:mt-4 2xl:mt-6'>
      <p>
        {{ $t('wallet.It_is_the_root_of_your_wallets') }}
        <b class='text-orange-500'>{{ $t('wallet.Never_never_never_disclose_') }}</b>
      </p>

      <p>
        <b class='text-orange-500'>{{ $t('wallet.Please_write_the_mnemonic_') }}</b>
        {{ $t('wallet.You_can_always_restore__') }}
      </p>
      <p class='align-text-bottom'>
        {{ $t('wallet.The_avatar') }}
        <img :src='avatar.svgDataUriFromSeed(mnemonic)'
             class='inline-block align-text-bottom w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-md shadow-md'
             style='margin: 0' alt='mnemonic avatar'>
        {{ $t('wallet.is_converted_from___mnemonic') }}
        {{ $t('wallet.by') }}
        <a href='https://voken.io/en/latest/npm/avatar.html'>@voken/avatar</a>
      </p>
      <p>
        {{ $t('wallet.An_image_may_easier__') }}
      </p>
      <p>
        {{ $t('wallet.If_you_find___avatar_does_not__') }}
      </p>

      <!-- Master Seed -->
      <h2 v-if='seed'>
        {{ $t('wallet.Master_Seed') }}
      </h2>
    </layout-w-prose>

    <div v-if='seed'
         class='mt-4 lg:mt-6 2xl:mt-8 py-6 xl:py-8 px-4 lg:px-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-md leading-7 font-mono text-red-600 text-center break-all pointer-events-none'
    >
      {{ seedBase32 }}
    </div>

    <layout-w-prose v-if='seed' class='mt-2 lg:mt-4 2xl:mt-6'>
      <p>
        {{ $t('wallet.The_master_seed_is_converted__') }}
        <b class='text-orange-500'>{{ $t('wallet.Same_as_your_mnemonic__never_disclose__') }}</b>
      </p>

      <p>
        {{ $t('wallet.You_dont_need_to_save__SEED__') }}
      </p>

      <h2>
        <a target='_blank'
           href='https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki'
        >
          BIP44
        </a>
        {{ $t('wallet.Deterministic_Wallets') }}
      </h2>

      <p>
        {{ $t('wallet.Key_pair__can_be_derived_from__') }}
      </p>

      <p>
        {{ $t('wallet.VOKEN_use_the_following_5_levels_in') }}
        <a target='_blank'
           href='https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki'
        >
          BIP32
        </a>
        {{ $t('wallet.path_as') }}
        <code class='font-mono'>m/44'/678'/0'/0/{address_index}</code>,
        {{ $t('wallet.which_is_registered_and_listed_in') }}
        <a target='_blank'
           href='https://github.com/satoshilabs/slips/blob/master/slip-0044.md'
        >
          SatoshiLabs/slips/SLIP-0044,
        </a>
        {{ $t('wallet.you_could_find_the') }} <code>coin_type</code> {{ $t('wallet.index_value_is') }} <code>678</code>.
      </p>

      <p>
        {{ $t('wallet.Wallets_OR_addresses_ar_numbered__') }}
      </p>

      <p v-if='wallets[0]'>
        {{ $t('wallet.Here_is_the_1st_wallet__contains') }}
        <b>{{ $t('wallet.a_private__public_key_pair') }}</b> {{ $t('wallet.and') }} <b>{{ $t('wallet.an_address_')
        }}</b>
      </p>
    </layout-w-prose>

    <comp-wallet :wallet='wallets[0]' class='comp-wallet' />

    <layout-w-prose v-if='wallets[0]' class='mt-2 lg:mt-4 2xl:mt-6'>
      <p>
        {{ $t('wallet.It_was_derived_from_the') }}
        <i>Master Seed</i>
        {{ $t('wallet.above_by_bath') }}
        <code>m/44'/678'/0'/0/0</code>{{ $t('__comma') }}
        {{ $t('wallet.its_values_were_Base32_encoded') }}
        {{ $t('wallet.by') }}
        <a target='_blank' href='https://voken.io/en/latest/npm/base32.html'>@voken/base32</a>
      </p>

      <h3>
        {{ $t('wallet.Private_Key') }}
      </h3>

      <p class='text-orange-500'>
        {{ $t('wallet.You_should_always_keep_it_private') }}
        <b>{{ $t('wallet.Never_disclose_it_to_anyone') }}</b>
      </p>

      <p>
        {{ $t('wallet.If_you_use_the_Proxy_clientbase_') }}
      </p>

      <h3>
        {{ $t('wallet.Public_Key') }}
      </h3>

      <p>
        {{ $t('wallet.Derived_from__in_pairs') }}
      </p>

      <p class='text-green-500'>
        <b>{{ $t('wallet.Sending_a_Public_Key_is_safe') }}</b>
      </p>

      <h3>
        {{ $t('wallet.How_do_the__keypair_works') }}
      </h3>

      <ul>
        <li>
          {{ $t('wallet.Data_encrypted_with_private__') }}
        </li>
        <li>
          {{ $t('wallet.Accordingly__data_encrypted_with_public__') }}
        </li>

        <li>
          <b>{{ $t('wallet.Only') }}</b>
          {{ $t('wallet.the_owner_holds_the_private_key_while__') }}
          <b>{{ $t('wallet.publicly_accessible') }}</b>
        </li>

        <li>
          {{ $t('wallet.A_signature__') }}
        </li>
      </ul>

      <h4>
        {{ $t('wallet.A_private_public_keypair_could__') }}
      </h4>

      <ul>
        <li>
          {{ $t('wallet.Encrypted_communication') }}
        </li>
        <li>
          {{ $t('wallet.Transactions') }}
        </li>
        <li>
          {{ $t('wallet.etc_') }}
        </li>
      </ul>

      <h4>
        {{ $t('wallet.Receiving_a_message__') }}
      </h4>

      <p>
        {{ $t('wallet.Just_suppose_you_are_Alice_and__') }}
      </p>

      <p>
        {{ $t('wallet.Sending_and_receiving_a__') }}
      </p>

      <div class='pl-4 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12'>
        <p class='font-bold'>
          {{ $t('wallet.You_Alice_send__Bob') }}
        </p>

        <ol>
          <li>
            {{ $t('wallet.Encrypt_the_message_with_Bob__') }}
          </li>
          <li>
            {{ $t('wallet.Hash_the_message__sign_the_hash__') }}
          </li>
          <li>
            {{ $t('wallet.Send_the_encrypted_message_and_your_signature__') }}
          </li>
        </ol>

        <p class='font-bold'>
          {{ $t('wallet.Bob_received_your__') }}
        </p>

        <ol>
          <li>
            {{ $t('wallet.Decrypt__got_the_message') }}
          </li>
          <li>
            {{ $t('wallet.Verify_your_signature__') }}
          </li>
        </ol>
      </div>

      <h4>
        {{ $t('wallet.Making_a_transfer') }}
      </h4>

      <p>
        {{ $t('wallet.Making_a_transfer_from_you__to_Bob') }}
      </p>

      <div class='pl-4 md:pl-6 lg:pl-8 xl:pl-10 2xl:pl-12'>
        <p class='font-bold'>
          {{ $t('wallet.It_works_as_follow') }}
        </p>

        <ol>
          <li>
            {{ $t('wallet.Create_a_tx_with__') }}
          </li>
          <li>
            {{ $t('wallet.Hash_the_tx__') }}
          </li>
          <li>
            {{ $t('wallet.Broadcast__the_tx') }}
          </li>
          <li>
            {{ $t('wallet.Miner_received_the_tx__') }}
          </li>
          <li>
            {{ $t('wallet.Miner_verify_the_signature__') }}
          </li>
          <li>
            {{ $t('wallet.Miner_derive_your__address__') }}
          </li>
          <li>
            {{ $t('wallet.Miner_check_your__balance') }}
          </li>
          <li>
            {{ $t('wallet.Decrease_your_balance__') }}
          </li>
          <li>
            {{ $t('wallet.Miner_pack_the_tx__') }}
          </li>
          <li>
            {{ $t('wallet.Transfer_finished') }}
          </li>
        </ol>
      </div>


      <h3>
        {{ $t('wallet.Wallet_Address') }}
      </h3>

      <p>
        {{ $t('wallet.Derived_from_the_Public_Key_with__') }}
      </p>

      <p class='text-green-500'>
        <b>{{ $t('wallet.Sending_a_Wallet_address_is_safe') }}</b>
      </p>

      <p>
        <span class='text-orange-500'>{{ $t('wallet.If_you_miss_spelled') }}</span>
        {{ $t('wallet.recipient_s_wallet_address__') }}
        {{ $t('wallet.The_tx_would_fail__') }}
        <b>{{ $t('wallet.In_the_vision_network') }}
          <span class='text-orange-500'>{{ $t('wallet.no_one_would_ever_loss_any_assets') }}</span>
          {{ $t('wallet.because_of_this') }}
        </b>
      </p>

      <p>
        {{ $t('wallet.You_can_explore') }}
        <nuxt-link :to='localePath("/wallet-validator")'>
          {{ $t('wallet.VOKEN_wallet_address_Validator') }}
        </nuxt-link>
        {{ $t('wallet.for_more_') }}
      </p>

      <h3 v-if='wallets.length === 1'>
        {{ $t('wallet.Need_more_keypairs_wallets') }}
      </h3>
      <h3 v-else>
        {{ $t('wallet.More_keypairs_wallets_') }}
      </h3>

      <p v-if='wallets.length === 1'>
        {{ $t('wallet.Click_here_') }}
      </p>
    </layout-w-prose>

    <div v-if='wallets.length > 1'>
      <comp-wallet v-for='wallet in wallets.slice(1)'
                   :key='wallet.index'
                   class='comp-wallet'
                   :wallet='wallet' />
    </div>

    <div v-if='wallets[0]' class='mt-6 md:mt-8 lg:mt-10 flex justify-center'>
      <button type='button'
              class='w-full md:max-w-xl btn-next-wallet'
              @click='nextWallet'
      >
        {{ $t('wallet.Derive_Next_Wallet') }}
      </button>
    </div>
  </layout-w>
</template>

<script>
import * as bip39 from 'bip39'
import avatar from '@voken/avatar'
import base32 from '@voken/base32'
import Wallet from '@voken/hd-wallet'
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'
import CompWallet from '~/components/CompWallet'
import SvgRipple from '~/components/SvgRipple'

export default {
  name: 'wallet-generator',
  components: { SvgRipple, CompWallet, LayoutWProse, LayoutW },
  layout: 'centerIndigo',
  data() {
    return {
      avatar: avatar,
      base32: base32,

      showBtnGenerateMnemonic: true,
      showBtnInputMnemonic: true,
      showTextareaMnemonic: false,
      showGenerating: false,
      showRenewing: false,
      showDeriving: false,

      mnemonic: '',
      seed: null,
      rootWallet: null,
      wallets: []
    }
  },
  computed: {
    mnemonicStatus() {
      if (this.mnemonic) {
        if (bip39.validateMnemonic(this.mnemonic)) {
          this.generateSeed()
          return 'success'
        } else {
          this.clearSeed()
          return 'error'
        }
      }

      this.clearSeed()
      return null
    },
    mnemonicSuccess() {
      return this.mnemonicStatus === 'success'
    },
    seedBase32() {
      if (this.seed) {
        return base32.encode(this.seed, 'hex')
      }

      return null
    }
  },
  mounted: async function() {
    // await this.generateMnemonic()
  },
  methods: {
    async generateMnemonic() {
      this.mnemonic = await bip39.generateMnemonic(192)
      this.generateSeed()
    },
    async inputMnemonic() {
      this.mnemonic = ''
      this.showBtnGenerateMnemonic = false
      this.showBtnInputMnemonic = false
      this.showTextareaMnemonic = true
      this.$refs.mnemonic.focus()
    },
    async newMnemonic() {
      this.showTextareaMnemonic = false
      await this.generateMnemonic()
    },
    generateSeed() {
      this.seed = bip39.mnemonicToSeedSync(this.mnemonic)
      this.rootWallet = new Wallet(this.seed)
      this.wallets = [
        this.rootWallet.derive(0)
      ]
    },
    clearSeed() {
      this.seed = null
      this.rootWallet = null
      this.wallets = []
    },
    async nextWallet() {
      this.wallets.push(this.rootWallet.derive(this.wallets.length))
    }
  },
  watch: {}
}
</script>

<style scoped>
.mnemonic {
  @apply flex justify-between py-2 px-3 border-b-2 border-gray-400 font-mono font-bold text-red-600 text-center;
}

.mnemonic-index {
  @apply font-normal text-gray-500;
}

.mnemonic-word {
  @apply w-full;
}

button {
  @apply block inline-flex items-center justify-center;
  @apply py-4 bg-gradient-to-r border border-transparent rounded-md shadow;
  @apply font-sans font-semibold text-xl text-white;
}

.btn-new-mnemonic {
  @apply from-orange-500 to-pink-500;
}

.btn-new-mnemonic:hover {
  @apply to-pink-600;
}

.btn-new-mnemonic:active {
  @apply to-pink-500 shadow-outline-pink;
}

.btn-input-mnemonic,
.btn-next-wallet {
  @apply from-blue-500 to-indigo-500;
}

.btn-input-mnemonic:hover,
.btn-next-wallet:hover {
  @apply to-indigo-600;
}

.btn-input-mnemonic:active,
.btn-next-wallet:active {
  @apply to-indigo-500 shadow-outline-indigo;
}
</style>
