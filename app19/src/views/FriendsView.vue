<script setup>
import Heading from '../components/Heading.vue';
import { useRoute } from 'vue-router'
import { watch } from 'vue'

const props = defineProps(['main'])
props.main.style.backgroundColor = "#f5c3b5"

const route = useRoute()

// various properties on the route object
console.log("full path: " + route.fullPath)
console.log("path: " + route.path)
console.log("name: " + route.name)
console.log("params:")
console.log(route.params)

let label = undefined
setLabel()

// watch for params changes
watch(() => route.path, () => { console.log("path changed") })

// watch for params.id changes
watch(() => route.params.id, setLabel)

function setLabel() {
  console.log("params changed")
  console.log(route.params)

  let id = route.params.id
  let friendName = id ? `${id.charAt(0).toUpperCase()}${id.slice(1)}` : ''
  label = id ? `${route.name} ${friendName}` : route.name
}

</script>

<template>
  <div id="view">
  <Heading :label=label />
  <div>
    <div v-if="$route.params.id">
      Information about {{ $route.params.id }}...
    </div>
    <div v-else>
      Information about my friends...
    </div>
  </div>
  </div>
</template>

<style>

</style>
