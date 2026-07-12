<script lang="ts">
import { defineComponent } from 'vue'
import CtaRouter from '@/components/base/CtaRouter.vue'

export default defineComponent({
  name: 'BottomBanner',
  components: {
    CtaRouter
  },
  props: {
    open: { type: Boolean, default: false }
  },
  emits: ['toggle-presentation', 'toggle-projects', 'toggle-contacts'],
  setup() {
    return {}
  }
})
</script>

<template>
  <div class="bottom-banner w-full flex items-center justify-around flex-col lg:flex-row">
    <CtaRouter bigger :to="{ name: 'Presentation' }" class="presentation font-bold my-1 lg:my-0"> Who Am I? </CtaRouter>
    <CtaRouter bigger :to="{ name: 'Projects' }" class="projects font-bold my-1 lg:my-0">Things I've worked on</CtaRouter>
    <CtaRouter bigger :to="{ name: 'Contacts' }" class="contacts font-bold my-1 lg:my-0"> Where to find me </CtaRouter>
  </div>
</template>

<style lang="scss" scoped></style>
