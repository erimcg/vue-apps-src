<script setup>

import { ref } from 'vue'
import { useEventsStore } from '@/stores/events'
const store = useEventsStore()

function addEvent() {
    store.addEvent(name.value, date.value)
    button.value.disabled = true
    form.value.reset()

    name.value = ''
    date.value = ''
}

let name = ref('')
let date = ref('')
let form = ref(null)
let button = ref(null)

function enableSubmit() {
    if (name.value !== '' && date.value !== '') {
        button.value.disabled = false
    }
}

</script>

<template>
    <section id="addEvent">
        <h3>Add Events</h3>
        <form ref="form">
            <label for="name">Name</label>
            <input name="name" type="text" v-model="name" @keyup="enableSubmit">

            <label for="date">Date</label>
            <input name="date" type="date" v-model="date" @input="enableSubmit">
        </form>
        <button ref="button" type="button" @click="addEvent" disabled>Add</button>
    </section>
</template>

<style>
#addEvent {
    padding: 10px;
    background-color: lightpink;
}

form {
    display: grid;
    grid-template-columns: 25% 75%;

    row-gap: 10px;

}
</style>