<script setup>
import { ref, onMounted } from 'vue'

const apparatus = ref(null)
const crank = ref(null)
const fluid = ref(null)

let mouseDown = false;

let rad = Math.PI * 1.75

function rotateCrank(e) {
    //if (e.target !== e.currentTarget) return;
    if (!mouseDown) return

    let bounds = apparatus.value.getBoundingClientRect();
    let x = e.clientX - bounds.left;  
    let y = e.clientY - bounds.top;

    let newRad = Math.atan2(x - 100, y - 100)

    x = 50 * Math.sin(newRad) + 90
    y = 50 * Math.cos(newRad) + 90

    crank.value.style.left = x + "px"
    crank.value.style.top = y + "px"

    let offset = (newRad > rad) ? 0.1 : -0.1
    rad = newRad

    let height = fluid.value.getBoundingClientRect().height
    fluid.value.style.height = (height + offset) + "px"
}

onMounted(() => {
    crank.value.addEventListener("mousedown", (e) => {
        e.preventDefault();
        mouseDown = true
        crank.value.style["background-color"] = "#adadad"
    })
    apparatus.value.addEventListener("mouseup", () => {
        mouseDown = false
        crank.value.style["background-color"] = "blue"
    })
})
</script>

<template>
    <section>
        <h3>Crank</h3>

        <div ref="apparatus" id="apparatus" @mousemove="rotateCrank">
            <div ref="crank" id="crank" ></div>
            <div id="wheel" ></div>
        </div>

        <div id="cup">
            <div ref="fluid" id="fluid"></div>
        </div>

    </section>
</template>

<style>
section {
    display: flex;
    align-items: center;
}

#cup {
    display: flex;
    flex-direction: column;

    justify-content: end;

    width: 70px;
    height: 100px;

    border: solid 2px #cecccc;
}

#fluid {
    width: 66px;
    height: 70px;

    background-color: blue;
    border: none;
}

#apparatus {
    position: relative;

    width: 200px;
    height: 200px;
}

#crank {
    position: relative;
    
    top: 80px;
    left: 40px;

    width: 20px;
    height: 20px;

    background-color: blue;
    border-radius: 10px;

    z-index: 2;
    cursor: crosshair;
}

#wheel {
    position: absolute;

    top: 50px;
    left: 50px;

    width: 100px;
    height: 100px;

    border: solid 2px #cecccc;
    box-sizing: border-box;
    border-radius: 50px;
}

</style>