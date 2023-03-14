<script setup>

import { ref, onMounted, inject, watch } from 'vue'

const props = defineProps(['depth'])
let nextDepth = (props.depth) ? props.depth + 1 : 1

const child = ref(null)
const image = ref(null)

const maxDepth = inject('maxDepth')

watch(maxDepth, setBackgroundToRandomGreyHex)

function setBackgroundToRandomGreyHex() {  
    var v = (255 - (((props.depth / maxDepth.value) * 255)) | 0)
    v = v.toString(16);
    if (v.length == 1) v = "0" + v
    child.value.style.backgroundColor = "#" + v + v + v
}

onMounted(() => {
    setBackgroundToRandomGreyHex()
})

</script>

<template>
    <div ref=child class="child">
        <Child v-if="nextDepth <= maxDepth" :depth=nextDepth />
    </div>
</template>

<style scoped>
.child {
    width: 100%;
    height: 100%;

    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
}
.label {
    margin-bottom: 5px;
}
</style>