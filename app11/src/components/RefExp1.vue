<script setup>

    import { ref, watch } from 'vue'
    
    const refA = ref(null)
    const inputA = ref('test')

    watch(inputA, () => {
        // inputA is bound to the input's value attribute using v-model.
        // this callback will be executed whenever the value attribute changes.

        // refA and refB can be used instead of calling document.querySelector()
        refA.value.className = (refA.value.className === 'red') ? "blue" : "red"
        refB.value.innerHTML = refA.value.value
    })

    const refB = ref(null)

    watch(refB, () => {
        // refB is a ref to the <p> element
        // this callback will only be executed when the <p> is mounted to the DOM
        refB.value.className = (refB.value.className === 'red') ? "blue" : "red"
    })
</script>

<template>
    <h5>Watching state variable using v-model, modifying class with input ref in watcher</h5>
    <input ref="refA" v-model="inputA" type="text" class="red"/> <br />

    <h5>Watching p elements, changing class upon change</h5>
    <p ref="refB" class="red"></p>
</template>

<style>
.red {
    color: red;
}
.blue {
    color: blue;
}
</style>