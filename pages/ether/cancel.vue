<template>
  <div>
    <layout-hero-simple>
      <template #title>
        Try to cancel a transaction
      </template>

      <template #text>
        Try to cancel a pending transaction
      </template>
    </layout-hero-simple>

    <div class="py-16">

      <div class="resp-wide pb-40">
        <div class="prose sm:prose-md lg:prose-lg xl:prose-xl max-w-none">
          <h2>
            What is this for?
          </h2>

          <p>
            Try to cancel/overwrite/replace a specific pending transaction (or a interaction with a contract).
          </p>

          <p>
            This will use the MetaMask extension which is already installed in your Chrome/Firefox/Edge browser.
          </p>

          <h2>
            When do you need this?
          </h2>

          <ul>
            <li>
              If you want to cancel a transaction that has been sent but not yet confirmed
            </li>
            <li>
              In most cases it may because the gas price is fairly low, so it seems won't be confirmed in time as you'd expect
            </li>
            <li>
              You should only attempt to try this before the transaction is confirmed
            </li>
          </ul>

          <h2>
            How it works?
          </h2>

          <ol>
            <li>
              Use the same wallet to open this page
            </li>
            <li>
              Query the transaction nonce with a hash
            </li>
            <li>
              Sign a new transaction (0 ETH to yourself) with higher gas price and the same nonce
            </li>
            <li>
              Send it to the Ethereum blockchain
            </li>
            <li>
              Waiting for confirmations
            </li>
            <li>
              Check the result
            </li>
          </ol>

          <h2>
            Notice
          </h2>

          <p>
            Just call the previous transaction <b>Txn1</b> (the one you want to cancel),
            and call the new transaction <b>Txn2</b>, after you take this action:
          </p>

          <ul>
            <li>
              If Txn1 is already completed, Txn2 would get a <b>rejected</b> error
            </li>
            <li>
              If you set a higher gas price for Txn2, it should be accepted with priority and completed successfully
            </li>
            <li>
              But if the gas price you set is still lower than the latest level, Txn2 would be another pending transaction, until success; if the gas price rises quickly, Txn2 will take more time than you expect
            </li>
          </ul>

          <h2>
            If the Txn2 complete successfully
          </h2>

          <ul>
            <li>
              Txn1 would be dropped
            </li>
            <li>
              All the ETH and gas of Txn1 would be refund to your address
            </li>
            <li>
              As a general transaction, Txn2 will use 21,000 gas
            </li>
            <li>
              Txn1 cancellation success
            </li>
          </ul>

          <h2>
            Before you start
          </h2>

          <p>
            Enable the <b>Customize transaction nonce</b> option by <i>Settings - Advanced - Customize transaction nonce</i>
          </p>


          <h2>
            OKay, here you go
          </h2>

          <p>
            Just fill the a transaction hash below, (you can find it in your wallet APP or
            <a target="_blank" href="https://etherscan.io">etherscan.io</a>),
            then click the <b>QUERY</b> button:
          </p>
        </div>

        <div class='resp-mt flex items-end space-x-4'>
          <div class='flex-grow'>
            <label for="tx-hash" class="block text-sm font-medium leading-5 label">
              Transaction Hash
            </label>

            <div class='relative mt-2'>
              <input type="text"
                     id='tx-hash'
                     class='input-indigo w-full py-2 px-3 font-mono text-sm lg:text-base'
                     v-model='txnHash' placeholder="0x..." />
            </div>
          </div>

          <button class="flex-grow-0 btn btn-pink justify-center py-2 px-6 text-sm lg:text-base uppercase" @click="query">
            Query
          </button>
        </div>

        <div v-if="txn.hash">



          <div class="resp-mt bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="div-striped-list-header space-x-2">
              <div>
                <h3>
                  Transaction
                </h3>
              </div>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl class="sm:divide-y sm:divide-gray-200">
                <div v-if="txn.blockNumber" class="div-striped-list-card">
                  <dt>
                    Block Number
                  </dt>
                  <dd>
                    #{{ txn.blockNumber }}
                  </dd>
                </div>
                <div class="div-striped-list-card">
                  <dt>
                    Tx Hash
                  </dt>
                  <dd>
                    {{ txn.hash }}
                  </dd>
                </div>
                <div class="div-striped-list-card">
                  <dt>
                    Nonce
                  </dt>
                  <dd>
                    <span class="font-bold text-2xl text-red-700">{{ txn.nonce }}</span>
                  </dd>
                </div>
                <div class="div-striped-list-card">
                  <dt>
                    From
                  </dt>
                  <dd>
                    {{ txn.from }}
                  </dd>
                </div>
                <div class="div-striped-list-card">
                  <dt>
                    To
                  </dt>
                  <dd>
                    {{ txn.to }}
                  </dd>
                </div>
                <div v-if="txn.value" class="div-striped-list-card">
                  <dt>
                    Value
                  </dt>
                  <dd>
                    {{ txn.value }} ETH
                  </dd>
                </div>
              </dl>
            </div>

          </div>

          <div class="mt-4 xl:mt-6 w-full max-w-lg mx-auto text-center">
            <div v-if="txn.blockNumber" class="font-bold text-lg xl:text-xl text-red-700">
              Transaction Status: Success
            </div>
            <div v-else-if="txn.from !== $store.state.ether.account" class="font-bold text-lg xl:text-xl text-red-700">
              Not Your Transaction
            </div>
            <div v-else>
              <div class="font-bold text-lg xl:text-xl text-red-700">
                After clicking the button <i>Try to cancel</i>, don't forget to change the nonce to {{ txn.nonce }}
              </div>

              <div class="mt-4">
                <button v-show="showCancelBtn" class="w-full btn justify-center py-2 text-lg" @click="tryToCancel">
                  Try to cancel
                </button>
              </div>

              <tx-info class="mt-4"
                       :status="txStatus"
                       :hash="txHash"
                       :confirmation="txConfirmation"
                       :message="txMessage"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from 'web3'

export default {
  name: "ether-cancel",
  middleware: ['web3'],

  data() {
    return {
      txnHash: '0xd5be1ffaba42df65a9a85c6f5eee79fb2f21365d63c821c513eb0a2f0f120f09',
      txn: {},

      showCancelBtn: true,

      tx: null,
      txStatus: -1,
      txHash: null,
      txConfirmation: 0,
      txMessage: null,
    }
  },

  methods: {
    async query() {
      await this.$store.state.ether.web3().eth.getTransaction(this.txnHash)
        .then(this.onQuerySuccess)
        .catch(this.onQueryError)



    },
    async onQuerySuccess(payload) {
      console.log(payload)

      this.txn = {
        blockNumber: payload.blockNumber,

        hash: payload.hash,
        nonce: payload.nonce,
        from: payload.from,
        to: payload.to,
        gas: payload.gas,
        gasPrice: Web3.utils.fromWei(payload.gasPrice, 'Gwei'),
        value: Web3.utils.fromWei(payload.value, 'ether'),
      }
    },
    async onQueryError(error) {
      console.error('::: P[/ether] get:', error)
    },

    resetTxInfo() {
      this.txStatus = -1
      this.txHash = null
      this.txConfirmation = 0
      this.txMessage = null
    },

    async tryToCancel() {
      this.resetTxInfo()
      this.showCancelBtn = false
      this.txStatus = 0

      let tx = {
        from: this.$store.state.ether.account,
        to: this.$store.state.ether.account,
        value: 0,
        nonce: this.txn.nonce
      }

      // console.log(tx)
      //
      // await this.$store.state.ether.web3().eth.signTransaction(tx)
      //   .then(console.log)
      //   .catch(this.onError)

      await this.$store.state.ether.web3().eth.sendTransaction(tx)
        .on('transactionHash', this.onTransactionHash)
        .on('receipt', this.onReceipt)
        .on('confirmation', this.onConfirmation)
        .on('error', this.onError)
        .catch(this.onError)
    },
    async onTransactionHash(txHash) {
      this.txStatus = 0
      this.txHash = txHash
    },
    async onReceipt(receipt) {
      this.txMessage = null

      if (receipt.status) {
        this.txStatus = 1
      } else {
        this.txStatus = 3
      }
    },
    async onConfirmation(confirmation) {
      if (this.txStatus < 3 && confirmation < 16) {
        if (confirmation < 6) {
          this.txStatus = 1
        } else  {
          this.txStatus = 2
          this.txn = {}
        }

        this.txConfirmation = confirmation
      }
    },
    async onError(error) {
      this.showCancelBtn = true
      this.txStatus = 3
      this.txMessage = error.message
    },
  }
}
</script>

<style scoped>

</style>
