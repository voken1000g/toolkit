<template>
  <layout-w>
    <layout-w-prose class='mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16'>
      <h1>
        VOKEN Toolkit
      </h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Fusce ornare in eros sit amet placerat.
        Cras justo mauris, commodo quis libero aliquet, volutpat pulvinar tortor.
        Proin vulputate varius libero, at commodo augue maximus eget.
      </p>

      <h2>
        Morbi laoreet vehicula erat vel interdum.
      </h2>

      <p>
        Maecenas imperdiet pretium volutpat.
        Duis tristique mi et lorem ultricies rutrum.
        Etiam in sodales massa, sit amet luctus diam.
        Ut sit amet malesuada dui, vitae auctor sapien.
        In ipsum lectus, semper non interdum nec, suscipit in purus.
        Donec ut felis ac risus pretium molestie vitae ut massa.
      </p>

      <h2>
        Nunc et euismod ipsum.
      </h2>

      <p>
        Duis condimentum condimentum nunc sit amet ornare.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Aenean vitae risus nisl.
        Vestibulum non lectus purus.
        Nunc laoreet elit augue, quis pellentesque sapien commodo eu.
      </p>

      <p>
        Nulla ullamcorper, mauris in tincidunt sollicitudin,
        lacus neque malesuada leo, et ultricies tortor dolor nec felis.
        Curabitur vulputate feugiat mattis.
        Praesent ac euismod arcu.
        Fusce rhoncus odio sit amet erat pharetra venenatis.
        Aliquam id urna vel nulla faucibus sodales.
        Maecenas ornare dolor et porttitor sollicitudin.
        Mauris faucibus congue diam, vitae iaculis enim consequat a.
        In sodales et nunc sit amet gravida.
      </p>
    </layout-w-prose>
  </layout-w>
</template>

<script>
import LayoutW from '~/components/LayoutW'
import LayoutWProse from '~/components/LayoutWProse'
export default {
  name: 'index',
  components: { LayoutWProse, LayoutW },
}
</script>

<style scoped>
a {
  @apply py-4 px-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-md;
  @apply font-mono text-white;
}

a:hover {
  @apply to-pink-600;
}

.btn {
  @apply block inline-flex items-center justify-center;
  @apply py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-500;
  @apply border border-transparent rounded-md shadow;
  @apply font-sans text-white;
}

.btn:hover {
  @apply to-indigo-600;
}

.btn:active {
  @apply to-indigo-500 shadow-outline-indigo;
}

.btn-pink {
  @apply from-orange-500 to-pink-500;
}

.btn-pink:hover {
  @apply to-pink-600;
}

.btn-pink:active {
  @apply to-pink-500 shadow-outline-pink;
}
</style>
