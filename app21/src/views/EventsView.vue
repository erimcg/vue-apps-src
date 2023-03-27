<script setup>
import { useUserStore } from '../stores/user.js'

const store = useUserStore();

let name = store.username
name = name.charAt(0).toUpperCase() + name.slice(1);

</script>

<template>
   <main>

      <h3>Events for {{ name }}</h3>

      <div v-for="event in store.events">
         <h5>{{ event.name }}</h5>
         <h6>{{ event.date }}</h6>
      </div>

   </main>
</template>


<style scoped>
main {
   padding: 50px;
   height: 400px;
}

main > div {
   margin: 20px;
}
</style>