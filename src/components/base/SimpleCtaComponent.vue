<script lang="ts">
import { isMobile } from 'mobile-device-detect'
import { THEME_COLORS } from '@/utils/constants'
import gsap from 'gsap'
import { defineComponent, onMounted, ref, watch, type PropType } from 'vue'

type ColorsType = 'purpled' | 'presentation_contrast' | 'contacts_contrast' | 'projects_contrast'

export default defineComponent({
  name: 'SimpleCtaComponent',
  props: {
    ctaTheme: { type: String as PropType<ColorsType>, default: 'purpled' }
  },
  setup() {
    const hover = ref(false)
    const progressBottomAngles = ref(100)
    const progressTopAngles = ref(100)

    const tl = gsap.timeline({ paused: true })

    function initAnimation() {
      tl.to(progressTopAngles, { value: 0, duration: 0.3, ease: 'power2.inOut' }, 'enter')
      tl.to(progressBottomAngles, { value: 0, duration: 0.3, ease: 'power2.inOut' }, 'leave')
      tl.to(
        {},
        {
          duration: 0.01,
          onComplete: () => {
            progressTopAngles.value = 100
            progressBottomAngles.value = 100
          }
        },
        'end'
      )
    }

    onMounted(initAnimation)

    watch(hover, (value) => {
      if (isMobile) return
      if (value) tl.tweenFromTo('enter', 'leave')
      else tl.tweenFromTo('leave', 'end')
    })

    return {
      THEME_COLORS,
      hover,
      progressTopAngles,
      progressBottomAngles
    }
  }
})
</script>

<template>
  <a
    v-bind="$attrs"
    class="simple-cta-component relative inline-block"
    :style="{
      '--progress-bottom-angles': `${progressBottomAngles}%`,
      '--progress-top-angles': `${progressTopAngles}%`,
      '--color': THEME_COLORS[ctaTheme]
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <span class="relative">
      <slot />
    </span>
  </a>
</template>

<style lang="scss" scoped>
.simple-cta-component {
  transition:
    color 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;
  font-weight: normal;
  color: var(--accent-color, var(--color));

  @include hover {
    &:hover {
      color: var(--bg-color, $c-dark);
      font-weight: bold;

      &::after {
        transform: scaleX(0);
        transition: transform 0.3s ease-in-out;
      }
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: -4px;
    padding: 0 4px;
    background-color: var(--color);
    transform: scaleX(1);
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: calc(100% + 2px);
    bottom: -2px;
    left: -4px;
    padding: 0 4px;
    clip-path: polygon(0% var(--progress-top-angles), 100% var(--progress-top-angles), 100% var(--progress-bottom-angles), 0 var(--progress-bottom-angles));
    background-color: var(--color);
  }
}
</style>
