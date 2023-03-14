<script setup>
import Child from './components/Child.vue';
import { ref, provide, onMounted } from 'vue'

const parent = ref(null)
const maxDepth = ref(1);

provide('maxDepth', maxDepth)

function increaseMaxDepth() {
    console.log('up')
    maxDepth.value++
}

document.addEventListener("keydown", increaseMaxDepth)

setInterval(increaseMaxDepth, 500)
</script>

<template>
    <div ref=parent class="parent">
        <Child :depth=1 />
    </div>
</template>

<style>
.parent{
    width:100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
}
</style>