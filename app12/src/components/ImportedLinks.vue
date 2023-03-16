<script setup>
import { websites } from '../assets/data.js'
    
</script>

<template>
    <section>
        <div link v-for="site in websites">
            <a :href="site.url">{{ site.title }}</a>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    margin: 20px;
 }

div[link]>a {
    background-color: #529A82;
    color: #B3D9CD;
}
</style>