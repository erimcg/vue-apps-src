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
    <input ref="input1" type="text" />
    <input ref="input2" type="text" />
    <button @click="createNewElm" type="button" >Press</button>
</template>


<script>

</script>

