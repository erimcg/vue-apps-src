<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps(['card'])

const card = ref(null)

onMounted(() => {
    card.value.id = 'card' + props.card.id

})

</script>

<template>
    <div ref="card" class="bubble">
    </div>
</template>

<style>
.bubble {
    position: absolute;
    
    width: 100px;
    height: 100px;

    margin-bottom: 100px;
    text-align: center;

    border-radius: 50%;

    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(204,147,245,1) 100%);
    
    z-index: 2;
}
</style>