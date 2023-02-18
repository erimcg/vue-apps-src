<script setup>
  import ArcMenu from './components/ArcMenu.vue';
  import Crank from './components/Crank.vue';
</script>

<template>
  <main>
    <ArcMenu :outerRadius="150" :innerRadius="50" />
    <Crank />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;

  margin: 20px;
}

</style>