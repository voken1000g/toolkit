<template>
  <button class="bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :class="{ 'bg-indigo-600 border-transparent': isOn, 'bg-cool-gray-100 border-gray-300': !isOn }"
  >
      <span class="translate-x-0 pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            :class="{ 'translate-x-5': isOn, 'translate-x-0': !isOn }"
      >

        <span class="opacity-100 ease-in duration-200 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
              :class="{ 'opacity-0 ease-out duration-100': isOn, 'opacity-100 ease-in duration-200': !isOn }"
        >
          <svg class="bg-white h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </span>

        <span class="opacity-0 ease-out duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
              :class="{ 'opacity-100 ease-in duration-200': isOn, 'opacity-0 ease-out duration-100': !isOn }"
        >
          <svg class="bg-white h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"/>
          </svg>
        </span>
      </span>
  </button>
</template>

<script>
export default {
  name: 'CompSwitch',
  props: ['isOn']
}
</script>
