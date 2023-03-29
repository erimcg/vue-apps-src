<script setup>
import { useUserStore } from '../stores/user.js'

const store = useUserStore();

let name = store.username.charAt(0).toUpperCase() + store.username.slice(1);

</script>

<template>
  <div class="block">
    <h3>{{ name }}'s Events</h3>

    <div class="event" v-for="event in store.events">
      <span class="name">{{ event.name }}</span><br>
      <span class="date">{{ event.date }}</span>
    </div>
  </div>
</template>

<style scoped>
.block {
  background-color: #97DECE;
}
</style>


