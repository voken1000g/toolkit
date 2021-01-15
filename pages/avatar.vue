<template>
  <layout-w class='pb-12'>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        {{ $t('nav.Avatar') }}
      </h1>

      <p>
        {{ $t('nav.Avatar_') }}
      </p>
    </layout-w-prose>

    <div class='w-full md:max-w-2xl mt-10 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 mx-auto font-mono text-sm md:text-base'>
      <div class='w-14 h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mx-auto bg-white rounded-md shadow-md lg:shadow-lg'>
        <vue-avatar v-show='something' :value='something'/>
        <div v-show='!something'
             class='h-full flex items-center justify-center text-2xl lg:text-3xl xl:text-4xl text-gray-300'
        >
          <fa :icon="['far', 'smile-wink']" />
        </div>
      </div>

      <label for='something'
             class='block mt-4 md:mt-6 lg:mt-8 xl:mt-12 2xl:mt-14 font-medium text-gray-700 text-left'>
        {{ $t('avatar.Input_something') }}
      </label>

      <input type='text'
             name='something'
             id='something'
             class='mt-1 input-indigo w-full py-3 px-6 font-mono text-sm md:text-base'
             v-model='something'
             :placeholder='$t("avatar.Input_something_to_auto_generate_")'>
    </div>

    <layout-footer-simple class='font-mono text-gray-600 text-center'>
      <div>
        <span>
          {{ $t('avatar.Documentation.text') }}
        </span>
        <a class='a-indigo' target='_blank' :href='$t("avatar.Documentation.href")'>
          {{ $t('avatar.Documentation.href') }}
        </a>
      </div>

      <div class='mt-2'>
        <span>
          npm:
        </span>
        <a class='a-indigo' target='_blank' href='https://www.npmjs.com/package/@voken/avatar'>
          https://www.npmjs.com/package/@voken/avatar
        </a>
      </div>

      <div class='mt-2'>
        <span>
          GitHub:
        </span>
        <a class='a-indigo' target='_blank' href='https://github.com/voken1000g/npm-avatar'>
          https://github.com/voken1000g/npm-avatar
        </a>
      </div>
    </layout-footer-simple>
  </layout-w>
</template>

<script>
import VueAvatar from '@voken/vue-avatar'
import LayoutW from '~/components/LayoutW'
import LayoutFooterSimple from '~/components/LayoutFooterSimple'
import LayoutWProse from '~/components/LayoutWProse'

export default {
  name: 'avatar',
  layout: 'indigoParticles',
  components: { LayoutWProse, LayoutFooterSimple, LayoutW, VueAvatar },
  head() {
    return {
      title: this.$t('nav.Avatar')
    }
  },
  data() {
    return {
      something: ''
    }
  }
}
</script>
