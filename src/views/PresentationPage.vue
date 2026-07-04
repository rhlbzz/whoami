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
        My name is
        <span class="c-presentation-contrast">Rachele Bizzarri</span> and I've been working as a <span class="c-presentation-contrast">front-end developer</span> since <span class="c-presentation-contrast">2018</span>.
      </p>
      <p class="p mt-3">I was born in Volterra, a <i>borgo</i> of Etruscan heritage in the middle of Tuscany hills, where, some years later, I graduated in accounting with a curriculum in programming at Istituto Tecnico Commerciale F. Niccolini. During the summer of <span class="c-presentation-contrast">2013</span>, I was wondering how I could mix my favorite subjects - computer science and literature - to build my future, when I suddenly found what I was looking for at <span class="c-presentation-contrast">Università di Pisa</span>. That September, I began my <span class="c-presentation-contrast">studies</span> in <span class="c-presentation-contrast">Digital Humanities</span>, and in <span class="c-presentation-contrast">2019</span> I completed my <span class="c-presentation-contrast">master's degree</span> with a <span class="c-presentation-contrast">thesis</span> on <span class="c-presentation-contrast">scrollytelling</span> - a digital, interactive form of storytelling. For it, I <span class="c-presentation-contrast">developed</span> a <span class="c-presentation-contrast">JavaScript library</span> from <span class="c-presentation-contrast">scratch</span> to help other digital humanists create their own scrollytelling articles and posts.</p>
      <p class="p mt-3">Besides these two work-related passions, I consider myself quite picky when it comes to music, and a demanding reader too — and I believe that same attention shows in how I approach my daily work: I'm <span class="c-presentation-contrast">always looking</span> for the <span class="c-presentation-contrast">perfect detail</span> or the <span class="c-presentation-contrast">most elegant solution</span>, the <span class="c-presentation-contrast">right compromise</span> between delivering work that's not only <span class="c-presentation-contrast">functional</span> but <span class="c-presentation-contrast">aesthetic</span> too.</p>
      <p class="p mt-3">
        At the moment, I’m working at
        <SimpleCtaComponent cta-theme="presentation_contrast" href="https://hexergy.it/" target="_blank" rel="nofollow noopener noreferrer"> HexErgy </SimpleCtaComponent>.
      </p>
      <p class="p mt-12">
        Pssst… over here! This is where you'll find my
        <SimpleCtaComponent cta-theme="presentation_contrast" href="/cv.pdf" target="_blank" rel="noopener">CV</SimpleCtaComponent>, if you want to dig into my professional experience and academic background 😄​!​
      </p>
    </template>
  </PageLayout>
</template>

<style lang="scss" scoped>
//
.presentation-page {
  background-color: $c-third;
  color: $c-dark;

  --bg-color: #00bbba;
  --accent-color: #9c4f9c;
}
</style>
