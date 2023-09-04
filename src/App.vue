<script setup>
import Authenticate from './components/Authenticate.vue';
</script>

<template>
  <div class="container">
    <Authenticate />
  </div>
</template>

<style>
@font-face {
  font-family: 'SF Pro Display', monospace;
  src: url(assets/font/SFPRODISPLAYREGULAR.OTF) format('otf');
}
body {
    height: 100%;
    overflow: auto;
    margin: 0;
    padding: 0;
    background-color: #fff;
}
a {
  color: #5e67ff;
}
.container {
  width: 1200px;
  margin: auto;
}
.text-left {
    text-align: left!important;
}
</style>
