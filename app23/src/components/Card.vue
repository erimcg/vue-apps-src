<script setup>

const props = defineProps(['event'])
const emit = defineEmits(['delete'])

</script>


<template>
    <div id="card">
        <button class='delete' type="button" @click="$emit('delete', props.event.id)"><img src="trash.svg"></button>
        <div class="name">{{  props.event.name }}</div>
        <div class="date">{{  props.event.date }}</div>
    </div>
</template>


<style scoped>
#card {
    display: grid;
    grid-template-columns: 2em auto;
    grid-template-rows: 1fr 1fr;

    margin-bottom: 5px;

    border: 1px solid lightgrey;
}

.name, .date {
    padding-left: 10px;
}

.date {
    font-size: 0.8em;
}

.delete {
    grid-row: 1 / 3;
}



</style>