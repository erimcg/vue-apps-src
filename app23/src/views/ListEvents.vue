<script setup>
import Card from '../components/Card.vue';

import { useEventsStore } from '@/stores/events'
const store = useEventsStore()

</script>

<template>
  <section id="eventList">
    <h3>Events</h3>
    <Card v-for="event in store.events" :event="event" @delete="store.deleteEvent"/>
  </section>
</template>

<style scoped>

#eventList {
  padding: 10px;
  background-color: lightsteelblue;
}

</style>