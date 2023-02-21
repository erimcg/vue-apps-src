<script setup>
import { ref, reactive } from 'vue'

import Logo from '../../app14/src/components/Logo.vue';
import NewRecord1 from './components/NewRecord1.vue';
import NewRecord2 from './components/NewRecord2.vue';
import NewRecord3 from './components/NewRecord3.vue';
import NewRecord4 from './components/NewRecord4.vue';
import NewRecord5 from './components/NewRecord5.vue';
import NewRecord6 from './components/NewRecord6.vue';

let records = reactive([])

const name2 = ref('Britney')
const name2b = ref('Caleb')
const name3 = ref('Devon')
const name4 = ref('Eston')

const name5 = ref('Felix')
const address5 = ref('')

const info6 = ref({
  name: 'Gretchen',
  address: '',
  file: 'chick.png'
})

function addRecord5() {
  records.push({
    name: name5.value,
    address: address5.value
  })
}

function addRecord6() {
  records.push({
    name: info6.value.name,
    address: info6.value.address
  })
}

</script>

<template>
  <Logo title="Vue" subtitle="Component v-model" />
  
  <main>
    <section id="forms">
      <NewRecord1 
        title="Passing value via emitter"
        name="Abby"
        @addRecord="value => records.push(value)" />

      <NewRecord2
        title="2-way binding with modelValue"
        :modelValue="name2" 
        @update:modelValue="arg => name2 = arg" 
        @addRecord="() => records.push(name2)" />

      <NewRecord2 
        title="2-way binding with modelValue & v-model in parent"
        v-model="name2b" 
        @addRecord="() => records.push(name2b)" />

      <NewRecord3
        title="2-way binding with custom prop name"
        v-model:name="name3"
        @addRecord="() => records.push(name3)" />

      <NewRecord4 
        title="2-way binding using v-model in both components"
        v-model:name="name4" 
        @addRecord="() => records.push(name4)" />

      <NewRecord5
        title="2-way binding with mulitiple inputs"
        v-model:name="name5" 
        v-model:address="address5" 
        @addRecord="addRecord5" />

      <NewRecord6
          title="2-way binding with object prop"
          v-model:info="info6"
          @addRecord="addRecord6" />
    </section>

    <section id="list">
        <span>Form info accessible in Vue.app</span> <br /><br />

        <div v-for="record in records">
          <span>{{ record }}</span><br>
        </div>
    </section>
  </main>
</template>

<style>
main {
  display: flex;
  margin: 10px 10%;
}

section {
  margin: 10px;
}

#forms {
  width: 50%;
  display: flex;
  flex-direction: column;
}

#list {
  width: 30%;
  padding: 10px;
  border: solid 1px black;
}

label {
  margin: 0 0 0 10px;
}

img {
  width: 30px;
}

button {
  margin: 3px 0 0 0;
}
</style>