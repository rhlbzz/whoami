<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CtaComponent',

})
</script>

<template>
    <a v-bind="$attrs" class="cta-component overflow-hidden relative">
        <span class="overflow-hidden first">
            <slot />
        </span>
        <span class="absolute inset-0 last">
            <slot />
        </span>
    </a>
</template>