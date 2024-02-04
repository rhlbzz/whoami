<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheFooter from './components/basic/TheFooter.vue'
</script>

<template>
  <section class="page">
    <RouterView />

    <TheFooter />
  </section>
</template>