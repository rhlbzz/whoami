<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import cross from '@/assets/svg/cross.svg'

const icons = {
  'cross': cross,
}

export type Icons = 'cross'

export default defineComponent({
  name: 'IconComponent',
  props: {
    icon: { type: String as PropType<Icons>, required: true }
  },
  setup (props) {
    return {
      component: icons[props.icon]
    }
  }

})
</script>

<template>
  <component :is="component" />
</template>