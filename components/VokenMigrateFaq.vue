<template>
  <div>
    <div class="resp-wide">
      <div class="faq-side-by-side">
        <h2>
          {{ $t('voken.faq.title') }}
        </h2>
        <dl>
          <div>
            <dt>
              {{ $t('voken.faq.When_should_I_migrate_') }}
            </dt>
            <dd>
              <ul>
                <li>
                  {{ $t('voken.faq.WHEN_MIGRATE__1') }}
                </li>
                <li>
                  {{ $t('voken.faq.WHEN_MIGRATE__2') }}
                </li>
                <li>
                  {{ $t('voken.faq.WHEN_MIGRATE__3') }}
                </li>
                <li>
                  {{ $t('voken.faq.WHEN_MIGRATE__4') }}
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "VokenMigrateFaq"
}
</script>

<style scoped>

</style>
