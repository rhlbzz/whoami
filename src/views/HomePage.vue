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
  <section class="pb-10">
    <HelloWorld class="sm:mt-40px md:mt-80px"/>
    <div v-if="false" class="mt-5">
      <p>If you wanna take a look at some projects where I've worked on, <RouterLink class="link" :to="{name: 'Projects'}">check it out</RouterLink>!</p>
    </div>
  </section>
</template>
