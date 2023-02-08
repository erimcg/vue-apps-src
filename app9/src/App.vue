<script setup>
  import { ref, reactive, onMounted } from 'vue'

  const outerRadius = 300
  const innerRadius = 200

  const input = [
    { name: "Events", do: () => { alert("Events")} },
    { name: "Friends", do: () => { alert("Frields") } },
    { name: "Games", do: () => { alert("Games") } },
    { name: "Meetups", do: () => { alert("Meetups") } },
    { name: "Search", do: () => { alert("Search") } },
    { name: "Profile", do: () => { alert("Profile") } },
    { name: "Settings", do: () => { alert("Settings") } }]

  function animateClick(evt) {
    let id = evt.target.id.match(/[0-9]+/g)
    let buttonID = "Button" + id
    let labelID = "Label" + id

    d3.select(`#${buttonID}`).classed("path-animation", true)

    setTimeout(function (id) {
      d3.select(`#${id}`).classed("path-animation", false)
    }, 500, buttonID);

    d3.select(`#${labelID}`).classed("label-animation", true)

    setTimeout(function (id) {
      d3.select(`#${id}`).classed("label-animation", false)
    }, 500, labelID);
  }

  function alert(str) {
    let centerElm = document.querySelector("#center")
    centerElm.innerHTML = str
  }

  function createButtons() {

    d3.select("#center")
      .style("width", `${Math.cos(Math.PI / 4) * innerRadius * 2}px`)
      .style("height", `${Math.cos(Math.PI / 4) * innerRadius * 2}px`)
      .style("top", `${outerRadius + 20 - (Math.cos(Math.PI / 4) * innerRadius)}px`)
      .style("left", `${outerRadius + 20 - (Math.cos(Math.PI / 4) * innerRadius)}px`)

    d3.select("#button-ring")
      .style("width", `${outerRadius * 2}px`)
      .style("height", `${outerRadius * 2}px`)
      .style("top", `${outerRadius}px`)
      .style("left", `${outerRadius}px`)
      .append("g")
      .attr("transform", `translate(${outerRadius},${outerRadius})`)

    let angleGen = d3.pie()
      .startAngle(0)
      .endAngle(2 * Math.PI)
      .padAngle(.02)
      .value(1)

    let data = angleGen(input)

    let arcGen = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)

    d3.select("#button-ring g")
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .append("path")
      .attr("d", arcGen)
      .attr("id", (d, i) => "Button" + i)
      .on("click", animateClick)

    d3.select("#button-ring g")
      .selectAll("g")
      .append("text")
      .text(d => d.data.name)
      .attr("id", (d, i) => "Label" + i)
      .attr("x", d => d3.pointRadial((d.startAngle + d.endAngle) / 2, (innerRadius + outerRadius) / 2)[0])
      .attr("y", d => d3.pointRadial((d.startAngle + d.endAngle) / 2, (innerRadius + outerRadius) / 2)[1])
      .on("click", animateClick)

    d3.select("#button-ring g")
      .selectAll("g")
      .on("click", (evt, data) => data.data.do(evt))
  }

  onMounted(() => {
    createButtons()
  })

</script>


<template>
  <div id="svg-container">
    <svg id="button-ring"></svg>
    <div id="center"></div>
  </div>
</template>


<style>
#svg-container {
  padding: 20px;
  position: relative;
}

#center {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3em;
}

path {
  fill: #002868 !important;
  stroke: gray;
  stroke-width: 1;
}

text {
  font-weight: bold;
  font-size: 15px;
  fill: darkgray;
  text-anchor: middle;
}

g:hover>path {
  stroke: #BAC31A !important;
  stroke-width: 2px;
  stroke-linejoin: round;
  fill: #BAC31A !important;
  cursor: pointer;
}

.path-animation {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: dash 1s linear 1;
}

g:hover>text {
  fill: black !important;
  cursor: pointer;
}

.label-animation {
  fill: black;
}
</style>