<script setup>
import { onMounted, ref } from 'vue'
import { provide } from 'vue'

import Bubble from './Bubble.vue'
import Card from './Card.vue'

import { cards } from '@/assets/cards.js'
const cardArray = ref(cards)

const rolodex = ref(null)
const wheel = ref(null)

const selectedCard = ref(cards[0])
provide('selectedCard', selectedCard)

const showCard = ref(false)

let wheelTop = 0
let velocity = 0

onMounted(() => {
    let top = 0;

    for (let card of wheel.value.children) {
        card.style.top = top + "px"
        top += 150

        let rectTop = card.getBoundingClientRect().top
        let wheelYCenter = wheelTop + 400
        let distFromCenter = Math.abs(wheelYCenter - rectTop)

        let scale = 0

        if (distFromCenter <= 400) {
            scale = Math.round((1 - (distFromCenter / 400)) * 100)
        }

        card.style.transform = `scale(${scale}%)`

        let left = Math.round((distFromCenter / 400) * 125)
        card.style.left = left + "px"
    }

    wheelTop = wheel.value.getBoundingClientRect().top
    showCard.value = false
})

async function rotateWheel(e) {
    e.preventDefault()

    velocity = 5

    while (velocity > 0.001) {
        for (let card of wheel.value.children) {
            let computedTop = parseInt(window.getComputedStyle(card).getPropertyValue('top'))
            computedTop = computedTop - Math.sign(e.deltaY)
            card.style.top = computedTop + "px"

            let rectTop = card.getBoundingClientRect().top
            let wheelYCenter = wheelTop + 400
            let distFromCenter = Math.abs(wheelYCenter - rectTop)

            let scale = 0

            if (distFromCenter <= 400) {
                scale = Math.round((1 - (distFromCenter / 400)) * 100)
            }

            card.style.transform = `scale(${scale}%)`

            let leftOffset = (wheelYCenter - rectTop > 0) ? Math.pow((100 - scale) * 0.05, 3) : Math.pow((100 - scale) * -0.045, 3)

            let left = Math.round((distFromCenter / 400) * 140) - leftOffset
            card.style.left = left + "px"

            if (distFromCenter < 50) {
                selectedCard.value = cards.find((elm) => elm.id === parseInt(card.id.slice(4)))
            }
        }

        let firstElmTop = wheel.value.firstElementChild.getBoundingClientRect().top
        let lastElmTop = wheel.value.lastElementChild.getBoundingClientRect().top

        if (firstElmTop > 0) {
            firstElmTop = parseInt(window.getComputedStyle(wheel.value.firstElementChild).getPropertyValue('top'))

            wheel.value.insertBefore(wheel.value.lastElementChild, wheel.value.firstElementChild)
            wheel.value.firstElementChild.style.top = (firstElmTop - 150) + "px"
            wheel.value.firstElementChild.style.transform = "scale(0%)"
        }
        else if (lastElmTop < 800) {
            lastElmTop = parseInt(window.getComputedStyle(wheel.value.lastElementChild).getPropertyValue('top'))

            wheel.value.appendChild(wheel.value.firstElementChild)
            wheel.value.lastElementChild.style.top = (lastElmTop + 150) + "px"
            wheel.value.firstElementChild.style.transform = "scale(0%)"
        }

        velocity -= 0.1

        await new Promise(r => setTimeout(r, 100));
    }
    velocity = 0
}

function displayCard(e) {
    let card = cards.find((elm) => elm.id === parseInt(e.target.id.slice(4)))
    selectedCard.value = card
    console.log(card)

    showCard.value = true
}

function hideCard() {
    showCard.value = false
}

</script>

<template>
    <div id="rolodex" ref="rolodex">
        <section>
            <div ref="wheel" id="wheel" @wheel="rotateWheel">
                <Bubble v-for="card in cardArray" :card="card" @click="displayCard" />
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="300" height="800">

                <defs>
                    <linearGradient id="gradient1" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color="gold" stop-opacity="0" />
                        <stop offset="40%" stop-color="seagreen" stop-opacity="1" />
                        <stop offset="60%" stop-color="seagreen" stop-opacity="1" />
                        <stop offset="100%" stop-color="gold" stop-opacity="0" />
                    </linearGradient>
                </defs>

                <path d="M 300,800 h -30 C 0,600 0,200 170,0 h 30" fill="url('#gradient1')" />
                <path d="M 300,800 C 0,600 0,200 201,0" fill="white" />

                <path d="M 0,0 C 300,200 300,600 30,800 h -30 C 300,600 300,200 0,0" fill="url('#gradient1')" />
            </svg>
        </section>

        <section>
            <Card v-show="showCard" @click="hideCard" />
        </section>
    </div>
</template>

<style>
#rolodex {
   display: flex;
   flex-direction: row;

   align-items: center;
}

#wheel {
    position: absolute;

    width: 300px;
    height: 800px;

    overflow: hidden;
}
</style>