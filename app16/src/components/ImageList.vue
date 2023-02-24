<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps(['infoURL'])

let items = ref({})

onMounted(async () => {
    console.log("on mounted") 
    let response = await fetch(props.infoURL)

    if (response.status == 200) {
        items.value = await response.json()
        console.log(items)
    }
})

</script>

<template>
    <div id="container">
        <div id="card" v-for="item in items">
            <slot
                :label="item.label" 
                :imageURL="item.imageURL" 
                :audioURL="item.audioURL"></slot>
        </div>
    </div>
</template>

<style>
#container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#card {
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 200px;
    width: 300px;

    border: solid 1px lightgray;
    padding: 20px;
    margin: 10px;
}
</style>