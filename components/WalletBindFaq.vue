<template>
  <div>
    <div class="faq-offset">
      <div class="faq-wrapper resp-wide">
        <div class="faq-header">
          <h2>
            {{ $t('voken.bind.Ready_to_Voken_Blockchain_') }}
          </h2>
          <p class="">
            {{ $t('voken.bind.Just_one_step_away__') }}
          </p>
        </div>
        <div class="faq-body">
          <dl>
            <div>
              <dt>
                {{ $t('voken.bind.What_will_happen__bind__') }}
              </dt>
              <dd>
                <ul>
                  <li>{{ $t('voken.bind.After_you_set_up__') }}</li>
                </ul>
                <ul>
                  <li>
                    {{ $t('voken.bind.If_you_need_more_service_traffic__') }}
                    <nuxt-link :to="localePath('/voken/migrate')">
                      {{ $t('voken.bind.migrate') }}
                    </nuxt-link>
                    {{ $t('voken.bind.some_from_Ethereum_to__') }}
                  </li>
                  <li>
                    {{ $t('voken.bind.The_Voken_wallet_address__key__') }}
                    <nuxt-link :to="localePath('/voken/early-bird-referral')">
                      {{ $t('voken.bind.the_referral_program') }}
                    </nuxt-link>
                    {{ $t('voken.bind.learn_more_details_by_clicking__') }}
                  </li>
                </ul>
              </dd>
            </div>

            <div>
              <dt>
                {{ $t('voken.bind.What_is_the_relationship_between__') }}
              </dt>
              <dd>
                <ul>
                  <li>
                    {{ $t('voken.bind.VokenTB_is_created__on_Ethereum__') }}
                  </li>
                  <li>
                    {{ $t('voken.bind.Now__beta_launched') }}
                  </li>
                  <li>
                    {{ $t('voken.bind.People_can_get_VokenTB_from') }}
                    <nuxt-link :to="localePath('/voken/early-bird')">
                      {{ $t('voken.Early_Bird_Sale') }}
                    </nuxt-link>
                    {{ $t('or') }} {{ $t('voken.Public_Sale') }},
                    {{ $t('voken.bind.which_is__way_to_raise_funds__') }}
                  </li>
                  <li>
                    {{ $t('voken.bind.You_can') }}
                    <nuxt-link :to="localePath('/voken/migrate')">
                      {{ $t('voken.bind.migrate') }}
                    </nuxt-link>
                    {{ $t('voken.bind.VokenTB_to_your_wallet_on_Voken_Blockchain__') }}
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WalletBindFaq"
}
</script>

<style scoped>

</style>
