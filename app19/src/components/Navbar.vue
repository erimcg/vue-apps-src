<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
        <nav>
            <RouterLink to="/" class="link">Home</RouterLink>
            <RouterLink to="/about" class="link">About</RouterLink>
            <RouterLink to="/friends" class="link">Friends</RouterLink>
            <RouterLink to="/friends/joe" class="link">Friends/joe</RouterLink>
            <RouterLink to="/invalid" class="link">Invalid route</RouterLink>
        </nav>
</template>

<style>
.link {
    margin: 5px;
}
</style>