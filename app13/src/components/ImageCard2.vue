<script setup>

import { ref, onMounted } from 'vue'

const img = ref(null)
const showPlayIcon = ref(true)

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

function playAudio(e) {
    e.stopPropagation();
   
    showPlayIcon.value = false

    let audioFile = getAudioUrl()

    let audioPlayer = document.createElement("audio")
    audioPlayer.src = audioFile
    audioPlayer.play()

    audioPlayer.onended = function () {
        showPlayIcon.value = true
    }
}

onMounted(() => {
    img.value.src = getImageUrl()
})

</script>

<template>
        <div id="card">
            <h3>{{ title }}</h3>

            <!-- img src is defined when mounted -->
            <img ref="img" />   

            <button v-show="showPlayIcon" id="playButton" type="button" @click="playAudio">
                <img src="../assets/icons/play_icon.png" />
            </button>
        </div>
</template>


<style >

</style>