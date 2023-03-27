<script setup>
  import { RouterView } from 'vue-router'
  
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterView name="rightNavbar"/>
  </nav>

  <RouterView />
</template>

<style>

body {
  padding: 10px;

  font-family: Arial, Helvetica, sans-serif;
}

nav {
  display: flex;
  justify-content: space-between;
}

nav > a {
  padding-right: 10px;
}

</style>
