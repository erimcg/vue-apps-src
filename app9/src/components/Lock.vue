<script setup>

import { ref, onMounted } from 'vue'

const emit = defineEmits(['show', 'hide'])

const t1 = ref(null)
const t2 = ref(null)
const t3 = ref(null)
const hook = ref(null)

const code = 625

let scrolling = false
let curTumbler = undefined

function mouseDown(elm) {
    scrolling = true
    curTumbler = elm
}

function mouseMove(e, elm) {
    if (!scrolling) return

    let offset = +elm.getAttribute("offset")
    offset += (e.movementY * 10)
    elm.style.backgroundPosition = `0px ${offset}px`
    elm.setAttribute("offset", offset)
}

function mouseUp() {
    let offset = +curTumbler.getAttribute("offset")
    let diff = offset % 100
    offset = (Math.abs(diff) > 50) ? offset + (Math.sign(diff) * 100 - diff) : offset + (-1 * diff)

    curTumbler.style.backgroundPosition = `0px ${offset}px`
    curTumbler.setAttribute("offset", offset)

    let codeT1 = +t1.value.getAttribute("offset") % 1000
    codeT1 = codeT1 < 0 ? -codeT1 : (1000 - codeT1) % 1000

    let codeT2 = +t2.value.getAttribute("offset") % 1000
    codeT2 = codeT2 < 0 ? -codeT2 : (1000 - codeT2) % 1000
    codeT2 = codeT2 / 10

    let codeT3 = +t3.value.getAttribute("offset") % 1000
    codeT3 = codeT3 < 0 ? -codeT3 : (1000 - codeT3) % 1000
    codeT3 = codeT3 / 100

    if (codeT1 + codeT2 + codeT3 == code) {
        console.log("unlocked")
        hook.value.className = "open"
        emit("show")
    }
    else if (hook.value.className == "open") {
        hook.value.className = "close"
        emit("hide")
    }

    scrolling = false
    curTumbler = undefined
}

onMounted(() => {
    document.addEventListener("mouseup", mouseUp)
})

</script>

<template>
    <div id="lock">
        <div id="hook" ref="hook">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="300" height="240">
                <path d="M 20 160 h -20 0 C 0 -40 180 -70 160 240 h -20 0" stroke-width="2" stroke="lightgrey"
                    fill="lightgrey" />
                <path d="M 20 160 C 20 -10 160 -40 140 240" stroke-width="2" stroke="lightgrey" fill="white" />
            </svg>
        </div>
        <div id="case">
            <div id="tumblers">
                <div ref="t1" offset="0" digit="0" class="number" @mousedown="mouseDown(t1)"
                    @mousemove="mouseMove($event, t1)"></div>
                <div ref="t2" offset="0" digit="0" class="number" @mousedown="mouseDown(t2)"
                    @mousemove="mouseMove($event, t2)"></div>
                <div ref="t3" offset="0" digit="0" class="number" @mousedown="mouseDown(t3)"
                    @mousemove="mouseMove($event, t3)"></div>
            </div>
        </div>
    </div>
</template>

<style>
#case {
    position: relative;
    width: 180px;
    height: 200px;
    overflow: hidden;

    background-color: hsl(0, 0%, 83%);
    border: solid 1px #d3d3d3;
    border-radius: 5px;
    z-index: 2;

    display: flex;
    justify-content: center;
    align-items: center;
}

#hook {
    position: relative;
    top: 80px;
    left: 10px;
    z-index: 1;
}

.open {
    animation: openLock 0.5s ease-in 0s 1 forwards;
}

.close {
    animation: closeLock 0.5s ease-in 0s 1 forwards;
}

@keyframes openLock {
    from {
        top: 80px
    }

    to {
        top: 30px;
    }
}

@keyframes closeLock {
    from {
        top: 30px
    }

    to {
        top: 80px;
    }
}


.number {
    display: inline-block;
    width: 50px;
    height: 100px;
    background: url(images/numbers.png);

    background-color: white;
    border: solid 1px lightgrey;
    border-radius: 5px;
}
</style>