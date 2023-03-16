import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FriendsView from '../views/FriendsView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import App from '../../../app18/src/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'My Webpage',
      // this route is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/friends/',  //dynamic routing
      name: 'List of Friends',
      component: FriendsView
    },
    {
      path: '/friends/:id',  //dynamic routing
      name: 'My Friend',
      component: FriendsView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'File Not Found',
      component: NotFoundView
    }
  ]
})

export default router
