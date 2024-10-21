<script lang="ts">
import { useMagicKeys, useScrollLock, useVModel } from '@vueuse/core'
import { defineComponent, ref, watch } from 'vue'
import CtaIcon from '@/components/base/CtaIcon.vue';
import gsap from 'gsap';

export default defineComponent({
    name: 'ModalComponent',
    components: {
      CtaIcon
    },
    props: {
      open: { type: Boolean, default: false },
      secondary: { type: Boolean, default: false },
      orange: { type: Boolean, default: false },
    },
    setup(props, { emit }) {

      const vOpen = useVModel(props, 'open', emit)
      const scrollLocked = useScrollLock(document.documentElement)
      

      const { escape } = useMagicKeys()

      function handleClose() {
        vOpen.value = false
      }

      watch(escape, escaped => escaped && handleClose)

      watch(vOpen, (v) => {
        scrollLocked.value = v
      })

      return {
        vOpen,
        handleClose
      }
    }

})
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div 
        v-if="vOpen" 
        ref="modal" 
        class="wrapper fixed inset-0"
        :class="{secondary, orange}"
        @keydown.esc="handleClose"

      >
        <CtaIcon icon="cross" class="close fixed top-4 right-4" @click="handleClose" />
        <slot/>
      </div>
    </Transition>

  </Teleport>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: rem(80);
}

.secondary {  
  background-color: $c-secondary;
  color: $c-dark;
}
</style>