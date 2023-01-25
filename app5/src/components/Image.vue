<script setup>
    import { ref } from 'vue'
    const imgSrc = ref("puppy.png")
</script>

<template>
    <img :src="imgSrc" />
</template>