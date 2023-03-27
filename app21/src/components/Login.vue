<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/user.js'

// simulate getting the user's info from the login server
import { info } from '../assets/userInfo.js'

const router = useRouter()
const store = useUserStore()

const username = ref("")
const password = ref("")

function submit() {
    // TODO: validate username and password using server

    if (username.value !== "roadkill")
        return

    // assuming success!  store username in store
    store.username = username.value
    console.log(store.username)

    // store info returned by server in store
    store.events = info.events
    console.log(store.events)

    // add new fields to store
    store.firstName = info.firstName
    store.lastName = info.lastName

    // redirect user
    router.replace({ path: '/events' })
}

</script>

<template>
    <main>
        <h3>Login</h3>
        <form>
            <label for="username">Username</label><br>
            <input v-model="username" name="username" type="text" />
            <br>
            <label for="password">Password</label><br>
            <input v-model="password" name="password" type="text" />
        </form>
        <button type="button" @click="submit">Login</button>
    </main>
</template>


<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 50px;
    height: 400px;
}
</style>