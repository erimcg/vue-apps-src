import { createRouter, createWebHistory } from 'vue-router'
import TopLeft from '@/views/TopLeft.vue'
import TopRight from '@/views/TopRight.vue'
import BottomLeft from '@/views/BottomLeft.vue'
import BottomRight from '@/views/BottomRight.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      components: {
        topLeft: TopLeft,
        topRight: TopRight,
        bottomLeft: BottomLeft,
        bottomRight: BottomRight
      },
      props: true
    }
  ]
})

export default router
