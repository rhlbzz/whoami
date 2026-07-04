<script lang="ts">
import SimpleCtaComponent from '@/components/base/SimpleCtaComponent.vue'
import PageLayout from '@/components/basic/PageLayout.vue'
import { usePageTransition } from '@/functions/usePageTransition'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectsPage',
  components: {
    PageLayout,
    SimpleCtaComponent
  },
  setup() {
    usePageTransition()
  }
})
</script>

<template>
  <PageLayout class="projects-page">
    <template #title>
      <span class="c-projects-contrast">Projects</span>
    </template>
    <template #body>
      <p class="p mb-8">
        Here you can find
        <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://monogrid.com/en/people/rachele-bizzarri">some projects</SimpleCtaComponent>
        that I've <span class="c-projects-contrast">worked</span> on during these years 🤗.
      </p>
      <p class="p mb-4">My favorites:</p>
      <ul>
        <li class="head-4">
          Dolce&Gabbana Beauty - Dolce |
          <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://monogrid.com/en/project/dolcegabbana-beauty-dolce">case study</SimpleCtaComponent>
        </li>
        <li class="head-4">
          Galleria Nazionale delle Marche - La Galleria Ideale |
          <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://galleriaideale.gndm.it/it/">website</SimpleCtaComponent>
          |
          <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://monogrid.com/en/project/gndm-la-galleria-ideale">case study</SimpleCtaComponent>
        </li>
        <li class="head-4">
          Expo 58 - Immersive Experience |
          <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://expo-58.historia.europa.eu/#/en/">website</SimpleCtaComponent>
          |
          <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://monogrid.com/en/project/expo-58-immersive-experience">case study</SimpleCtaComponent>
        </li>
        <li class="head-4">
          Engine - AR Experience |
          <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" href="https://monogrid.com/en/project/engine-ar-experience">case study</SimpleCtaComponent>
        </li>
      </ul>
    </template>
  </PageLayout>
</template>

<style lang="scss" scoped>
//
.wrapper {
  height: 100vh;
  width: 100vw;
  background-color: $c-orange;
  color: $c-dark;

  --bg-color: $c-orange;
  --accent-color: #00864d;
}

ul {
  margin-left: rem(20);
  list-style-type: circle;

  li {
    margin-bottom: rem(8);
  }
}
</style>
