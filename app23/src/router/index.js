
import { createRouter, createWebHistory } from 'vue-router'
import ListEvents from '../views/ListEvents.vue'
import AddEvent from '../views/AddEvent.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      components: {
        'list': ListEvents,
        'add': AddEvent
      }
    }
  ]
})

export default router
