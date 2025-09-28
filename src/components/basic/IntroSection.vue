<script lang="ts">
import { defineComponent } from 'vue'
import EmojiWave from '@/assets/img/emoji-wave-01.png?url'

export default defineComponent({
    name: 'IntroSection',
    setup() {

      return {
        EmojiWave
      }
    }
})
</script>

<template>
  <!-- <section class="wrapper flex flex-col justify-center items-start"> -->
  <section class="wrapper overflow-hidden intro-safe-area flex justify-center items-center flex-col lg:flex-row">
    <div class="flex flex-col column-01 justify-center items-center text-center lg:text-left lg:items-start lg:w-[80%]">
      <h2 class="head-4">Hi there! I'm</h2>
      <h1 class="head-1">Rachele Bizzarri</h1>
      <h2 class="head-4">and I am a</h2>
      <h2 class="head-2">web developer.</h2>
    </div>
    <div class="flex column-02 w-[35%] mt-[2%] lg:w-[20%] lg:mt-[0]">
      <img :src="EmojiWave" class="w-full" />
    </div>
  </section>
</template>


<style lang="scss" scoped>
// 
.wrapper {
  width: 100vw;
  min-height: 100svh;
}
</style>