<script setup>
import { ref } from 'vue'

import Logo from './components/Logo.vue'
import ImageCard1 from './components/ImageCard1.vue'
import ImageCard2 from './components/ImageCard2.vue'

let showImages = ref(true)
let buttonLabel = ref("Hide Images")

let title = "This is a seal."
let imageFile = "img/seal.png"           // image in public/
let audioFile = "audio/seal-bark.mp3"    // audio is in public/

let imageInfo = {
  title: "This is a monkey.",
  imageFile: "monkey.png",               // image is in assets/img/
  audioFile: "monkey-squawk.mp3"         // audio is in assets/audio/
}

function toggleShowImages() {
  buttonLabel.value = (showImages.value === true) ? "Show Images" : "Hide Images"
  showImages.value = !showImages.value
}
</script>

<template>
  <Logo title="Vue" subtitle="Setting Props to File Names" />

  <main>
    <section>
      <ImageCard1 v-show="showImages" @close="toggleShowImages" 
        :title="title" :imageFile="imageFile" :audioFile="audioFile" />

      <ImageCard2 v-if="showImages" @close="toggleShowImages" 
        v-bind="imageInfo" />
    </section>

    <button type="button" @click="toggleShowImages">{{ buttonLabel }}</button>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  margin: 50px 100px;
}

section {
  display: flex;
  justify-content: center;
}

button {
  margin-top: 30px;
  font-size: medium;
  width: 200px;
}
</style>
