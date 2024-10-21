<script lang="ts">
import BottomBanner from '@/components/basic/BottomBanner.vue';
import IntroSection from '@/components/basic/IntroSection.vue';
import { usePageTransition } from '@/functions/usePageTransition';
import { defineComponent} from 'vue'

export default defineComponent({
    name: 'HomePage',
    components: {
      BottomBanner,
      IntroSection,
    },
    setup() {

      usePageTransition()
    }

})
</script>

<template>
  <section class="wrapper w-full h-full flex items-center justify-center">

    <IntroSection class="w-full h-full intro" />

    <BottomBanner />
    
  </section>
</template>

<style lang="scss" scoped>
// 
.wrapper {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: $c-dark;
  color: $c-light;
}
</style>
