<script setup>

defineProps({
  title: String,
  subtitle: String
})

</script>

<template>
  <div id="logo">
    <div id="title">{{ title }}</div>
    <div id="subtitle">{{ subtitle }}</div>
    <img alt="Vue logo" src="../assets/vueLogo.png" />
  </div>
</template>

<style>
#logo {
  margin: 15px;
  
  aspect-ratio: 1 / 1;
  width: 15vh;

  background-color: lightgray;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#title {
  font-size: 2.5vh;
}

#subtitle {
  font-size: 1.4vh;
}

img {
  display: inline-block;
  width: 50%;
}
</style>
