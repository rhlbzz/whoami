<script lang="ts">
import { defineComponent } from 'vue'
import CtaRouter from '@/components/base/CtaRouter.vue'

export default defineComponent({
  name: 'PageLayout',
  components: {
    CtaRouter
  }
})
</script>

<template>
  <section class="wrapper w-full h-full flex items-center">
    <CtaRouter :to="{ name: 'Home' }" icon="cross" class="homepage fixed top-2 right-2 lg:top-8 lg:right-8" />
    <div class="safe-area">
      <h1 class="head-1 mb-4 lg:mb-8">
        <slot name="title" />
      </h1>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
//
.wrapper {
  min-height: 100svh;
  width: 100vw;
  padding: rem(12) 0;

  @include screen(lg) {
    padding: 0;
  }
}
</style>
