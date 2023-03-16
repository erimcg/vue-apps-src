<script async setup>
    import { reactive, watch } from 'vue'
    import { DataStore } from '../assets/DataStore.js'
    
    const websites = reactive({})

    // links.json and links2.json are in public
    websites.value = await DataStore.getWebsites("./links.json")

    watch(websites, async () => {
        websites.value = await DataStore.getWebsites("./links2.json")
    })

    function pressMe() {

        if (websites.value.link4) {
            delete websites.value.link4
        }
        else {
            console.log("click")
            websites.value.link4 = {
                title: "Mozilla",
                url: "https://developer.mozilla.org"
            }
        }
    }
</script>

<template>
    <section>
        <div link v-for="link in websites.value">
            <a :href="link.url">{{ link.title }}</a>
        </div>
        <button type="button" @click="pressMe">Press</button>
    </section>
</template>

<style scoped>
section {
    display: flex;
    margin: 20px;
}

div[link]>a {
    background-color: #E8A07B;  
    color: #FFE2D3;
}

button {
    background-color: #E8A07B;
    color: #FFE2D3;

    padding: 3px 15px;
    margin: 0 10px;
    border-radius: 10px;
    text-decoration: none;

    box-shadow: none;
    border: none;
}
</style>