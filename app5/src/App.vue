<script setup>
import { ref, reactive, computed } from 'vue'
import Image from './components/Image.vue'
import Logo from './components/Logo.vue'

const title = ref("Template Syntax")
const msg = ref("Lots to learn here")

function getNextMessage() {
  return "And a whole lot more"
}

const textColor = ref("blue")

function toggleColor() {
  textColor.value = (textColor.value == 'blue') ? "red" : "blue"
}

const currentEvent = ref("click")

function changeEvent() {
  currentEvent.value = (currentEvent.value === "click") ? "dblclick" : "click"
}

const fontColor = reactive({ color: 'blue' })
const fontSize = reactive({ 'font-size': '20px' })

function changeFont() {
  fontColor.color = (fontColor.color === 'red') ? 'green' : 'red';
  fontSize['font-size'] = (fontSize['font-size'] === '20px') ? '30px' : '20px';
}

const items = reactive([3, 5, 12])

function addItem() {
  items.push(Math.floor(Math.random() * 20))
}

const numberOfItems = computed(() => {
  return `Number of items: ${items.length}`
})

</script>

<template>

  <Logo />

  <div id="demo" class="container">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <h1>Class and Style Bindings</h1>
       
        <Image />

        <p>
          <span>Message: {{ msg }}</span><br>
          <span>{{ "Message: " + msg }}</span><br>
          <span>{{ `Message: ${msg}` }}</span><br>
          <span>Message: {{ msg.toUpperCase() }}</span> <br>
          <span>Message: {{ getNextMessage() }}</span><br>
        </p>

        <p>
          <button @click="toggleColor" class="me-2">Toggle Color</button>
          <span v-bind:class="textColor">First Item</span>
        </p>
   
        <p>
          <button @[currentEvent]="changeEvent" class="me-2">{{ currentEvent }}</button>
        </p>
  
        <p>
          <button @click="changeFont" class="me-2">Change Font</button>
          <span :style="[fontColor, fontSize]">Hello</span>
        </p>

        <p>
          <button @click="addItem" class="me-2">Add Item</button>
          <span>{{ numberOfItems }}</span>
        </p>
      </div>
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