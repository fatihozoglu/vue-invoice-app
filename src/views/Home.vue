<template>
  <main class="home">
    <InvoicesHeader />
  </main>
</template>

<script>
import InvoicesHeader from "../components/InvoicesHeader.vue";

export default {
  name: "Home",
  props: {},
  components: {
    InvoicesHeader,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 70px 215px;
  width: 100%;
  min-height: 100vh;
}
</style>
