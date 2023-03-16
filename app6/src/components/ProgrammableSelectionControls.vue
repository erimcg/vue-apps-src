<script setup>

</script>

<template>
    <form>
        <fieldset>
            <legend>Programmable Selection Controls</legend>

            <div class="row">
                <div id="colors" class="col">
                    <label for="colors" class="form-check-label">Select a Color</label>
                    <div class="form-check">
                        <input id="red" class="form-check-input" type="checkbox" name="color" value="red" checked>
                        <label for="red">Red</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input id="blue" class="form-check-input" name="color" type="checkbox" value="blue">
                        <label for="blue">Blue</label>
                    </div>
                </div>

                <div id="fruits" class="col">
                    <label for="fruits" class="form-check-label">Select a Fruit</label>
                    <div class="form-check">
                        <input id="apple" class="form-check-input" type="radio" name="fruit" value="apple" checked>
                        <label for="apple">Apple</label>
                    </div>
                    <div class="form-check">
                        <input id="grape" class="form-check-input" type="radio" name="fruit" value="grape">
                        <label for="grape">Grape</label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <label for="flavors" class="form-label">Select a Flavor</label>
                    <input list="flavor-list" id="flavors" class="form-control" name="flavor">

                    <datalist id="flavor-list">
                        <option value="Vanilla"></option>
                        <option value="Strawberry"></option>
                    </datalist>
                </div>

                <div class="col">
                    <label for="city-select" class="form-label">Select a City</label>
                    <select id="city-select" class="form-select" name="cities">
                        <option value="VA">Virginia</option>
                        <option value="HI">Hawaii</option>
                    </select>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<style>

</style>