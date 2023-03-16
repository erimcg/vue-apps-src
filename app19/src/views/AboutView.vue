<script setup>
  import Heading from '../components/Heading.vue';

  const props = defineProps(['main'])
  props.main.style.backgroundColor = "#93d7dc"
</script>

<template>
    <Heading label="About" />
    <div>
      About {{ $route.name }}...
    </div>
</template>

<style>

</style>
