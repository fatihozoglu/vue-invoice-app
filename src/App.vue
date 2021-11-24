<template>
  <div id="app">
    <HeaderComp />
    <FormComp />
    <router-view class="router-view" />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FormComp from "./components/FormComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    FormComp,
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
  font-family: "Spartan", sans-serif;
  font-size: 0.75rem;
  line-height: 1.25;
}
#app {
  background-color: #141624;
  max-width: 1280px;
  margin: 0 auto;
}
</style>
