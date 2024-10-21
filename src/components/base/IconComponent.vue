<script>
import { computed, defineComponent } from 'vue'
import cross from '@/assets/svg/cross.svg'

const icons = {
  'cross': cross,
}

export default defineComponent({
  name: 'IconComponent',
  props: {
    icon: { type: String, required: true }
  },
  setup (props) {
    const component = computed(() => (icons[props.icon]))

    return {
      component
    }
  }

})
</script>

<template>
  <component :is="component" />
</template>