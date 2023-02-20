<script setup>

defineProps(['title', 'name'])

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <input id="name" 
                v-bind:value="name" 
                @input="$emit('update:name', $event.target.value)" />

            <label for="name">{{ name }}</label><br />

            <button type="button" @click="$emit('addRecord')">Add</button>
        </fieldset>
    </form>
</template>

<style>

</style>