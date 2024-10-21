import gsap from "gsap";
import { ref, watch } from "vue";
import { onBeforeRouteLeave } from "vue-router";

export const routeTo = ref('Home')
export const timelinePageTransition = gsap.timeline({ paused: true })
export const endPageTransition = ref(false)
export const finishPageTransition = ref(false)

export const usePageTransition = () => {
  const routeLeave = async (to) => {
    routeTo.value = to.name
    console.log('route to ', routeTo.value)
    await new Promise((resolve, reject) => {
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