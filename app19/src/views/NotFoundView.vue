<script setup>
    import Heading from '../components/Heading.vue';

    const props = defineProps(['main'])
    props.main.style.backgroundColor = "#e6f2e4"
</script>

<template>
    <Heading label="404 - File not found" />
    <div>
        Please file a report with the NSA
    </div>
</template>
