<template>
  <div class="resp-wide pb-40">
    <article class='resp-mt prose lg:prose-lg xl:prose-xl max-w-none'>
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
    </article>
  </div>
</template>

<script>
import fnMulti from '~/utils/fnMulti'

export default {
  name: 'index',
  beforeCreate() {
    const home = fnMulti.home()
    if (home) {
      console.warn('::: P[/] redirect to home:', home)

      const baseUrl = this.$i18n.locale === this.$i18n.defaultLocale ? '' : '/' + this.$i18n.locale
      this.$router.replace(baseUrl + home)
      return null
    }
  }
}
</script>
