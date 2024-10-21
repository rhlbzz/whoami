<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    secondary: { type: Boolean, default: false },
    orange: { type: Boolean, default: false }
  }

})
</script>

<template>
  <button class="button-component cursor-pointer cta" :class="{secondary, orange, third}">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.button-component {
  padding: rem(8) rem(16);

  transition: color 0.3s ease-in-out;

  @include hover {
    &:hover {
      color: $c-cta;
    }
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
</style>