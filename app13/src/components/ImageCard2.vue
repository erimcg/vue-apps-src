<script setup>

import { ref, onMounted } from 'vue'

const img = ref(null)
const audio = ref(null)

const props = defineProps({
    title: String,
    imageFile: String,
    audioFile: String
})

function getImageUrl() {
    // This path must be correct for your file
    return new URL(`../assets/img/${props.imageFile}`, import.meta.url)
}

function getAudioUrl() {
    // This path must be correct for your file
    return new URL(`../assets/audio/${props.audioFile}`, import.meta.url)
}

onMounted(() => {
    img.value.src = getImageUrl()
    audio.value.src = getAudioUrl()
})

</script>

<template>
        <div id="card">
            <h3>{{ title }}</h3>

            <!-- img src is defined when mounted -->
            <img ref="img" /> 

            <audio ref="audio" controls></audio>
        </div>
</template>


<style >
audio {
    display: block;
    padding: 0 20px 20px 20px;
}
</style>