<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <h1>RouterViews in Grid</h1>
    <main>
      <RouterView name="topLeft" />
      <RouterView name="topRight" color="#62B6B7" />
      <RouterView name="bottomLeft" class="rounded-corners" style="background-color: #439A97;"/>
      <RouterView name="bottomRight" style="background-color: #CBEDD5;" />
    </main>
</template>

<style>

body {
  padding: 0;
  margin: 0;
}

#app {
  height: calc(100vh - 40px);

  display: flex; 
  flex-direction: column;

  padding: 20px;
}

main {
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;

  row-gap: 10px;
  column-gap: 10px;

  flex-grow: 1;
}

.block {
  display: flex;
  flex-direction: column;

  padding: 10px;
}

.event {
  margin: 10px;
}

.name {
  font-weight: bold;
}

.date {
  font-size: small;
}

.rounded-corners {
  border-radius: 20px;
}
</style>
