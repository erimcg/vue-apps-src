import { ref } from 'vue'
import { defineStore } from 'pinia'

import { info } from '@/assets/events'
console.log(info)

export const useEventsStore = defineStore('events', () => {

  const events = ref(info)
  const id = ref(4)
  
  function addEvent(name, date) {
    if (!events.value.find((e) => e.name === name && e.date === date)) {
      let event = {
        name,
        date,
        id: id.value
      }
      events.value.push(event)
      id.value++
    }
  }

  function deleteEvent(id) {
    events.value = events.value.filter((e) => e.id != id)
  }
 
  return { events, addEvent, deleteEvent }
})
