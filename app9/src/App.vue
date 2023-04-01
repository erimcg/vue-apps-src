<script setup>
/*
import ArcMenu from './components/ArcMenu.vue'
import Crank from './components/Crank.vue'
import BallDrop from './components/BallDrop.vue';
import Lock from './components/Lock.vue'
import Clock from './components/Clock.vue'
*/

import Rolodex from './components/Rolodex.vue';

import { ref } from 'vue'

const bd1 = ref(null)
const bd2 = ref(null)
const bd3 = ref(null)
const bd4 = ref(null)
const bd5 = ref(null)
const secret = ref(null)

function showSecret() {
  console.log("got oot")
  secret.value.style.visibility = "visible"
}

function hideSecret() {
  secret.value.style.visibility = "hidden"
}
</script>

<template>
  <main>
  <!--h3>Arc Menu</h3>
    <ArcMenu :outerRadius="250" :innerRadius="200" />

    <h3>Crank</h3>
    <Crank />

    <h3>Ball Drop</h3>

    <div demo>
      <div balldrop>
        <BallDrop :jiggle=true :auto=true />
              <BallDrop vClass="v200x200" bClass="border-box" :auto=true />
            </div>
          </div>

          <div demo>
            <button type="button" @click="bd1.loadBalls">Start</button>
            <div balldrop>
              <BallDrop ref="bd1" vClass="v320x160b" bClass="tiny-ball" :numBalls=64 :jiggle=true :delay=150 />
            </div>
          </div>

          <div demo>
            <button type="button" @click="bd2.loadBalls">Start</button>
            <div balldrop>
              <BallDrop ref="bd2" vClass="v200x200" bClass="mesh" :numBalls=16 :delay=1000 :jiggle=true />
            </div>
          </div>

          <div demo>
            <button type="button" @click="bd4.loadBalls">Start</button>
            <div balldrop>
              <BallDrop ref="bd4" vClass="v200x200" bClass="grey-box" :delay=1000 :numBalls=25 clipImage="images/monkey.png" />
            </div>
          </div>

    <h3>Lock</h3>
    <div demo>
      <Lock @show="showSecret" @hide="hideSecret"/>
      <div id="secret" ref="secret">
        <h1>Secrets Revealed</h1>
      </div>
    </div>

    <h3>Clock</h3>
    <div>
      <Clock />
    </div-->

    <h3>Rolodex</h3>
    <div>
      <Rolodex />
    </div>

  </main>
</template>

<style scoped>
main {
  padding: 50px;
}

div[demo] {
  display: flex;
  align-items: center;

  border: solid 1px lightgrey;
  padding: 100px 20px 20px 20px;
  margin: 20px;
}

button {
  height: 35px;
  width: 100px;
  border-radius: 5px;
  border: solid 2px lightgrey;
  background-color: white;

  align-self: left;
}

div[balldrop] {
  display: flex;
  justify-content: center;
  width: 100%;
}

#secret {
  display: inline-block;
  width: 200px;
  height: auto;
  visibility: hidden;
}
</style>