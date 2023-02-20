<script setup>
import { computed } from 'vue'

const props = defineProps(['title', 'name', 'address'])
const emit = defineEmits(['update:name', 'update:address', 'addRecord'])

const value1 = computed({
    get() { return props.name },
    set(arg) { emit('update:name', arg) }
})

const value2 = computed({
    get() { return props.address },
    set(arg) { emit('update:address', arg) }
})

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <input id="name" v-model="value1" />
            <label for="name">{{ value1 }}</label><br />

            <input id="address" v-model="value2" />
            <label for="address">{{ value2 }}</label><br />

            <button type="button" @click="$emit('addRecord')">Add</button>
        </fieldset>
    </form>
</template>

<style>

</style>