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
    <h4>Experiment 1</h4>
    <p>
        Here we are watching a state variable that is bound to the input element
        using v-model.  We are also watching a p element using the ref attribute.
    </p>
    <p>
        When the user enters data in the input, the first watcher's callback is 
        triggered which uses the element refs to change teh text color and to copy
        the text in the input element to the p element.  The second watcher's callback
        is only triggered once when the p element is loaded in the DOM.
    </p>

    <input ref="refA" v-model="inputA" type="text" class="red"/> <br />
    <p ref="refB" class="red">Original text</p>
</template>

<style>
.red {
    color: red;
}
.blue {
    color: blue;
}
</style>