<script async setup>
    import { reactive, onMounted } from 'vue'
    import { DataStore } from '../assets/DataStore.js'

    const websites = reactive({})

    onMounted(async () => {
        websites.value = await DataStore.getWebsites("./links2.json")
    })

</script>

<template>
    <section>
        <div link v-for="link in websites.value">
            <a :href="link.url">{{ link.title }}</a>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    align-items: center;

    margin: 20px;
}

div[link]>a {
    background-color: #D6E379;
    color: #899522;
 
}
</style>