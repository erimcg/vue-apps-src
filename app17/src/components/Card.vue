<!--script>
// use normal <script> to declare options
export default {
    inheritAttrs: false
}
</script-->

<script setup>
import Button from './Button.vue';
import Text from './Text.vue'

import { ref } from 'vue'
import { useAttrs } from 'vue'

const attrs = useAttrs()
console.log(attrs.class)

const card = ref(null)

function update() {
    card.value.classList.remove('polka-dots', 'thistle')
    card.value.classList.add('stripes')
}
</script>

<template>
    <div class="card" ref="card">
        <h3>Card</h3>
        <Text v-bind="$attrs" />
        <Button @click="update" />
    </div>
</template>

<style scoped>
h1,
h2,
h3 {
    color: green;
}

.stripes {
    background-image: url(../assets/stripes.jpeg);
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
}

.card {
    padding: 20px;
    /*background-color: seagreen;*/
    width: 300px;
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>