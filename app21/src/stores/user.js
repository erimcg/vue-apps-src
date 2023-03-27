import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

  // pre-defined fields in store
  const username = ref("")
  const events = ref([])

  return { username, events }
})
