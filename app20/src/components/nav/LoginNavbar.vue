<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink class="link" to="/events">Events</RouterLink>
        <RouterLink class="link" to="/create">Create Account</RouterLink>
        <RouterLink class="link" to="/login">Login</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    position: absolute;
    right: 0;
}

.link {
    padding: 5px;
}
</style>