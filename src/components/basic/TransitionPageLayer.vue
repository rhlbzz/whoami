<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch } from 'vue'

import {timelinePageTransition, routeTo} from '@/functions/usePageTransition'
import { Routes } from '@/utils/types';
import { THEME_COLORS } from '@/utils/constants';

export default defineComponent({
    name: 'TransitionPageLayer',
    setup() {
      const presentationTransitionProgress = reactive({
        topLeftFirst: 0,
        topLeftSecond: 100,
        topRightFirst: 0,
        topRightSecond: 100,
        bottomRightFirst: 0,
        bottomRightSecond: 100,
        bottomLeftFirst: 0,
        bottomLeftSecond: 100
      })

      const contactsTransitionProgress = reactive({
        topLeftFirst: 100,
        topLeftSecond: 100,
        topRightFirst: 100,
        topRightSecond: 100,
        bottomRightFirst: 100,
        bottomRightSecond: 100,
        bottomLeftFirst: 100,
        bottomLeftSecond: 100
      })

      const homeTransitionProgress = reactive({
        topLeft: 0,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 0
      })

      const projectsTransitionProgress = reactive({
        topLeft: 100,
        topRight: 100,
        bottomRight: 100,
        bottomLeft: 100
      })

      const bgColor = ref(THEME_COLORS.light)

      function homeTransition() {
        timelinePageTransition.to(homeTransitionProgress, {
          bottomRight: 100,
          bottomLeft: 100,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `enter-${Routes.HOME}`)

        timelinePageTransition.to(homeTransitionProgress, {
          topLeft: 100,
          topRight: 100,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `leave-${Routes.HOME}`)
      }

      function projectsTransition() {
        timelinePageTransition.to(projectsTransitionProgress, {
          topLeft: 0,
          topRight: 0,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `enter-${Routes.PROJECTS}`)

        timelinePageTransition.to(projectsTransitionProgress, {
          bottomRight: 0,
          bottomLeft: 0,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `leave-${Routes.PROJECTS}`)
      }

      function presentationTransition() {
        
        timelinePageTransition.to(presentationTransitionProgress, { 
          topLeftSecond: 0,
          topRightFirst: 100,
          topRightSecond: 0,
          bottomRightFirst: 100,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `enter-${Routes.PRESENTATION}`)

        timelinePageTransition.to(presentationTransitionProgress, { 
          topLeftFirst: 100,
          bottomRightSecond: 0,
          bottomLeftFirst: 100,
          bottomLeftSecond: 0,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `leave-${Routes.PRESENTATION}`)
        
      }

      function contactsTransition() {
        
        timelinePageTransition.to(contactsTransitionProgress, { 
          topLeftFirst: 0,
          topLeftSecond: 0,
          topRightSecond: 0,
          bottomLeftFirst: 0,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `enter-${Routes.CONTACTS}`)

        timelinePageTransition.to(contactsTransitionProgress, { 
          topRightFirst: 0,
          bottomRightFirst: 0,
          bottomRightSecond: 0,
          bottomLeftSecond: 0,
          duration: 0.6, 
          ease: 'power2.inOut'
        }, `leave-${Routes.CONTACTS}`)
        
      }

      function initAnimation() {
        homeTransition()
        presentationTransition()
        projectsTransition()
        contactsTransition()
        timelinePageTransition.to({}, {
          duration: 0.01, 
          ease: 'none',
        }, 'end')
      }

      onMounted(initAnimation)

      watch(routeTo, (value) => {
        if (value === Routes.HOME) bgColor.value = THEME_COLORS.purpled
        else if (value === Routes.PRESENTATION) bgColor.value = THEME_COLORS.presentation_contrast
        else if (value === Routes.CONTACTS) bgColor.value = THEME_COLORS.contacts_contrast
        else if (value === Routes.PROJECTS) bgColor.value = THEME_COLORS.projects_contrast
      })

      return {
        bgColor,   
        routeTo, 
        homeTransitionProgress,
        presentationTransitionProgress,
        projectsTransitionProgress,
        contactsTransitionProgress,
      }
    }

})
</script>

<template>
  <div 
    class="transition-page-layer"
    :class="[`route-to-${routeTo}`]"
    :style="{
      '--progress-home-tl': `${homeTransitionProgress.topLeft}%`,
      '--progress-home-tr': `${homeTransitionProgress.topRight}%`,
      '--progress-home-bl': `${homeTransitionProgress.bottomLeft}%`,
      '--progress-home-br': `${homeTransitionProgress.bottomRight}%`,

      '--progress-presentation-tlf': `${presentationTransitionProgress.topLeftFirst}%`,
      '--progress-presentation-tls': `${presentationTransitionProgress.topLeftSecond}%`,
      '--progress-presentation-trf': `${presentationTransitionProgress.topRightFirst}%`,
      '--progress-presentation-trs': `${presentationTransitionProgress.topRightSecond}%`,
      '--progress-presentation-brf': `${presentationTransitionProgress.bottomRightFirst}%`,
      '--progress-presentation-brs': `${presentationTransitionProgress.bottomRightSecond}%`,
      '--progress-presentation-blf': `${presentationTransitionProgress.bottomLeftFirst}%`,
      '--progress-presentation-bls': `${presentationTransitionProgress.bottomLeftSecond}%`,

      '--progress-projects-tl': `${projectsTransitionProgress.topLeft}%`,
      '--progress-projects-tr': `${projectsTransitionProgress.topRight}%`,
      '--progress-projects-bl': `${projectsTransitionProgress.bottomLeft}%`,
      '--progress-projects-br': `${projectsTransitionProgress.bottomRight}%`,

      '--progress-contacts-tlf': `${contactsTransitionProgress.topLeftFirst}%`,
      '--progress-contacts-tls': `${contactsTransitionProgress.topLeftSecond}%`,
      '--progress-contacts-trf': `${contactsTransitionProgress.topRightFirst}%`,
      '--progress-contacts-trs': `${contactsTransitionProgress.topRightSecond}%`,
      '--progress-contacts-brf': `${contactsTransitionProgress.bottomRightFirst}%`,
      '--progress-contacts-brs': `${contactsTransitionProgress.bottomRightSecond}%`,
      '--progress-contacts-blf': `${contactsTransitionProgress.bottomLeftFirst}%`,
      '--progress-contacts-bls': `${contactsTransitionProgress.bottomLeftSecond}%`,

      '--bg-color': `${bgColor}`
    }"
  ></div>
</template>

<style lang="scss" scoped>
.transition-page-layer {
  width: 100vw;
  height: 100svh;
  position: fixed;
  inset: 0;
  z-index: 9999;
  background-color: var(--bg-color);

  &.route-to-Home {
    clip-path: polygon(0% var(--progress-home-tl), 100% var(--progress-home-tr), 100% var(--progress-home-br), 0% var(--progress-home-bl));
  }

  &.route-to-Projects {
    clip-path: polygon(0% var(--progress-projects-tl), 100% var(--progress-projects-tr), 100% var(--progress-projects-br), 0% var(--progress-projects-bl));
  }

  &.route-to-Presentation {
    clip-path: polygon(var(--progress-presentation-tlf) var(--progress-presentation-tls), var(--progress-presentation-trf) var(--progress-presentation-trs), var(--progress-presentation-brf) var(--progress-presentation-brs), var(--progress-presentation-blf) var(--progress-presentation-bls));
  }

  &.route-to-Contacts {
    clip-path: polygon(var(--progress-contacts-tlf) var(--progress-contacts-tls), var(--progress-contacts-trf) var(--progress-contacts-trs), var(--progress-contacts-brf) var(--progress-contacts-brs), var(--progress-contacts-blf) var(--progress-contacts-bls));
  }
}


</style>