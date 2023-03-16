<script setup>

</script>

<template>
    <form>
        <fieldset>
            <legend>Numeric Selection and Display Controls</legend>

            <div class="row">
                <div class="col">
                    <label for="age-picker" class="form-label">Enter your age</label>
                    <input id="age-picker" class="form-control" type="number" name="age" min="18" max="22">
                </div>

                <div class="col">
                    <label for="volume" class="form-label">Volume</label>
                    <input id="volume" class="form-range" type="range" name="volume" min="0" max="10">
                </div>
            </div>
            
            <div class="row">
                <div class="col">
                    <label for="download-progress" class="form-label">Download in progress</label>
                    <progress id="download-progress" max="100" value="50"> 50% </progress>
                </div>

                <div class="col">
                    <label for="health" class="form-label">Health</label>
                    <meter id="health" min="0" max="100" low="25" high="75" optimum="100" value="50">80/100</meter>
                </div>
            </div>
        </fieldset>
    </form>
</template>

<style>

</style>