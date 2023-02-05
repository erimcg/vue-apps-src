<script setup>
import { ref, reactive } from 'vue'
import { createClient } from 'pexels';
import { onMounted } from 'vue'
import { watch } from 'vue';

const client = createClient('eXRdKggJJ70vX8T0S9X33Gol3EeAFSuu04iwp5JVAAUyNby2khOnlGm8');
let currentPhotoIndex = -1;
const prevButtonDisabled = ref(true)
const nextButtonDisabled = ref(true)

const collection = reactive({
  media: {},
})

const photo = reactive({
  title: "",
  photographer: "",
  photographer_url: "",
  url: ""
})

watch(collection, () => {
  console.log("collection changed")
  console.log(collection.media)

  if (collection.media.length > 0) {
    loadImage(1)
  }
})

async function loadImage(op) {
  console.log(op)
  let nextPhotoIndex = currentPhotoIndex + op;
  console.log("next index: " + nextPhotoIndex)

  if (nextPhotoIndex < 0 || nextPhotoIndex >= collection.media.length) {
    return
  }

  currentPhotoIndex = nextPhotoIndex

  prevButtonDisabled.value = ((currentPhotoIndex - 1) >= 0) ? false : true
  nextButtonDisabled.value = ((currentPhotoIndex + 1) < collection.media.length) ? false : true

  console.log("getting photo from cache")
  console.log(collection.media[currentPhotoIndex])

  photo.title = collection.media[currentPhotoIndex].alt
  photo.photographer = collection.media[currentPhotoIndex].photographer
  photo.photographer_url = collection.media[currentPhotoIndex].photographer_url
  photo.url = collection.media[currentPhotoIndex].src.tiny

  console.log(photo)
}

async function getCollection() {
  let result = await client.collections.all({ per_page: 1 })
  console.log("collections.all")
  console.log(result)

  const id = result.collections[0].id

  result = await client.collections.media({ id, type: 'photos', per_page: 6 })
  console.log("collection.media")
  console.log(result)

  collection.media = result.media  // save photos
}

onMounted(() => {
  console.log("onmounted")
  getCollection()
})

</script>

<template>
  <div id="slideshow">

    <div id="controls">
      <button type="button" @click="loadImage(-1)" :disabled="prevButtonDisabled">
        <span class="material-icons">arrow_back_ios</span>
      </button>

      <div id="photo">
        <img :src="photo.url">
      </div>

      <button type="button" @click="loadImage(1)" :disabled="nextButtonDisabled">
        <span class="material-icons">arrow_forward_ios</span>
      </button>
    </div>

    <div id="photo-info">
      <span>{{ photo.title }}</span><br>
      <span>Photographer:
        <a :href="photo.photographer_url" target="_blank">
          {{ photo.photographer }}
        </a></span>
    </div>

    <div id="source">
      <a href="http://pexels.com">
        <img src="../assets/pexelsLogo.png">
      </a>
      <span>Images provided by Pexels.com</span>
    </div>
  </div>
</template>

<style>
#slideshow {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
}

#controls {
  display: flex;
  align-items: center;
}

button {
  border: 0;
  background-color: rgb(0, 0, 0, 0);
}

#photo img {
  border-radius: 15px;
}

#photo-info,
#photo img {
  width: 400px;
}

#photo-info {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 20px 20px;
  text-align: center;
}

#photo-info span {
  display: inline-block;
  margin-top: 8px;
}

#source img {
  width: 30px;
  margin-right: 5px;
}
</style>