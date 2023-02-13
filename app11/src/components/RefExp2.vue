<script setup>

    import { watch, ref} from 'vue'

    let input1 = ref(null)
    let input2 = ref(null)

    // the watcher callback will only be executed when the value of input1.value changes
    // that is, when input1 references a different DOM element.
    watch(input1, () => {
        console.log("input1 changed")
        input1.value.value = "input1"
        input2.value.value = "input2"
    })

    // this button handler swaps the DOM elements referenced by input1 and input2
    function createNewElm() {
        let temp = input1.value
        input1.value = input2.value
        input2.value = temp
    }

</script>

<template>
    <h4>Experiment 2</h4>
    <p>Both of the input elements have ref attributes.  When the button is pressed
        the references stored in the refs are swapped, thus triggering a watcher on
        the first ref.  The watcher set the input element's value attribute to the 
        name of the ref.
    </p>

    <input ref="input1" type="text" />
    <input ref="input2" type="text" />
    <button @click="createNewElm" type="button" >Press</button>
</template>


<script>

</script>

