<script setup>
  import { RouterView } from 'vue-router'
  import { ref } from 'vue'
  import Navbar from './components/Navbar.vue';

  // We'll pass a ref to <main> to router components so they
    // can change the background color
  const main = ref(null)
  
</script>

<template>
  <Navbar />

  <main ref="main">
    <RouterView :main="main"/>
  </main>

</template>

<style>
main {
    display: block;
    position: absolute;

    bottom:0;
    top:0;
    left:0;
    right:0;

    padding: 50px;
    margin: 50px;
    background-color: #f3e4b1;
}
</style>
