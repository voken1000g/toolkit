<template>
  <div class='resp-wide pb-32'>
    <div class='resp-mt space-y-6'>
      <div>
        <label for='input-default'>
          Input Default
        </label>

        <input type='text'
               id='input-default'
               class='mt-1 w-full py-3 px-4 font-mono text-sm md:text-base'
               placeholder='Placeholder...' />
      </div>

      <div>
        <label for='input-indigo'>
          Input Indigo
        </label>

        <input type='text'
               id='input-indigo'
               class='mt-1 input-indigo w-full py-3 px-4 font-mono text-sm md:text-base'
               placeholder='Placeholder...' />
      </div>

      <div>
        <label for='input-teal'>
          Input Teal
        </label>

        <input type='text'
               id='input-teal'
               class='mt-1 input-teal w-full py-3 px-4 font-mono text-sm md:text-base'
               placeholder='Placeholder...' />
      </div>

      <!-- default -->
      <div>
        <label for='default1'>
          Label Indigo
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='default1'
                 class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                 placeholder='Placeholder...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
            <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
          </div>
        </div>
      </div>

      <!-- error -->
      <div class='error'>
        <label for='error1'>
          Label Error
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='error1'
                 class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                 placeholder='Placeholder...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
            <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
          </div>
        </div>
      </div>

      <!-- success -->
      <div class='success'>
        <label for='success1'>
          Label Success
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='success1'
                 class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                 placeholder='Placeholder...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
            <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
          </div>
        </div>
      </div>

      <!-- warn -->
      <div class='warn'>
        <label for='warn1'>
          Label Success
        </label>

        <div class='relative mt-1'>
          <input type='text'
                 id='warn1'
                 class='input-indigo w-full py-3 pl-4 pr-12 font-mono text-sm md:text-base'
                 placeholder='Placeholder...' />

          <div class='absolute block inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
            <fa class='fa-error' :icon="['fas', 'times']" />
            <fa class='fa-success' :icon="['fas', 'check']" />
            <fa class='fa-warn' :icon="['fas', 'exclamation-triangle']" />
          </div>
        </div>
      </div>
    </div>

    <div class='resp-mt w-full md:max-w-lg mx-auto space-y-4'>
      <div>
        <button type='button' class='w-full btn btn-light justify-center py-3'>
          Button Light
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn justify-center py-3'>
          Button Default
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn btn-pink justify-center py-3'>
          Button Pink
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn btn-yellow justify-center py-3'>
          Button Yellow
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn btn-green justify-center py-3'>
          Button Green
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn btn-teal justify-center py-3'>
          Button Teal
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn btn-purple justify-center py-3'>
          Button Purple
        </button>
      </div>

      <div>
        <button type='button' class='w-full btn btn-gray justify-center py-3'>
          Button Gray
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ui'
}
</script>

<style scoped>

</style>
