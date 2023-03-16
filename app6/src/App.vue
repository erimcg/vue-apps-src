<script setup>
import Logo from './components/Logo.vue'
import ButtonControls from './components/ButtonControls.vue';
import HiddenInputControls from './components/HiddenInputControls.vue';
import NumericSelectionAndDisplayControls from './components/NumericSelectionAndDisplayControls.vue';
import ProgrammableSelectionControls from './components/ProgrammableSelectionControls.vue';
import UserInputTextControls from './components/UserInputTextControls.vue';
import PickerControls from './components/Pickers.vue'
</script>

<template>
    <Logo />

    <div id="form-demo" class="container-fluid">
  
      <div class="row">
        <UserInputTextControls />
      </div>
      
      <div class="row">
        <div class="col-6">
          <ProgrammableSelectionControls />
          <PickerControls />
        </div>

        <div class="col-6">
          <NumericSelectionAndDisplayControls />
          <ButtonControls />
          <HiddenInputControls />
        </div>

      </div>
    </div>
</template>

<style>

#form-demo {
  padding-bottom: 50px;
  min-width: 100%;
}

label {
  padding: 5px 5px 5px 0;
}

legend {
  margin-top: 20px;
}
</style>