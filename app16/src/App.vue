<script setup>
import ImageList from '../../app16/src/components/ImageList.vue';
</script>

<template>
    <ImageList infoURL="imageInfo.json">
        <template #content="{ label, imageURL, audioURL }">
            <h3> {{ label }}</h3>

            <img :src="`${imageURL}`" />

            <audio :src="`${audioURL}`" controls></audio>
        </template>
    </ImageList>
</template>

<style>
img {
    height: 100px;
    width: auto;
}

audio {
    display: block;
    padding: 0 20px 20px 20px;
}
</style>