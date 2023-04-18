<script setup>
import { useRouter, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';
import HomeNavbar from '../../components/nav/HomeNavbar.vue';
import LogoutNavbar from '../../components/nav/LogoutNavbar.vue';


onBeforeRouteUpdate((to, from) => {
    console.log("onBeforeRouteUpdate in EventsView")
    // triggered when params, query, or hash of route changes
    // uses same component, this is available

})


onBeforeRouteLeave((to, from) => {
    console.log("onBeforeRouteLeave in EventsView")
    // triggered right before navigation leaves this component
    // has access to this
})

</script>

<template>
    <nav>
        <HomeNavbar />
        <LogoutNavbar />
    </nav>
    <main>
        <h1> Events </h1>
    </main>
</template>

<style></style>