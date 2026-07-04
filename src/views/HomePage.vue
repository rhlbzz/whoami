<script lang="ts">
import BottomBanner from '@/components/basic/BottomBanner.vue'
import IntroSection from '@/components/basic/IntroSection.vue'
import { usePageTransition } from '@/functions/usePageTransition'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    BottomBanner,
    IntroSection
  },
  setup() {
    usePageTransition()
  }
})
</script>

<template>
  <section class="homepage intro-safe-area w-full h-full min-h-[100svh] flex items-center justify-center">
    <IntroSection class="w-full h-full intro" />

    <BottomBanner />
  </section>
</template>

<style lang="scss" scoped>
//
.homepage {
  width: 100vw;
  display: flex;
  max-height: 100svh;
  flex-direction: column;
  background-color: $c-dark;
  color: $c-light;

  --bg-color: $c-dark;
  --accent-color: $c-light;
}
</style>
