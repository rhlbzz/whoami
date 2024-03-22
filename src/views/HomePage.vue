<script lang="ts">
import HelloWorld from '@/components/basic/HelloWorld.vue';
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HomePage',
    components: {
      HelloWorld
    },
    setup() {
        return {}
    }

})
</script>

<template>
  <section class="w-full h-full flex items-center justify-center">
    <HelloWorld/>
    <div v-if="false" class="mt-5">
      <p>If you wanna take a look at some projects I've worked on, <RouterLink class="link" :to="{name: 'Projects'}">check it out</RouterLink>!</p>
    </div>
  </section>
</template>
