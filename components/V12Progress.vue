<template>
  <div class="py-16">
    <div class="resp-wide">
      <layout-h2>
        <template #title>
          {{ $t('v12.V12_Progress') }}
        </template>

        <template #text>
          <span class="font-mono break-all">
            {{ DAPP.CONTRACT_ADDRESS_RESALE }}
          </span>
        </template>
      </layout-h2>

      <div class="resp-mt countdown-progress vn-bg-gr-pink">
        <div class="countdown">
          <div class="font-bold">
            {{ $t('v12.Deadline_for__') }}
          </div>
          <div class="mt-2 text-sm">
            {{ $moment(status.deadline * 1000) }}
          </div>
          <div class="mt-2 font-bold text-2xl xl:text-3xl">
            <span v-show="countdown.d > '0'">
              {{ countdown.d }} {{ $t('v12.days') }}
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
            {{ $t('v12.of_total') }} 21,000,000 VokenTB
          </div>
          <div class="mt-2 font-bold">
            {{ $t('v12.upgraded') }}
            <span v-show="status.processInPercentObj.d >= '100'">
              {{ $t('v12._cap_reached_') }}
            </span>
          </div>
        </div>
      </div>

      <div class="resp-mt px-4 text-lg xl:text-xl text-center">
        <span class="font-bold text-orange-600" v-if="status.deadlinePassed">{{ $t('v12.DEADLINE_PASSED') }}</span>
        <span class="font-normal text-gray-500" v-else>{{ $t('v12.TWO_OPTIONS_4_YOU') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import DAPP from '~/utils/constants/dapp'

export default {
  name: "V12Progress",
  data() {
    return {
      DAPP: DAPP,
    }
  },
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
