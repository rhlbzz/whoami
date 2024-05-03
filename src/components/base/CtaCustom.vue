<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import { templateRef } from '@vueuse/core'
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"
import gsap from 'gsap'

export default defineComponent({
    name: 'CtaCustom',
    props: {
        underline: { type: Boolean, default: false },
        split: { type: Boolean, default: false }
    },
    setup(props) {
        const normal = templateRef('normal')
        const modified = templateRef('modified')
        const hover = ref(false)

        let spltNormal: []
        let spltModified: []

        onMounted(() => {
            if (props.split) handleSplit()
           
        })

        function handleSplit() {
            if (!normal.value || !modified.value) return
            spltNormal = Splitting({
                /* target: String selector, Element, Array of Elements, or NodeList */
                target: normal.value,
                /* by: String of the plugin name */
                by: "chars",
                /* key: Optional String to prefix the CSS variables */
                key: null,
                whitespace: false
            });
            spltModified = Splitting({
                /* target: String selector, Element, Array of Elements, or NodeList */
                target: modified.value, // ".modified.to-be-splitted",
                /* by: String of the plugin name */
                by: "chars",
                /* key: Optional String to prefix the CSS variables */
                key: null,
                whitespace: false
            });

            console.log('spltModified ', spltModified[0].chars)
            
            gsap.set([spltModified[0].chars], { opacity: 0, yPercent: 50})
        }

        function handleEnter() {
            if (!props.split) return
            const tl = gsap.timeline()
            tl.to([spltNormal[0].chars], { yPercent: -50, rotateX: -90, opacity: 0, stagger: 0.01 })
            tl.to([spltModified[0].chars], { yPercent: 0, rotateX: 0, opacity: 1, stagger: 0.01 },'<')
        }

        function handleLeave() {
            if (!props.split) return
            
            const tl = gsap.timeline()
            tl.to([spltModified[0].chars], { yPercent: 50, rotateX: -90, opacity: 0, stagger: 0.01 })
            tl.to([spltNormal[0].chars], { yPercent: 0, rotateX: 0, opacity: 1, stagger: 0.01 }, '<')
        }


        watch(hover, (value) => {
            if (value) handleEnter()
            else handleLeave()
        })
    
        return {
            hover
        }
    }

})
</script>

<template>
    <a 
        ref="wrapper"
        v-bind="$attrs" 
        class="cta-custom overflow-hidden"
        :class="[
            underline, 
            split,
        ]"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
        <span class="relative overflow-hidden">
            <span class="opacity-0">
                <slot />
            </span>
            <span v-if="split" class="absolute-center overflow-hidden">
                <span ref="normal" class="normal to-be-splitted absolute-center">
                    <slot />
                </span>
                <span ref="modified" class="modified uppercase to-be-splitted absolute-center">
                    <slot />
                </span>
            </span>
        </span>
    </a>
</template>


<style lang="scss" scoped>
.to-be-splitted {
    perspective: 1000px;
}

.bordered {
    border: 1px solid red;
}
</style>