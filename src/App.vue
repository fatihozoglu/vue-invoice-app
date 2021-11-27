<template>
  <div class="app" :class="{ dark: menuIsOpen }">
    <HeaderComp />
    <FormComp />
    <router-view />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import FormComp from "./components/FormComp.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    HeaderComp,
    FormComp,
  },
  computed: {
    ...mapState(["menuIsOpen"]),
  },
};
</script>

<style>
*,
*::before,
*::after {
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
.app {
  background-color: #141624;
  width: 100%;
  min-height: 100vh;
  display: flex;
  transition: background-color 0.5s;
}
.dark {
  background-color: #0a0b12;
}
</style>
