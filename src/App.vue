<script lang="ts">
import { RouterView } from 'vue-router'
import TransitionPageLayer from '@/components/basic/TransitionPageLayer.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterView,
    TransitionPageLayer
  }
})
</script>


<template>
  <section class="page">
    <TransitionPageLayer />
    <RouterView />
  </section>
</template>