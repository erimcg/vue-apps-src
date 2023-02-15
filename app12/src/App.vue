<script setup>
    import Logo from './components/Logo.vue'
    import HardCodedLinks from './components/HardCodedLinks.vue';
    import ImportedLinks from './components/ImportedLinks.vue'
    import FetchedLinks from './components/FetchedLinks.vue';
    import OnMountedLinks from './components/OnMountedLinks.vue';

    import { ref } from 'vue'

    const display = ref(true)

    function showLinks() {
        display.value = (display.value) ? false : true;
    }

</script>

<template>
    <Logo />
    <main>
        <div v-if="display">
            <h3>Awesome Tech Sites</h3>
            <HardCodedLinks />

            <ImportedLinks />

            <Suspense>
                <FetchedLinks />
            </Suspense>

            <OnMountedLinks />
        </div>
        <button id="showLinks" type="button" @click="showLinks">Show Links</button>
    </main>

</template>

<style>
/* https://paletton.com */
main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

main > div {
    border: 3px solid rgb(179, 179, 233);
    border-radius: 20px;

    width: fit-content;
}

main > div > h3 {
    margin-top: 10px;;
}

main>div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div[link]>a {
    padding: 3px 15px;
    margin: 0 10px;
    border-radius: 10px;
    text-decoration: none;
}

#showLinks {
    display: inline-block;
    width: 300px;
    border-radius: 20px;
    background-color: darkmagenta;
    color: white;

    position: absolute;
    bottom: 25px;
}
</style>