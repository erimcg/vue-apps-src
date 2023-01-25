<script setup>
import { ref, reactive } from 'vue'
import Image from './components/Image.vue'

const title = ref("Template Syntax")
const msg = ref("Lots to learn here")

function getNextMessage() {
  return "And a whole lot more"
}

const textColor = ref("blue")

function toggleColor() {
  textColor.value = (textColor.value == 'blue') ? "red" : "blue"
}

const disableButton = ref(false)

function toggleColorButton() {
  disableButton.value = !disableButton.value
}

</script>

<template>
  <h1 class="my-5">{{ title }}</h1>

  <div class="row">
    <div class="col-md-10 offset-md-1">
      <Image></Image>
    </div>
  </div>

  <div class="row">
    <div class="col-md-10 offset-md-1">
      <p>
        <span>Message: {{ msg }}</span><br>
        <span>{{ "Message: " + msg }}</span><br>
        <span>{{ `Message: ${msg}` }}</span><br>
        <span>Message: {{ msg.toUpperCase() }}</span> <br>
        <span>Message: {{ getNextMessage() }}</span><br>
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col-md-10 offset-md-1">
      <p>
        <button v-bind:disabled="disableButton" class="me-2" @click="toggleColor()">Toggle</button>
        <button @click="toggleColorButton()" class="me-2">{{ disableButton? "Enable": "Disable" }}</button>

        <span v-bind:class="textColor">First Item</span>
      </p>
    </div>
  </div>

</template>

<style>
.blue {
  color: blue;
}

.red {
  color: red;
}
</style>