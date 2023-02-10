<script setup>
    import { ref, reactive, watch } from 'vue'
    import { onMounted, onUpdated} from 'vue'

    const usernameRef = ref(null)

    const username = ref('')
    const password = ref('')
    const password2 = ref('')
    const disabled = ref(true)

    const validUsername = ref(false)
    const validPassword = ref(false)
    const passwordsMatch = ref(false)

    const usernameErrorRef = ref(null)
    const passwordErrorRef = ref(null)
    const password2ErrorRef = ref(null)


    watch(username, () => {
        validUsername.value = (username.value.length >= 4)

        usernameErrorRef.value.innerHTML = (validUsername.value) ?
            "&nbsp;" : "Minimum length: 4 characters"
    })

    watch(password, () => {
        validPassword.value = (password.value.length >= 8)

        passwordErrorRef.value.innerHTML = (validPassword.value) ?
            "&nbsp;" : "Minimum length: 4 characters"
    })

    watch(password2, () => {
        passwordsMatch.value = (password.value === password2.value)

        password2ErrorRef.value.innerHTML = (passwordsMatch.value === true) ?
            "&nbsp;" : "Passwords do not match"

    })

    watch([validUsername, validPassword, passwordsMatch], async () => {
        disabled.value = !(validUsername.value && validPassword.value && passwordsMatch.value)
        console.log(disabled.value)
    })

    function submit() {
        
        let mssg = username.value + ", " + password.value
        console.log(mssg)
    }

    onMounted(() => {
        usernameRef.value.focus();
    })

    onUpdated(() => {
        console.log(usernameRef.value.value)
    })

</script>


<template>
    <div class="container">
        <form class="rounded border border-primary border-2 border-opacity-25 py-3 px-5">
            <fieldset class="d-flex flex-column">
                <legend>Create Account</legend>

                <div class="form-floating">
                    <input ref="usernameRef" v-model="username" id="username" type="text" class="form-control" />
                    <label for="username" class="form-label">Username</label>
                    <span ref="usernameErrorRef">&nbsp</span>
                </div>

                <div class="form-floating">
                    <input v-model="password" id="password" type="password" class="form-control" />
                    <label for="password" class="form-label">Password</label>
                    <span ref="passwordErrorRef">&nbsp;</span>
                </div>

                <div class="form-floating">
                    <input v-model="password2" id="password2" type="password" class="form-control" />
                    <label for="password2" class="form-label">Reenter password</label>
                    <span ref="password2ErrorRef">&nbsp;</span>
                </div>

                <div>
                    <button @click="submit" class="btn btn-primary" type="button" v-bind:disabled="disabled">Create</button>
                </div>
            </fieldset>
        </form>
    </div>

</template>

<style>
span {
    font-size: small;
    color: red;
    vertical-align: text-top;
}
</style>