<script setup>
    import Heading from '../components/Heading.vue';

    const props = defineProps(['main'])
    props.main.style.backgroundColor = "#e6f2e4"
</script>

<template>
    <Heading label="Home" />
    <div>
        My home page ...
    </div>
</template>

<style></style>
