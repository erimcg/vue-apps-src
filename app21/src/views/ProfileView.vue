<script setup>
import { useUserStore } from '@/stores/user'

const store = useUserStore()

</script>

<template>
    <main>
        <h3>Profile</h3>

        <div>
            <h6>First name: {{  store.firstName }}</h6>
            <h6>Last name: {{ store.lastName }}</h6>
        </div>
    </main>
</template>


<style>
main {
   padding: 50px;
   height: 400px;
}
</style>