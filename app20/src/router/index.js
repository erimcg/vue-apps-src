import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import LoginView from '../views/home/LoginView.vue'
import LogoutView from '../views/home/LogoutView.vue'
import CreateAccountView from '../views/home/CreateAccountView.vue'
import EventsView from '../views/events/EventsView.vue'

import { useUserStore } from '@/stores/user'

function stripRoute(to) {
  if (to.hash) return { path: to.path, query: {} , hash: ''}
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: (to, from) => {
        console.log('Per-route guard')
        // only trigger when entering route from different route
        // do not trigger if only params,query,has changes
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView
        },
        {
          path: 'create',
          name: 'create',
          component: CreateAccountView
        },
        {
          path: 'logout',
          component: LogoutView
        }
      ]
    },
    {
      path: '/events',
      component: EventsView,
      beforeEnter: [stripRoute],
      meta: { requiresAuth: true }
    }
    
  ]
})

router.beforeEach((to, from) => {
  console.log("Global before each guard")
  // run on every navigation
  // use case: check authorization before going to route

  console.log(from)
  console.log(to)

  const userStore = useUserStore()

  if (to.meta.requiresAuth && !userStore.isLoggedIn()) {
    console.log('redirecting to login view')
    return {
      path: '/login',
      query: { redirect: to.fullPath }
    }
  }
})

router.beforeResolve((to) => {
  console.log("Global before resolve guard")
  // run on every navigation
  // triggered after component guards are executed

  /* example use: verify user has given permission to use camera */
})

router.afterEach((to, from, failure) => {
  console.log("Global after each guard")
  // these cannot affect the navigation
  // use case: update page analytics

  // failures occur when navigation fails and user stays on same page
  console.log(failure)
})

export default router
