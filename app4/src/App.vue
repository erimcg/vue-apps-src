<script setup>
import Logo from './components/Logo.vue'
import { ref } from 'vue'
import { reactive } from 'vue'

const title = ref("Vue's Reactive State")

const count = ref(1)
console.log(count.value)

function increment() {
  count.value++
  console.log(count.value)
}

const addr = ref({
  street: "123 Main Street",
  city: "Bridgewater",
  state: "VA"
})

function changeAll() {
  addr.value = {
    street: "456 Water Street",
    city: "Winthrop",
    state: "NY"
  }
}

function changeState() {
  addr.value.state = "WI"
}

const name = {
  first: ref("Jesse"),
  last: ref("Martinez")
}

function toggleName() {
  name.first.value = (name.first.value === "Jesse") ? "Mary" : "Jesse"
}

function changeLast(l) {
  l = "Alvarez"
}

function updateLast() {
  changeLast(name.last)
}

const song = reactive({
  title: "Sunflower",
  artist: ["Post Malone", "Swae Lee"]
})

song.producer = ["Carter Lang", "Louis Bell"]

function changeTitle(t) {
  t = "I Like You"
}

function updateTitle() {
  changeTitle(song.title) // does not change title in proxy
}

function modTitle(s) {
  s.title = "I Like You"
}

function updateTitle2() {
  modTitle(song)
}

</script>

<template>

  <Logo />

  <div class="container">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <h1>{{ title }}</h1>

        <p class="my-5">
          <button class="btn btn-primary" @click="increment"> Increment </button>
          <span class="mx-2 fs-5"> {{ count }} </span>
        </p>

        <p class="my-5">
          <button class="btn btn-primary me-1" @click="changeAll"> Change All </button>
          <button class="btn btn-primary" @click="changeState"> Change State </button>
          <span class="mx-2 fs-5">
            {{ addr.street }}
            {{ addr.city }}, {{ addr.state }}
          </span>
        </p>

        <p class="my-5">
          <button class="btn btn-primary" @click="toggleName"> Toggle </button>
          <span class="mx-2 fs-5">
            {{ "M." + name.first.value }}, {{ name.last.value }}
          </span>
        </p>

        <p class="my-5">
          <button class="btn btn-primary me-1" @click="updateTitle"> No Update </button>
          <button class="btn btn-primary" @click="updateTitle2"> Update </button> <br>

        <ul class="mx-2 fs-5">
          <li>
            Song: {{ song.title }}
          </li>
          <li>
            Artists: {{ song.artist }},
          </li>
          <li>
            Producers: {{ song.producer[0] }}, {{ song.producer[1] }}
          </li>
        </ul>
        </p>

      </div>
    </div>
  </div>
</template>

<style>

</style>