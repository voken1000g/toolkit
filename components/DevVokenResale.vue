<template>
  <div class="py-20">
    <div class="resp-wide bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="div-striped-list-header space-x-2">
        <div>
          <h3>
            Voken1/2 Resale & Upgrade
          </h3>
        </div>
      </div>
      <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
          <div class="div-striped-list-card">
            <dt>
              Deadline
            </dt>
            <dd>
              <div>
                {{ $moment(status.deadline * 1000) }}
              </div>
              <div class="mt-2">
                {{ countdown.d }} days, {{ countdown.hh }}:{{ countdown.mm }}:{{ countdown.ss }}
              </div>
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              Total VokenTB
            </dt>
            <dd>
              {{ status.vokenTbTotalStr }}
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              Percent
            </dt>
            <dd>
              {{ status.processInPercentStr }}%
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              USD Audit
            </dt>
            <dd>
              $ {{ status.usdAuditStr }}
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              USD Claimed
            </dt>
            <dd>
              $ {{ status.usdClaimedStr }}
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              USD Received
            </dt>
            <dd>
              $ {{ status.usdReceivedStr }}
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              From Voken1.0
            </dt>
            <dd>
              {{ status.v1ClaimedStr }} + {{ status.v1BonusesStr }}
            </dd>
          </div>

          <div class="div-striped-list-card">
            <dt>
              From Voken2.0
            </dt>
            <dd>
              {{ status.v2ClaimedStr }} + {{ status.v2BonusesStr }}
            </dd>
          </div>


        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DevVokenResale",
  computed: {
    status() {
      return this.$store.state.vokenResale.status
    },
    countdown() {
      return this.$store.state.vokenResale.deadlineCountdown
    }

  }
}
</script>

<style scoped>

</style>
