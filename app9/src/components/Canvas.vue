<script setup>

/**@type {HTMLCanvasElement} */
let canvas = document.getElementById("canvas")

let ctx = canvas.getContext("2d")

ctx.strokeStyle = "red"

ctx.strokeRect(20,20,40,40)
ctx.fillRect(20,20,40,40)

ctx.beginPath();
ctx.moveTo(10., 10)

let x = 10
let y = 10

function update() {
    requestAnimationFrame(update)

    ctx.clearRect(0,0,canvas.width, canvas.height)

    ctx.fillrect(x, y, 10, 10)
    x++;
}

update()



</script>


<template>
<canvas id="canvas"></canvas>


</template>

<style>
canvas {
    border: solid 2px gray;
    width: 50vw;

}
</style>