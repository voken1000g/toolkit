<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Direct Referrals
        </template>

        <template #text>
          {{ records.length }} records,
          referred <comp-number :value="referred" :decimals="18" /> ETH
        </template>
      </layout-h2>

      <div v-if="records.length" class="mt-12 max-w-5xl mx-auto">
        <layout-table-simple>
          <table>
            <thead>
            <tr>
              <th>
                {{ $t('Block') }}
              </th>
              <th>
                Address
              </th>
              <th>
                Payment (DAI)
              </th>
              <th>
                Referrals
              </th>
              <th>
                Rewards (ETH)
              </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="record in records" class="font-mono">
              <td>
                <a target="_blank" :href="fnEtherscan.tx(record.transactionHash)">
                  #<comp-number :value="record.blockNumber"/>
                </a>
              </td>
              <td>
                <a target="_blank" :href="fnEtherscan.address(record.account)">
                  {{ record.account }}
                </a>
              </td>
              <td>
                <span v-if="record.payment === null" class="text-gray-300">
                  loading...
                </span>
                <span v-else-if="record.payment > '0'">
                  <comp-number :value="record.payment" :decimals="6" :mantissa="3" :padding="true"/>
                </span>
                <span v-else class="text-gray-300">
                  N/A
                </span>
              </td>
              <td>
                <span v-if="record.referrals === null" class="text-gray-300">
                  loading...
                </span>
                <nuxt-link v-else-if="record.referrals"
                           :to="localePath('/stat/' + record.account)"
                           class="font-bold text-cool-gray-700">
                  + {{ record.referrals }}
                </nuxt-link>
                <span v-else class="text-gray-300">
                  N/A
                </span>
              </td>

              <td>
                <span v-if="record.reward === null" class="text-gray-300">
                  loading...
                </span>
                <span v-else-if="record.reward > '0'">
                  <comp-number :value="record.reward" :decimals="18"/>
                </span>
                <span v-else class="text-gray-300">
                  N/A
                </span>
              </td>
            </tr>
            </tbody>
          </table>
        </layout-table-simple>
      </div>
    </div>
  </div>
</template>

<script>
import fnEtherscan from "~/utils/fnEtherscan"
import BigNumber from "bignumber.js"

export default {
  name: "StatAccountReferrals",
  data() {
    return {
      fnEtherscan: fnEtherscan,
      account: this.$route.params.account,
      referred: '0',

      records: [],
    }
  },
  async mounted() {
    await this.getEarlyBirdData()
    await this.get()
  },
  methods: {
    async get() {
      await this.$store.state.voken.contract()
        .getPastEvents(
          'ReferrerSet', {
            filter: {
              referrerAccount: this.account
            },
            fromBlock: 0,
            toBlock: 'latest'
          }
        )
        .then(this.onGet)
        .catch(this.onGetError)
    },
    async onGet(events) {
      if (events.length > 0) {
        let records = []
        for (let i = 0; i < events.length; i++) {
          records.unshift({
            blockNumber: events[i].blockNumber,
            transactionHash: events[i].transactionHash,
            account: events[i].returnValues.account,
            payment: null,
            referrals: null,
            reward: null
          })
        }

        this.records = records

        /**
         * Dive in
         */
        for (let i = 0; i < this.records.length; i++) {
          /**
           * Payment
           */
          const paymentEvents = await this.$store.state.vokenEarlyBirdSale.contract()
            .getPastEvents(
              'Payment', {
                filter: {
                  account: this.records[i].account
                },
                fromBlock: 0,
                toBlock: this.toBlock
              }
            )
            .catch(error => {
              console.error('::: C[StatAccountReferrals] getPastEvents - Payment:', error)
            })

          if (!paymentEvents.length) {
            this.records[i].payment = '0'
          } else {
            this.records[i].payment = new BigNumber(paymentEvents[0].returnValues.etherUsdPrice)
              .multipliedBy(paymentEvents[0].returnValues.weiPayment)
              .dividedBy(10 ** 18)
              .toString()
          }

          /**
           * Referrals
           */
          const referralEvents = await this.$store.state.voken.contract()
            .getPastEvents(
              'ReferrerSet', {
                filter: {
                  referrerAccount: this.records[i].account
                },
                fromBlock: 0,
                toBlock: 'latest'
              }
            )
            .catch(error => {
              console.error('::: C[StatAccountReferrals] getPastEvents - ReferrerSet:', error)
            })

          this.records[i].referrals = referralEvents.length

          /**
           * Rewards
           */
          if (!this.records[i].referrals) {
            this.records[i].reward = '0'
          } else {
            const referralRewards = await this.$store.state.vokenEarlyBirdSale.contract()
              .getPastEvents(
                'Reward', {
                  filter: {
                    referrer: this.records[i].account
                  },
                  fromBlock: 0,
                  toBlock: 'latest'
                }
              )
              .catch(error => {
                console.error('::: C[StatAccountReferrals] getPastEvents - Reward:', error)
              })

            let bn = new BigNumber(0)

            for (let j = 0; j < referralRewards.length; j++) {
              bn = bn.plus(referralRewards[j].returnValues.weiReward)
            }

            this.records[i].reward = bn.toString()
          }
        }
      }
    },
    async onGetError(error) {
      console.error('::: C[StatAccountReferrals] get', error)
    },

    async getEarlyBirdData() {
      await this.$store.state.vokenEarlyBirdSale
        .dataContract().methods.data(this.account)
        .call()
        .then(this.onGetEarlyBirdData)
        .catch(error => {
          console.error('::: C[StatAccountReferrals] getEarlyBirdData:', error)
        })
    },
    async onGetEarlyBirdData(payload) {
      this.referred = payload.referred
    }
  }
}
</script>

<style scoped>

</style>
