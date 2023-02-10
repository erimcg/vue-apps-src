<script setup>
    import Logo from './components/Logo.vue'
    import CreateAccount from './components/CreateAccount.vue'

</script>


<template>
    <Logo />

    <main>
        <div>
            <CreateAccount />
        </div>
    </main> 
</template>

<style>
main {
    display: flex;
    justify-content: center;
}

</style>