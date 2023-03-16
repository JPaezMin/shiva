import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import CompositionsView from '../views/CompositionsView.vue'
import ContactView from '../views/ContactView.vue'
import DatesView from '../views/DatesView.vue'
import HomeView from '../views/HomeView.vue'
import MediaView from '../views/MediaView.vue'
import PressView from '../views/PressView.vue'
import ReleasesView from '../views/ReleasesView.vue'
import GalleryView from '../views/GalleryView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/compositions',
      name: 'compositions',
      component: CompositionsView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/dates',
      name: 'dates',
      component: DatesView
    },
    {
      path: '/media',
      name: 'media',
      component: MediaView
    },
    {
      path: '/press',
      name: 'press',
      component: PressView
    },
    {
      path: '/releases',
      name: 'releases',
      component: ReleasesView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    }
  ]
})
export default router
