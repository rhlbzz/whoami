<script lang="ts">
import { defineComponent } from 'vue'
import { GMAIL_MAIL, LINKEDIN_PROFILE_LINK } from '@/utils/constants'
import CtaRouter from '@/components/base/CtaRouter.vue'
import { usePageTransition } from '@/functions/usePageTransition'
import SimpleCtaComponent from '@/components/base/SimpleCtaComponent.vue'
import PageLayout from '@/components/basic/PageLayout.vue'

export default defineComponent({
  name: 'PresentationPage',
  components: {
    PageLayout,
    SimpleCtaComponent
  },
  setup(props, { emit }) {
    usePageTransition()

    return {
      GMAIL_MAIL,
      LINKEDIN_PROFILE_LINK
    }
  }
})
</script>

<template>
  <PageLayout class="presentation-page">
    <template #title>
      <span class="c-presentation-contrast">Hello world! 👋🏼</span>
    </template>
    <template #body>
      <p class="p">
        My name is <span class="c-presentation-contrast">Rachele Bizzarri</span> and I'm working as
        a <span class="c-presentation-contrast">web developer</span> since
        <span class="c-presentation-contrast">2018</span>.
      </p>
      <p class="p mt-3">
        I was born in Volterra, a <i>borgo</i> of etrurian heritage in the middle of Tuscany hills,
        where some years later I graduated in accounting with a curriculum in programming at
        Istituto Tecnico Commerciale F. Niccolini. During the summer of
        <span class="c-presentation-contrast">2013</span>, I was wondering how I could mix my
        favorite subjects - informatics and literature - for building my future, when suddenly I
        found what I was looking for at
        <span class="c-presentation-contrast">Università di Pisa</span>. Thus, in September, I
        started my <span class="c-presentation-contrast">studies</span> in
        <span class="c-presentation-contrast">Digital Humanities</span> and in
        <span class="c-presentation-contrast">2019</span> I finished my
        <span class="c-presentation-contrast">master's degree</span> with a
        <span class="c-presentation-contrast">thesis</span> on
        <span class="c-presentation-contrast">scrollytelling</span> - a digital interactive
        interpretation of storytelling, <span class="c-presentation-contrast">developing</span> a
        <span class="c-presentation-contrast">JavaScript library</span> from
        <span class="c-presentation-contrast">scratch</span> with the purpose of helping other
        digital humanists in the creation of scrollytelling articles or posts.
      </p>
      <p class="p mt-3">
        Beside these two work-related passions, I consider myself really picky in my music tastes
        and I am a demanding reader, and I believe that the same attention is reflected in how I
        manage my daily work: I am <span class="c-presentation-contrast">always looking</span> for
        the <span class="c-presentation-contrast">perfect detail</span> or the
        <span class="c-presentation-contrast">most beautiful solution</span> that could help in
        reaching the <span class="c-presentation-contrast">right compromise</span> for deliver not
        only a <span class="c-presentation-contrast">functional</span> work but
        <span class="c-presentation-contrast">aesthetic</span>.
      </p>
      <p class="p mt-3">
        At the moment, I’m working at
        <SimpleCtaComponent
          cta-theme="presentation_contrast"
          href="https://hexergy.it/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          HexErgy
        </SimpleCtaComponent>
        in <span class="c-presentation-contrast">Florence</span> .
      </p>
    </template>
  </PageLayout>
</template>

<style lang="scss" scoped>
//
.presentation-page {
  background-color: $c-third;
  color: $c-dark;
}
</style>
