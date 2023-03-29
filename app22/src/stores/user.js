import { ref } from 'vue'
import { defineStore } from 'pinia'

//import { info } from '@/assets/userInfo'
let info = {}

async function getInfo() {
  let response = await fetch('userInfo.json')

  if (response.status == 200) {
    info = await response.json()
  }
  else {
    console.log("error initializing user store")
  }
}

await getInfo()
  
export const useUserStore = defineStore('user', () => {

  // pre-defined fields in store
  const username = ref(info.username)
  const events = ref(info.events)

  function modUsername() {
    console.log('changing username')
    username.value = "Joe"
    console.log(username.value)
  }

  function reset() {
    console.log('resetting info')
    username.value = info.username
    events.value = info.events
  }

  return { username, events, modUsername, reset }
})
