<script setup>
import { ref } from 'vue'

const showPlayButton = ref(true)

const props = defineProps({
    title: String,
    imageFile: String,
    audioFile: String
})

function playAudio(e) {
    e.stopPropagation();

    showPlayButton.value = false

    let audioFile = props.audioFile  // must use const props here

    let audioPlayer = document.createElement("audio")
    audioPlayer.src = audioFile
    audioPlayer.play()

    audioPlayer.onended = function () {
        showPlayButton.value = true
    }
}

const emit = defineEmits(['close'])

function hideImages() {
    emit('close')
}
</script>

<template>
    <div id="card" @click="hideImages">
        <h3>{{ title }}</h3>

        <img :src="imageFile" />

        <button v-show="showPlayButton"
            id="playButton" type="button" @click="playAudio">
            <img src="../assets/icons/play_icon.png" />
        </button>
    </div>
</template>

<style>
#card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 20px;
    border: solid 1px lightgray;

    margin: 0 30px;
}

img {
    width: 40%;
}

#playButton {
    border: none;
    background-color: white;
    width: 100px;
}
</style>