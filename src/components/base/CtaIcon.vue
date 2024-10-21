<script>
import { defineComponent } from 'vue'
import IconComponent from '@/components/base/IconComponent.vue'

export default defineComponent({
  name: 'CtaIcon',
  components: {
    IconComponent
  },
  props: {
    icon: { type: String, require: true }
  }
})
</script>

<template>
  <button class="cta-icon flex items-center justify-center cursor-pointer">
    <IconComponent :icon="icon" class="icon" />
  </button>
</template>

<style lang="scss" scoped>
.cta-icon {
  border: 1px solid $c-highlight;  
  border-radius: rem(24);
  transition: border-color 0.3s ease-in-out;
  width: rem(20);
  height: rem(20);

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

.icon {
  color: $c-highlight;
  width: rem(20);
  height: rem(20);
  transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
}
</style>