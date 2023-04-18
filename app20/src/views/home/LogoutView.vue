<script setup>
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
userStore.logout();

</script>

<template>
    <main>
        <h1>Loggged out</h1>
    </main>
</template>

<style></style>