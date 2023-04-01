<script setup>

import { inject} from 'vue'

const selectedCard = inject('selectedCard')

</script>

<template>
    <div class="card">
        <div class="name">
           {{ selectedCard.name }}
        </div>
        <div class="phone">
            {{ selectedCard.phone }}
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    justify-content: center;

    width: 400px;
    height: 400px;

    margin-bottom: 100px;
    padding: 50px;
    text-align: center;

    border: 1px solid lightgrey;
    border-radius: 50%;

    font-family: 'Optima';
    font-size: 1.5em;
}
</style>