<script setup>

import Ball from '../assets/Ball';
import { ref, onMounted } from 'vue'

defineExpose({
    loadBalls,
});

const props = defineProps({
    id: String,
    height: String,
    width: String,
    numBalls: Number,
    color: String,
    delay: Number,
    jiggle: Boolean,
    bClass: String,
    vClass: String,
    clipImage: String,
    auto: Boolean
})

let numBalls = 25
let color = undefined

let container = ref(null)
let balls = []
let delay = 500
let collisions = null
let selectedBall = null
let intervalID = -1
let count = 0
let jiggle = false
let clipImage = null
let startOnMounted = false
let ballClass = undefined
let floor = null

onMounted(async () => {

    if (props.width) {
        container.value.style.width = props.width
    }
    if (props.height) {
        container.value.style.height = props.height
    }
    if (props.numBalls) {
        numBalls = props.numBalls
    }
    if (props.color) {
        color = props.color
    }
    if (props.delay) {
        delay = Math.max(props.delay, 100)
    }
    if (props.jiggle) {
        jiggle = props.jiggle
    }
    if (props.vClass) {
        container.value.className = props.vClass
    }
    if (props.clipImage) {
        clipImage = props.clipImage
    }
    if (props.auto) {
        startOnMounted = props.auto
    }

    ballClass = (props.bClass) ? props.bClass : "ball"

    collisions = new CollisionDetection(container, jiggle)

    floor = new Ball(container, collisions, numBalls, { class: "floor", atRest: true })
    container.value.appendChild(floor)
    collisions.add(floor)

    if (startOnMounted) {
        loadBalls()
    }
})

function loadBalls() {
    intervalID = setInterval(async () => {

        let b = new Ball(container, collisions, numBalls,
            {
                id: makeid(5) + count,
                delay,
                atRest: false,
                floor,
                color,
                class: ballClass,
                clipImage
            })

        container.value.appendChild(b)
        collisions.add(b)
        balls.push(b)

        if (count == 0) {
            selectedBall = b
        }

        count++

        if (count == numBalls) {
            clearInterval(intervalID)
        }
    }, +delay)
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

document.addEventListener("componentready", (e) => {
    console.log(e)  //never fired
}, false)

class CollisionDetection {

    moveFloorAfterPositioning = false

    constructor(container, jiggle) {
        this.container = container.value
        this.cRect = this.container.getBoundingClientRect()
        this.elms = []
        this.jiggle = jiggle

        const cs = window.getComputedStyle(this.container);
        const paddingX = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
        const borderX = parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth);

        this.cWidth = this.container.offsetWidth - paddingX - borderX;
    }

    add(elm) {
        this.elms.push(elm)
        if (elm.rootElm.className == "floor") {
            this.floor = elm
        }
    }

    list() {
        for (let elm of this.elms) {
            console.log(elm)
        }
    }

    async positionOnFloor(elm) {
        let elmsOnRow = []
        elmsOnRow.push(elm)

        let elmTop = parseInt(window.getComputedStyle(elm.rootElm).getPropertyValue('top'))
        let elmWidth = parseInt(window.getComputedStyle(elm.rootElm).getPropertyValue('width'))
        let elmHeight = parseInt(window.getComputedStyle(elm.rootElm).getPropertyValue('height'))

        for (let i = 1; i < this.elms.length; i++) {
            if (this.elms[i] == elm) {
                continue;
            }
            let iTop = parseInt(window.getComputedStyle(this.elms[i].rootElm).getPropertyValue('top'))
            if (elmTop === iTop) {
                elmsOnRow.push(this.elms[i])
            }
        }

        if (elmsOnRow.length == 1) {
            return
        }

        if ((elmsOnRow.length + 1) * elmWidth > this.cWidth) {
            let curTop = parseInt(window.getComputedStyle(this.floor.rootElm).getPropertyValue("top"))
            this.floor.rootElm.style.top = (curTop - elmHeight) + "px"
        }

        elmsOnRow.sort((a, b) => {
            let aLeft = parseInt(window.getComputedStyle(a.rootElm).getPropertyValue('left'))
            let bLeft = parseInt(window.getComputedStyle(b.rootElm).getPropertyValue('left'))

            return aLeft - bLeft
        })

        let leftVals = elmsOnRow.map((elm) =>
            parseInt(window.getComputedStyle(elm.rootElm).getPropertyValue('left'))
        )

        // TODO: spread elms from inserted element

        let overlaps = this.computeOverlaps(elmsOnRow)
        let numOverlaps = this.posCount(overlaps)
        let coin = this.flipCoin()

        while (numOverlaps > 0) {
            if (coin == 0) {
                for (let i = 0; i < elmsOnRow.length - 1; i++) {
                    await this.checkForCollision(elmsOnRow[i], elmsOnRow[i + 1])
                }
            }
            else {
                for (let i = elmsOnRow.length - 1; i > 0; i--) {
                    await this.checkForCollision(elmsOnRow[i - 1], elmsOnRow[i])
                }
            }

            leftVals = elmsOnRow.map((elm) =>
                parseInt(window.getComputedStyle(elm.rootElm).getPropertyValue('left'))
            )

            coin = this.flipCoin()

            overlaps = this.computeOverlaps(elmsOnRow)
            numOverlaps = this.posCount(overlaps)
        }
        return true
    }

    flipCoin() {
        return Math.floor((Math.random() * 2))
    }

    computeOverlaps(elmsOnRow) {
        let overlaps = []

        for (let i = 0; i < elmsOnRow.length - 1; i++) {
            let elm1Left = parseInt(window.getComputedStyle(elmsOnRow[i].rootElm).getPropertyValue('left'))
            let elm2Left = parseInt(window.getComputedStyle(elmsOnRow[i + 1].rootElm).getPropertyValue('left'))
            let bWidth = parseInt(window.getComputedStyle(elmsOnRow[i].rootElm).getPropertyValue('width'))

            let overlap = bWidth - Math.abs(elm1Left - elm2Left)
            overlaps.push(overlap)
        }
        return overlaps
    }

    posCount = (arr) => {
        return arr.reduce((total, current) => {
            return total += (current > 0) ? current : 0;
        }, 0);
    }

    async checkForCollision(elm1, elm2) {
        if (this.intersects(elm1, elm2)) {
            await this.moveElmsHorizontally(elm1, elm2)
        }
    }

    intersects(elm1, elm2) {
        let elm1Left = parseInt(window.getComputedStyle(elm1.rootElm).getPropertyValue('left'))
        let elm2Left = parseInt(window.getComputedStyle(elm2.rootElm).getPropertyValue('left'))

        let bWidth = parseInt(window.getComputedStyle(elm1.rootElm).getPropertyValue('width'))

        let hOverlap = bWidth - Math.abs(elm1Left - elm2Left)

        let elm1Top = parseInt(window.getComputedStyle(elm1.rootElm).getPropertyValue('top'))
        let elm2Top = parseInt(window.getComputedStyle(elm2.rootElm).getPropertyValue('top'))

        let vOverlap = bWidth - Math.abs(elm1Top - elm2Top)

        return (vOverlap >= 1 && hOverlap >= 1)

    }

    async moveElmsHorizontally(elm1, elm2) {
        let elm1Left = parseInt(window.getComputedStyle(elm1.rootElm).getPropertyValue('left'))
        let elm2Left = parseInt(window.getComputedStyle(elm2.rootElm).getPropertyValue('left'))
        let elm2Right = parseInt(window.getComputedStyle(elm2.rootElm).getPropertyValue('right'))

        let bWidth = parseInt(window.getComputedStyle(elm1.rootElm).getPropertyValue('width'))

        let hOverlap = Math.ceil(bWidth - Math.abs(elm1Left - elm2Left))

        if (hOverlap > 0) {

            let dx1 = 0
            let dx2 = 0

            if (elm1Left <= Math.ceil(hOverlap / 2)) {
                dx1 = elm1Left
                dx2 = hOverlap - dx1
            }
            else if (elm2Right <= Math.ceil(hOverlap / 2)) {
                dx2 = elm2Right
                dx1 = hOverlap - dx2
            }
            else {
                dx1 = this.flipCoin() == 0 ? Math.floor(hOverlap / 2) : Math.ceil(hOverlap / 2)
                dx2 = hOverlap - dx1
            }

            if (this.jiggle) {
                await new Promise(r => setTimeout(r, 10));
            }
            
            elm1.rootElm.style.left = Math.floor(elm1Left - dx1) + "px"
            elm2.rootElm.style.left = Math.ceil(elm2Left + dx2) + "px"
        }
    }

}

</script>

<template>
    <div vessel class="default" ref="container" style="position:relative; display:inline-block;"></div>
</template>

<style scoped>

@import '../assets/container.css'

    
</style>