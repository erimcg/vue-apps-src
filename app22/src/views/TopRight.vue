<script setup>
import { useUserStore } from '../stores/user.js'
import { onMounted, ref, watch } from 'vue'

const store = useUserStore();

const props = defineProps(['color'])
const block = ref(null)

onMounted(() => {
    block.value.style.backgroundColor = props.color
})

let name = ref('')
name.value = store.username.charAt(0).toUpperCase() + store.username.slice(1);

watch(store, () => {
    name.value = store.username.charAt(0).toUpperCase() + store.username.slice(1);
})

</script>

<template>
    <div ref="block" class="block">
        <h3>{{ name }}'s Events</h3>

        <div class="event" v-for="event in store.events">
            <span class="name">{{ event.name }}</span><br>
            <span class="date">{{ event.date }}</span>
        </div>
        <button type="button" @click="store.reset()">Reset</button>
    </div>
</template>
