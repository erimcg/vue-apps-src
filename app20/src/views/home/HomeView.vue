<script setup>
    import { RouterView } from 'vue-router'
    
    import HomeNavbar from '../../components/nav/HomeNavbar.vue';
    import LoginNavbar from '../../components/nav/LoginNavbar.vue';
</script>

<template>
    <nav>
        <HomeNavbar />
        <LoginNavbar />
    </nav>
    <main>
        <RouterView />
    </main>
</template>

<style>
body {
    position: relative;
    margin: 5%;

}

</style>