<script setup>
import { computed } from 'vue'

const props = defineProps(['title', 'info'])
const emit = defineEmits(['update:info', 'addRecord'])

const values = computed({
    get() { return props.info },
    set(arg) { emit('update:info', arg) }
})

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <input id="name" v-model="values.name" />
            <label for="name">{{ values.name }}</label><br />

            <input id="address" v-model="values.address" />
            <label for="address">{{ values.address }}</label><br />

            <button type="button" @click="$emit('addRecord')">Add</button>
        </fieldset>
    </form>
</template>

<style>

</style>