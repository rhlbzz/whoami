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
  <section>
    <HelloWorld class="sm:mt-40px md:mt-80px"/>
  </section>
</template>
