<script setup>
    import {ref, watch} from 'vue'

    const span = ref(null)
    let count = 0

    watch(span, () => {
        console.log("printed only once")
    })

    function buttonHandler() {
        span.value.innerHTML = `Count: ${count++}`
    }
</script>

<template>
        <h4>Experiment 3</h4>
        <p>We've seen that we can not watch the attributes of an input element.
        We also can't watch for changes in the child nodes of an element either.</p>

        <p>In this example declare a ref attribute in the span and set up a watcher on 
            the ref.  The button changes the HTML in the span.  When the button is 
            pressed, the watcher's callback is not invoked.</p>

        <span ref="span">
            Hello
        </span><br />
        <button type="button" @click="buttonHandler">Press</button>


</template>

<style>

</style>