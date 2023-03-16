<script setup>

</script>

<template>
    <form>
        <fieldset>
            <legend>Buttons</legend>

            <div>
                <input id="submit" class="btn btn-outline-info m-3" type="submit" value="Submit">
                <input id="reset" class="btn btn-outline-info m-3" type="reset" value="Reset">
                <input id="logout" class="btn btn-outline-info m-3" type="button" value="Custom">
                <input id="login" class="btn btn-outline-info m-3" type="image" src="login-button.png">
            </div>

            <div>
                <button class="btn btn-outline-info m-3" type="submit">Submit</button>
                <button class="btn btn-outline-info m-3" type="reset">Reset</button>
                <button class="btn btn-outline-info m-3" type="button">Custom</button>
                <button id="loginButton" class="btn btn-outline-info m-3" type="button"></button>
            </div>
        </fieldset>
    </form>

</template>

<style>
#login {
    height: 2.3em;
    width: 2.3em;
    object-fit: fill;
    padding: 1px;
}

#loginButton {
    background-image: url("login-button.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: 2.3em;
    width: 2.3em;
}
</style>