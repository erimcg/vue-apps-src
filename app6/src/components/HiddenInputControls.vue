<script setup>
import { ref } from 'vue'

const hiddenControl = ref("hidden")

function showHidden() {
    hiddenControl.value = (hiddenControl.value == "hidden") ? "text" : "hidden"
}

</script>

<template>
    <form>
        <fieldset>
            <legend>Hidden Input Controls</legend>

            <label for="hidden-control" class="form-label">Hidden control:</label>
            <input id="hidden-control" class="form-control" :type="hiddenControl" value="I wanna be a dancer">
            <br>
            <button type="button" @click="showHidden">Press</button>
        </fieldset>
    </form>

</template>

<style>

</style>