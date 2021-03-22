<template>
  <div>
    <div class="resp-wide py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div>
          <h2 class="text-3xl font-extrabold text-gray-900">
            Ready to Voken Blockchain?
          </h2>
          <p class="mt-4 leading-7 text-lg text-gray-500">
            Proin in neque sit amet sem dictum rutrum quis a tellus. Sed fringilla tellus a sapien tempus commodo.
            Suspendisse maximus viverra est sit amet sollicitudin.
          </p>
        </div>
        <div class="mt-12 lg:mt-0 lg:col-span-2">
          <dl class="space-y-12">
            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Lorem ipsum dolor sit amet?
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                Donec nulla magna, maximus id eleifend sed, molestie eu ligula. Etiam eget risus in ipsum fringilla
                tempor. Nullam tincidunt tortor eget odio varius varius. Pellentesque eget tincidunt turpis. Maecenas
                laoreet volutpat justo, eu maximus purus fringilla vel.
              </dd>
            </div>

            <div>
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Nunc faucibus sem ut eros tempor fermentum?
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                <p>
                  In pulvinar congue suscipit. Integer id ipsum erat. Curabitur ac lacinia odio, quis volutpat nunc.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec
                  sed diam in mauris lobortis congue. Aliquam interdum mi justo, quis dignissim ante suscipit in. Sed
                  fermentum leo ac sem mattis, vel finibus augue aliquet.
                </p>
              </dd>
            </div>

            <div v-if="vokenAccount.balance > '0' && vokenAccount.available === '0'">
              <dt class="text-lg leading-6 font-medium text-gray-900">
                Why does it only show an Early-Bird Sale option for me?
              </dt>
              <dd class="mt-2 text-base text-gray-500">
                <p>
                  In a nunc egestas, scelerisque leo quis, volutpat ipsum. Sed sit amet risus purus. Cras dapibus nibh
                  nec magna condimentum auctor. Integer commodo sapien in orci placerat imperdiet. In hac habitasse
                  platea dictumst. Nam dictum nibh orci, placerat pulvinar elit viverra vel. Suspendisse quis
                  pellentesque lacus. Sed et mollis nulla, et auctor mauris. Ut quis lacus dapibus libero faucibus
                  pellentesque eu eu risus.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BigNumber from "bignumber.js";

export default {
  name: "VokenMigrateFaq",
  computed: {
    vokenAccount() {
      return this.$store.state.voken.account
    },
  },
}
</script>

<style scoped>

</style>
