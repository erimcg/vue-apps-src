<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav>
        <RouterLink class="link" to="/logout">Logout</RouterLink>
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