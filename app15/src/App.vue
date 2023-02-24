<script setup>
import { ref } from 'vue'

import ImageCard1 from './components/ImageCard1.vue';
import ImageCard2 from './components/ImageCard2.vue';
import ImageCard3 from './components/ImageCard3.vue';
import ImageCard4 from './components/ImageCard4.vue';

import { imageInfo } from './assets/imageInfo.js'

const firstSlot = ref("audio")
const secondSlot = ref("label")

function swapSlots() {
    let temp = firstSlot.value
    firstSlot.value = secondSlot.value
    secondSlot.value = temp
}

</script>

<template>
    <div id="container">
        <ImageCard1 />

        <ImageCard1>
            <h3>{{ imageInfo.image1.label }}</h3>
            <img :src="`${imageInfo.image1.imageURL}`" />
            <audio :src="`${imageInfo.image1.audioURL}`" controls></audio>
        </ImageCard1>

        <ImageCard2>
            <template v-slot:audio>
                <audio :src="`${imageInfo.image2.audioURL}`" controls></audio>
            </template>

            <template v-slot:default>
                <img :src="`${imageInfo.image2.imageURL}`" />
            </template>

            <template v-slot:label>
                <h3>{{ imageInfo.image2.label }}</h3>
            </template>
        </ImageCard2>

        <ImageCard2>
            <template #audio>
                <audio :src="`${imageInfo.image3.audioURL}`" controls></audio>
            </template>

            <template #default>
                <img :src="`${imageInfo.image3.imageURL}`" />
            </template>

            <template #label>
                <h3>{{ imageInfo.image3.label }}</h3>
            </template>
        </ImageCard2>

        <ImageCard2>
            <template #audio>
                <audio :src="`${imageInfo.image4.audioURL}`" controls></audio>
            </template>

            <img :src="`${imageInfo.image4.imageURL}`" />

            <template #label>
                <h3>{{ imageInfo.image4.label }}</h3>
            </template>
        </ImageCard2>

        <ImageCard2>
            <template #[firstSlot]>
                <audio :src="`${imageInfo.image5.audioURL}`" controls></audio>
            </template>

            <img :src="`${imageInfo.image5.imageURL}`" />
            <button type="button" @click="swapSlots">Swap Slots</button>

            <template #[secondSlot]>
                <h3>{{ imageInfo.image5.label }}</h3>
            </template>
        </ImageCard2>

        <ImageCard3 v-slot="slotProps">
            <h3> {{ slotProps.text }}{{ imageInfo.image6.label }}</h3>

            <img :src="`${imageInfo.image6.imageURL}`" />

            <audio :src="`${imageInfo.image6.audioURL}`" controls></audio>
        </ImageCard3>

        <ImageCard4>
            <template #label="labelProps">
                <h3>{{ labelProps.text }} {{ imageInfo.image7.label }}</h3>
            </template>
            
            <img :src="`${imageInfo.image7.imageURL}`" />

            <template #audio>
                <audio :src="`${imageInfo.image7.audioURL}`" controls></audio>
            </template>
        </ImageCard4>

        <ImageCard4>
            <template #label="{ text }">
                <h3>{{ text }} {{ imageInfo.image7.label }}</h3>
            </template>

            <img :src="`${imageInfo.image7.imageURL}`" />

            <template #audio>
                <audio :src="`${imageInfo.image7.audioURL}`" controls></audio>
            </template>
        </ImageCard4>
    </div>
</template>

<style>
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

img {
    height: 100px;
    width: auto;
}

audio {
    display: block;
    padding: 0 20px 20px 20px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 200px;
    width: 300px;

    border: solid 1px lightgray;
    padding: 20px;
    margin: 10px;
}
</style>

