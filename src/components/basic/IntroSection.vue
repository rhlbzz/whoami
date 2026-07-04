<script lang="ts">
import { defineComponent } from 'vue'
import SelfImg from '@/assets/img/self.png?url'

export default defineComponent({
  name: 'IntroSection',
  setup() {
    return {
      SelfImg
    }
  }
})
</script>

<template>
  <!-- <section class="wrapper flex flex-col justify-center items-start"> -->
  <section
    class="wrapper overflow-hidden intro-safe-area flex items-center flex-col lg:justify-center lg:flex-row"
  >
    <div
      class="flex flex-col items-center text-center mt-[20%] text-center lg:text-right lg:mt-0 lg:items-end"
    >
      <h2 class="head-4">Hi there! I'm</h2>
      <h1 class="head-1">Rachele Bizzarri</h1>
      <h2 class="head-4">and I am a</h2>
      <h2 class="head-2">front-end developer</h2>
    </div>
    <img :src="SelfImg" class="mt-4 max-h-[50%] lg:max-h-[100%] lg:mt-0 lg:w-[auto] h-[auto]" />
  </section>
</template>

<style lang="scss" scoped>
//
.wrapper {
  width: 100vw;
  min-height: 100svh;
}
</style>
