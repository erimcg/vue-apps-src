import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {

    const username = ref('')
    const token = ref('')

    function validateUser(user, pw) {
        //simulate login
  
        if (user === 'Eric' && pw === "pass")  {
            username.value = username
            token.value = 'abc123'
            return true
        }
    }

    function logout() {
        token.value = ''
    }

    function isLoggedIn() {
        console.log("isLogged in: " + (token.value !== ''))
        return token.value !== ''
    }

    return { username, token, validateUser, logout, isLoggedIn }
})