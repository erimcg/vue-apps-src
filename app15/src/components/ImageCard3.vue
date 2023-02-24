<script setup>
let preLabel = "Animal: "

</script>

<template>
        <div class="card">
            <slot :text="preLabel"></slot>
        </div>
</template>


<style>

</style>