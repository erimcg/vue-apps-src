<script setup>
let preLabel = "Animal: "
</script>

<template>
        <div class="card">
            <slot name="label" :text="preLabel"></slot>
            <slot></slot>
            <slot name="audio"></slot>
        </div>
</template>


<style>

</style>