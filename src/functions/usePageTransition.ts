import gsap from "gsap";
import { ref, watch } from "vue";
import { onBeforeRouteLeave, type RouteLocationNormalized, type RouteLocationRaw, type RouteRecordName } from "vue-router";

export const routeTo = ref('Home')
export const timelinePageTransition = gsap.timeline({ paused: true })
export const endPageTransition = ref(false)
export const finishPageTransition = ref(false)

export const usePageTransition = () => {
  const routeLeave = async (to: RouteLocationNormalized) => {
    routeTo.value = to.name as string
    await new Promise((resolve) => {
      timelinePageTransition.tweenFromTo(`enter-${routeTo.value}`, `leave-${routeTo.value}`, {
        onStart: () => {
          finishPageTransition.value = false
          endPageTransition.value = false
        },
        onComplete: () => {
          endPageTransition.value = true
          resolve(undefined)
        }
      })
    })
  }

  onBeforeRouteLeave(async (to) => (await routeLeave(to)))

  watch(endPageTransition, (value) => {
    if (!value) return    
    timelinePageTransition.tweenFromTo(`leave-${routeTo.value}`, 'end', { onComplete: () => {finishPageTransition.value = true} })
  }, {immediate: true})
}