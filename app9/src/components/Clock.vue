<script setup>
import { onMounted } from 'vue'

let hours = [...Array(12).keys()].map(x => ++x)
let mins = [...Array(60).keys()].map(x => ++x)

let curHour = undefined
let curMin = undefined

function createHourId(x) {
    return `hr${x}`
}

function createMinId(x) {
    return `min${x}`
}

function createHours() {
    for (let i = 1; i <= 12; i++) {
        let elm = document.getElementById(`hr${i}`)

        let cx = 150 - 15
        let cy = 150 - 15
        let angle = ((1.5 * Math.PI) + ((2 * Math.PI / 12) * i)) % (2 * Math.PI)
        let r = 125

        let elmY = (Math.sin(angle) * r)
        let elmX = Math.cos(angle) * r

        elm.style.top = (cy + (elmY)) + "px"
        elm.style.left = (cx + (elmX)) + "px"
    }
}

function createMinutes() {
    for (let i = 1; i <= 60; i++) {
        let elm = document.getElementById(`min${i}`)

        let cx = 150 - 5
        let cy = 150 - 5
        let angle = ((1.5 * Math.PI) + ((2 * Math.PI / 60) * i)) % (2 * Math.PI)
        let r = 100

        let elmY = (Math.sin(angle) * r)
        let elmX = Math.cos(angle) * r

        elm.style.top = (cy + (elmY)) + "px"
        elm.style.left = (cx + (elmX)) + "px"
    }
}

function tick() {
    var time = new Date();
    let hour = time.getHours() % 12 || 12
    let hourElm = document.getElementById(`hr${hour}`)

    if (curHour != hourElm) {
        curHour.style.backgroundColor = "white"
        curHour.style.color = "black"
        curHour = hourElm
        curHour.style.backgroundColor = "blue"
        curHour.style.color = "white"
    }

    let min = time.getMinutes() % 60 || 60
    let minElm = document.getElementById(`min${min}`)

    if (curMin != minElm) {
        curMin.style.backgroundColor = "white"
        curMin.style.color = "black"
        curMin = minElm
        curMin.style.backgroundColor = "blue"
        curMin.style.color = "white"
    }

    let sec = time.getSeconds() % 60 || 60
    let secondHand = document.getElementById('secondHand')
    let angle = 6 * (sec - 15)
    secondHand.style.transform = `rotateZ(${angle}deg)`
}

onMounted(() => {
    createHours()
    createMinutes()

    var time = new Date();
    let sec = time.getSeconds() % 60 || 60
    let secondHand = document.getElementById('secondHand')
    let angle = 6 * (sec - 15)
    secondHand.style.transform = `rotateZ(${angle}deg)`

    curHour = document.getElementById(`hr1`)
    curMin = document.getElementById(`min1`)

    setInterval(tick, 1000)
})

</script>

<template>
    <div id="clock">
        <div v-for="x of hours" :id=createHourId(x) class="hour">
            {{ x }}
        </div>
        <div v-for="x of mins" :id=createMinId(x) class="min"></div>

        <div id="secondHand">
            <div class="line"></div>
        </div>
    </div>
</template>

<style>
#clock {
    position: relative;
    width: 300px;
    height: 300px;

    border: solid 2px lightgrey;
    border-radius: 50px;
}

.hour {
    position: absolute;
    width: 30px;
    height: 30px;

    border-radius: 10px;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
}

.min {
    position: absolute;
    width: 10px;
    height: 10px;

    border-radius: 5px;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center; 
}

#secondHand {
    position: absolute;
    top: 150px;
    left: 150px;

    width: 1px;
    height: 1px;
}

.line {
    width: 50px;
    height: 1px;

    background-color: blue;
}
</style>