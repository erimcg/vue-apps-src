<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <h1>Adding & Removing State Data</h1>
    <main>
        <RouterView name="list" />
        <RouterView name="add" />
    </main>
</template>

<style>
body {
    padding: 0;
    margin: 0;
}

#app {
    padding: 40px;
}

main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;

    height: auto;
    align-items: flex-start;

    margin-top: 40px;
}
</style>
