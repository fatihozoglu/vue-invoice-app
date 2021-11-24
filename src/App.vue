<template>
  <div class="app" :class="{ dark: menuIsOpen }">
    <div>
      <HeaderComp />
      <FormComp />
    </div>
    <div class="router-view">
      <router-view />
    </div>
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
.app {
  background-color: #141624;
  max-width: 1280px;
  min-width: 100vw;
  margin: 0 auto;
  display: flex;
}
.router-view {
  width: 100%;
}
.dark {
  background-color: #0a0b12;
}
</style>
