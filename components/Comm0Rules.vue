<template>
  <div class="py-16 lg:py-24">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Something Important
        </template>
      </layout-h2>

      <article class="resp-mt mx-auto prose sm:prose-md lg:prose-lg xl:prose-xl max-w-7xl">
        <h3>
          Use the credit carefully
        </h3>

        <ul>
          <li>
            Total: 1,000,000 VokenTB,
            that is $<comp-number :value="marketValue" :decimals="6" :mantissa="2" :padding="true" /> USD for now
          </li>
          <li>
            Available:
            <comp-number :value="$store.state.comm0.credit" :decimals="9"/>
            VokenTB
          </li>
          <li>
            Distributed:
            <comp-number :value="$store.state.comm0.issued" :decimals="9"/>
            VokenTB
          </li>
        </ul>

        <h3>
          About Distribution
        </h3>

        <ul>
          <li>
            Can mint <b>up to 50,000</b> VokenTB to a single address,
            <b>less than 4,000</b> is recommended (not easily challenged)
          </li>
          <li>
            Cannot mint twice to the same address
          </li>
          <li>
            A brief description of the use is required for each distribution, by email
          </li>
        </ul>

        <h3>
          Vesting Plan
        </h3>

        <ul>
          <li>
            3%: released instantly
          </li>
          <li>
            Another 20%: released when finished 50% of the early-bird sale
          </li>
          <li>
            The rest 77%: release 1/1,080 daily after the public-sale is closed
          </li>
        </ul>
      </article>
    </div>
  </div>
</template>

<script>
import BigNumber from "bignumber.js"

export default {
  name: "Comm0Rules",
  computed: {
    marketValue() {
      return new BigNumber(1000000).multipliedBy(this.$store.state.voken.usdPrice).toString()
    }
  }
}
</script>

<style scoped>


</style>
