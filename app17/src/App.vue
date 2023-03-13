<script setup>
import Container from './components/Container.vue';

</script>

<template>
  <div id="outermost">
    <h1>Fallthrough Attributes</h1>
    <Container class="textbox thistle" style="border: solid 10px grey;" />
  </div>
</template>

<style>

#outermost {
  background-color: dimgrey;
  padding: 20px;

  width: 400px;
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.textbox {
  width: 200px;
  height: 200px;
}

.thistle {
  background-color: thistle;
}
</style>