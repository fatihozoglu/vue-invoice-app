<template>
  <div id="app">
    <HeaderComp />
    <router-view class="router-view" />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #2b2f4d;
}
#app {
  background-color: #141624;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
