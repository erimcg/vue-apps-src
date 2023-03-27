import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserNavBar from '../navbars/UserNavBar.vue'
import Profile from '../views/ProfileView.vue'
import Events from '../views/EventsView.vue'
import LoginNavBar from '../navbars/LoginNavBar.vue'
import Login from '../components/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        rightNavbar: LoginNavBar,
        default: HomeView
      }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/user',
      components: {
        rightNavbar: UserNavBar,
        default: Profile
      }
    },
    {
      path: '/events',
      components: {
        rightNavbar: UserNavBar,
        default: Events
      }
    }
  ]
})

export default router
