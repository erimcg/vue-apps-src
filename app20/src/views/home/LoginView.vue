<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

//import routes from '../../router/events.js'

const router = useRouter()

function login() {
    // Assume the users credentials were validated

    //router.removeRoute('home')

    /*for (let route of routes) {
        router.addRoute(route)
    }*/

    if (userStore.validateUser('Eric', 'pass')) {
        router.replace("/events")
    }

}

</script>

<template>
    <main>
        <h1> Login Screen </h1>

        <button @click=login type="button">Login</button>
    </main>
</template>

<style>
button {
    font-size: large;
}

</style>