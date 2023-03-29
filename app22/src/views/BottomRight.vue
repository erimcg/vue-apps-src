<script setup>
import { useUserStore } from '../stores/user.js'

const store = useUserStore();

let name = store.username
name = name.charAt(0).toUpperCase() + name.slice(1);

function patch() {
    store.$patch({
        username: "Jamal",
        events: []
    })
}

</script>

<template>
    <div class="block">
        <h3>{{ name }}'s Events</h3>

        <div class="event" v-for="event in store.events">
            <span class="name">{{ event.name }}</span><br>
            <span class="date">{{ event.date }}</span>
        </div>

        <button type="button" @click="patch">Patch</button>
    </div>
</template>
