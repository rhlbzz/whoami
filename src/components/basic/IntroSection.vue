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
  <section class="flex flex-1 items-center flex-col justify-evenly lg:justify-center lg:flex-row">
    <div class="flex flex-col items-center text-center text-center lg:text-right lg:mt-0 lg:items-end">
      <h2 class="head-4">Hi there! I'm</h2>
      <h1 class="head-1">Rachele Bizzarri</h1>
      <h2 class="head-4">and I am a</h2>
      <h2 class="head-2">front-end developer</h2>
    </div>
    <div class="image-container mt-4 flex max-w-[50vw] items-center justify-center lg:max-w-[25vw] lg:mt-0">
      <img :src="SelfImg" class="w-full" />
    </div>
  </section>
</template>
