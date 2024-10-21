<script lang="ts">
import { defineComponent } from 'vue'
import CtaRouter from '@/components/base/CtaRouter.vue';

export default defineComponent({
    name: 'BottomBanner',
    components: {
      CtaRouter
    },
    props: {
      open: { type: Boolean, default: false }
    },
    emits: ['toggle-presentation', 'toggle-projects', 'toggle-contacts'],
    setup() {

      return {
      }
    }

})
</script>

<template>
  <div class="bottom-banner safe-area fixed bottom-2 left-0 right-0 flex items-center justify-between flex-col lg:flex-row">
    <CtaRouter 
      bigger
      :to="{name: 'Presentation'}"
      third
      class="font-bold py-2 lg:py-0"
    >Who Am I?</CtaRouter>
    <CtaRouter 
      bigger
      :to="{name: 'Projects'}"
      orange
      class="font-bold py-2 lg:py-0"
    >Things I've worked on</CtaRouter>
    <CtaRouter 
      bigger
      :to="{name: 'Contacts'}"
      fourth
      class="font-bold py-2 lg:py-0"
    >Where to find me</CtaRouter>
  </div>
</template>