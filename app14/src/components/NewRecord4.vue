<script setup>
import { computed } from 'vue'

const props = defineProps(['title', 'name'])
const emit = defineEmits(['update:name', 'addRecord'])

const value = computed({
    get() { return props.name },
    set(arg) { emit('update:name', arg) }
})

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <input id="name" v-model="value" />

            <label for="name">{{ value }}</label><br />

            <button type="button" @click="$emit('addRecord')">Add</button>
        </fieldset>
    </form>
</template>

<style>

</style>