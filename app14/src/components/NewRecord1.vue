<script setup>
import { ref } from 'vue'

const props = defineProps(['title', 'name'])

const value = ref(props.name)

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <input id="name" v-model="value" />
            
            <label for="name">{{ value }}</label><br />

            <button type="button" @click="$emit('addRecord', value)">Add</button>
        </fieldset>
    </form>
</template>

<style>

</style>