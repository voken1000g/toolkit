<template>
  <div class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          Progress
        </template>
      </layout-h2>

      <div class="countdown-progress vn-bg-gr-pink">
        <div class="countdown">
          <div class="font-bold">
            Deadline for Upgrade
          </div>
          <div class="mt-2 text-sm">
            {{ $moment(status.deadline * 1000) }}
          </div>
          <div class="mt-2 font-bold text-2xl xl:text-3xl">
            <span>
              {{ countdown.d }} days
            </span>
            <span>
              {{ countdown.hh }}:{{ countdown.mm }}:{{ countdown.ss }}
            </span>
          </div>
        </div>
        <div class="upgrade">
          <div class="font-bold text-2xl xl:text-3xl">
            <number-obj :value-obj="status.processInPercentObj" />
            %
          </div>
          <div class="mt-2 font-normal text-sm">
            of total 21,000,000 VokenTB
          </div>
          <div class="mt-2 font-bold">
            upgraded
            <span v-show="status.processInPercentObj.d >= '100'">
              (cap reached)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResaleProgress",
  computed: {
    status() {
      return this.$store.state.vokenResale.status
    },
    countdown() {
      return this.$store.state.vokenResale.deadlineCountdown
    },
  }
}
</script>

<style scoped>

</style>
