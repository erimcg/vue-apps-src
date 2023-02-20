<script setup>

defineProps(['title', 'modelValue'])

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <input id="name" 
                :value="modelValue" 
                @input="$emit('update:modelValue', $event.target.value)" />
                
            <label for="name">{{ modelValue }}</label><br />

            <button type="button" @click="$emit('addRecord')">Add</button>
        </fieldset>
    </form>
</template>

<style>

</style>