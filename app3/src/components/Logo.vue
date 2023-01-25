
<template>
  <div id="logo">
    <div id="title">Vue</div>
    <div id="subtitle">Components</div>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<style>
#logo {
  aspect-ratio: 1 / 1;
  width: 15vh;

  background-color: lightgray;
  border-radius: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#title {
  font-size: 2vh;
}

#subtitle {
  font-size: 1.2vh;
}

img {
  display: inline-block;
  width: 50%;
}
</style>
