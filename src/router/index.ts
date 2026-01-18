import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import PresentationPage from '@/views/PresentationPage.vue'
import ContactsPage from '@/views/ContactsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/presentation',
      name: 'Presentation',
      component: PresentationPage
    },
    // {
    //   path: '/projects',
    //   name: 'Projects',
    //   component: ProjectsPage
    // },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactsPage
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
