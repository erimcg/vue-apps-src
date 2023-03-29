<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user.js'
import { watch, ref } from 'vue';

let name = ref('')

const { username, events, modUsername } = useUserStore()
//username = "Joe"   cannot do this - not a ref. Read only property
name.value = username.charAt(0).toUpperCase() + username.slice(1);

/*
const store = useUserStore()
const { username, events } = storeToRefs(store)
const { modUsername } = useUserStore()

name.value = username.value.charAt(0).toUpperCase() + username.value.slice(1);
*/
/*
watch(username, () => {
    name.value = username.value.charAt(0).toUpperCase() + username.value.slice(1);
})
*/

</script>

<template>
    <div ref="block" class="block">
        <h3>{{ name }}'s Events</h3>

        <div class="event" v-for="event in events">
            <span class="name">{{ event.name }}</span><br>
            <span class="date">{{ event.date }}</span>
        </div>

        <button type="button" @click="modUsername()">Mod</button>
    </div>
</template>