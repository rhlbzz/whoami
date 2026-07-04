<script lang="ts">
import { defineComponent } from 'vue'
import SimpleCtaComponent from '@/components/base/SimpleCtaComponent.vue'

export default defineComponent({
  name: 'PageLayout',
  components: {
    SimpleCtaComponent
  },
  props: {
    caseLink: { type: String, required: true }
  }
})
</script>

<template>
  <div class="project-card">
    <h3 class="head-3 c-projects-contrast mb-4">
      <slot name="title" />
    </h3>
    <slot name="body"></slot>
    <p class="p">You can find the <SimpleCtaComponent cta-theme="projects_contrast" target="_blank" rel="nofollow noopener noreferrer" :href="caseLink">case study</SimpleCtaComponent> at the link below.</p>
  </div>
</template>

<style lang="scss" scoped>
//
.wrapper {
  min-height: 100vh;
  width: 100vw;
}
</style>
