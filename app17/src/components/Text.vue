<!--script>
// use normal <script> to declare options
export default {
    inheritAttrs: false
}
</script-->


<script setup>
    import { useAttrs } from 'vue'

    const attrs = useAttrs()
    console.log(attrs.class)

</script>

<template>
    <div>
        contents of the card...
    </div>
</template>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>