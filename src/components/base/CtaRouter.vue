<script lang="ts">
import { isMobile } from 'mobile-device-detect'
import { computed, defineComponent, onMounted, ref, watch, type PropType } from 'vue'
import IconComponent, { type Icons } from '@/components/base/IconComponent.vue';
import gsap from 'gsap';
import { THEME_COLORS } from '@/utils/constants';

export default defineComponent({
  name: 'CtaRouter',
  components: {
    IconComponent
  },
  props: {
    icon: { type: String as PropType<Icons>, default: undefined },
    to: { type: Object, required: true},
    bigger: { type: Boolean, default: false },
    third: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    fourth: { type: Boolean, default: false },
    orange: { type: Boolean, default: false }
  },
  setup(props){
    const hover = ref(false)
    const progressBottomAngles = ref(100)
    const progressTopAngles = ref(100)
    
    const bgColor = computed(() => {
      if (props.orange) return THEME_COLORS.orange
      else if (props.secondary) return THEME_COLORS.secondary
      else if (props.third) return THEME_COLORS.third
      else if (props.fourth) return THEME_COLORS.fourth
      return THEME_COLORS.light
    })

    const tl = gsap.timeline({ paused: true })

    function initAnimation() {
      tl.to(progressTopAngles, { value: 0, duration: 0.3, ease: 'power2.inOut'}, 'enter')
      tl.to(progressBottomAngles, { value: 0, duration: 0.3, ease: 'power2.inOut'}, 'leave')
      tl.to({}, {
        duration: 0.01, 
        onComplete: () => {
          progressTopAngles.value = 100
          progressBottomAngles.value = 100
        }
      }, 'end')
    }

    onMounted(initAnimation)

    watch(hover, (value) => {
      if (isMobile) return
      if (value) tl.tweenFromTo('enter', 'leave')
      else tl.tweenFromTo('leave', 'end')

    })

    return {
      bgColor,
      hover,
      progressTopAngles,
      progressBottomAngles,
    }
  }
})
</script>

<template>
  <router-link
    :to="to"
    class="cta-router cursor-pointer cta inline-block"
    :class="{
      bigger,
      secondary,
      third,
      fourth,
      orange,
      'btn-icon': icon
    }"
    :style="{
      '--progress-bottom-angles': `${progressBottomAngles}%`,
      '--progress-top-angles': `${progressTopAngles}%`,
      '--color': bgColor,
      '--bg-color': bgColor
    }"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <span class="relative">
      <slot />
    </span>
    <span v-if="icon" class="icon-container flex items-center justify-center">
      <IconComponent :icon="icon" class="icon" />
    </span>
  </router-link>
</template>


<style lang="scss" scoped>
.cta-router {
  
  &:not(.btn-icon) {  
    position: relative;

    transition: color 0.3s ease-in-out;
  
    @include hover {
      &:hover { 
        color: $c-dark;

        &::after {
          transform: scaleX(0);
          transition: transform 0.3s ease-in-out;
        }
      }
    }

    &::after {
      content: "";
      position: absolute;
      width: calc(100% + 4px);
      height: 1px;
      bottom: -1px;
      left: -2px;
      padding: 0 2px;
      background-color: var(--color);
      transform: scaleX(1);
      transition: transform 0.3s ease-in-out;
    }

    &::before {
      position: absolute;
      content: "";
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      bottom: -1px;
      left: -4px;
      padding: 0 2px;
      clip-path: polygon(0% var(--progress-top-angles), 100% var(--progress-top-angles), 100% var(--progress-bottom-angles), 0 var(--progress-bottom-angles));
      background-color: var(--bg-color);
    }

    
    
    @include screen(lg) {
      &::after {
        content: "";
        width: calc(100% + 8px);
        height: 2px;
        bottom: -4px;
        left: -8px;
        padding: 0 4px;
      }

      &::before {
        width: calc(100% + 8px);
        height: calc(100% + 8px);
        bottom: -4px;
        left: -8px;
        padding: 0 4px;
      }
    }
    
  }
}

.bigger {
  font-size: rem(18);
  
  @include screen(lg) {
    font-size: rem(24);
  }
}

.icon-container {
  border: 1px solid $c-highlight;  
  width: rem(32);
  height: rem(32);
  border-radius: rem(24);
  transition: border-color 0.3s ease-in-out;

  @include hover {
    &:hover { 
      border-color: $c-cta;

      .icon {
        color: $c-cta;
        transform: rotate(90deg);
      }
    }
  }

  @include screen(lg) {
    width: rem(40);
    height: rem(40);
  }
}

.third {
  color: $c-third;
}

.secondary {
  color: $c-secondary;
}

.orange {
  color: $c-orange;
}

.fourth {
  color: $c-fourth;
}

.icon {
  color: $c-highlight;
  width: rem(20);
  height: rem(20);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>