<script setup>

function submitUserInfo() {
    let textInput = document.querySelector("#text")
    console.log(textInput.value)
}

</script>

<template>

    <form>
        <fieldset>
            <legend>Arbitrary Text</legend>
           
            <div class="row">
                <div class="col">
                    <label for="text" class="form-label">Text</label>
                    <input id="text" class="form-control" type="text">
                </div>

                <div class="col">
                    <label for="search" class="form-label">Search</label>
                    <input id="search" class="form-control" type="search">
                </div>

                <div class="col">
                    <label for="textarea" class="form-label">TextArea</label>
                    <textarea id="textarea" class="form-control" rows="1"></textarea>
                </div>
            </div>

            <div class="row">
                <legend>Validated Text</legend>

                <div class="col">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" class="form-control" type="email">
                </div>
                <div class="col">
                    <label for="phone" class="form-label">Telephone</label>
                    <input id="phone" class="form-control" type="tel">
                </div>
                <div class="col">
                    <label for="url" class="form-label">URL</label>
                    <input id="url" class="form-control" type="url">
                </div>
                <div class="col">
                    <label for="password" class="form-label">Enter password:</label>
                    <input id="password" class="form-control" type="password" name="password" minlength="8" required>
                </div>
            </div>
        </fieldset>
    </form>

</template>

<style>
form {
    width: 100%;
}
</style>