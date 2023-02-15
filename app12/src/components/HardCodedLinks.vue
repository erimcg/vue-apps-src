<script setup>
    const websites = {
        "link1": {
            "title": "ars technica",
            "url": "https://arstechnica.com"
        },
        "link2": {
            "title": "gizmodo",
            "url": "https://gizmodo.com"
        },
        "link3": {
            "title": "cnet",
            "url": "https://www.cnet.com"
        }
    }

</script>

<template>
    <section>
        <div link v-for="site in websites">
            <a :href="site.url">{{ site.title }}</a>
        </div>
    </section>
</template>

<style scoped>
section {
    display: flex;
    margin: 20px;
}

div[link]>a {
    background-color: #8D5399;
    color: #D2B4D9;
}
</style>