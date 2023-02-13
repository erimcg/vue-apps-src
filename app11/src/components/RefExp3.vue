<script setup>
    import {ref, watch} from 'vue'

    const span = ref(null)
    let count = 0

    // in an earlier experiment we saw we can not watch the properties of an <input element>
    // we can't watch for changes in the child nodes of an element either
    watch(span, () => {
        console.log("printed only once")
    })

    function buttonHandler() {
        span.value.innerHTML = `Count: ${count++}`
    }
</script>

<template>
        <h5>Updating a span with ref</h5>
        <span ref="span">
            Hello
        </span>
        <button type="button" @click="buttonHandler">Press</button>


</template>

<style>

</style>