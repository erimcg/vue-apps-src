<script setup>
import { computed, ref, onMounted } from 'vue'

const props = defineProps(['title', 'info'])
const emit = defineEmits(['update:info', 'addRecord'])
const image = ref(null)

const values = computed({
    get() { return props.info },
    set(arg) { emit('update:info', arg) }
})

function getImageUrl() {
    return new URL(`../assets/${props.info.file}`, import.meta.url)
}

onMounted(() => {
    image.value.src = getImageUrl()
})

</script>

<template>
    <form>
        <fieldset>
            <legend>{{ title }}</legend>

            <div>
            <input id="name" v-model="values.name" />
            <label for="name">{{ values.name }}</label><br />

            <input id="address" v-model="values.address" />
            <label for="address">{{ values.address }}</label><br />

            <button type="button" @click="$emit('addRecord')">Add</button>
            </div>
            <img ref="image" /> <br />
        </fieldset>
        
    </form>
    
</template>

<style scoped>
fieldset {
    display: flex;
    justify-content: space-between;
}
</style>