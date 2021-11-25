<template>
  <main class="home">
    <InvoicesHeader class="header" />
    <div class="invoices-container">
      <InvoiceShort
        v-for="(item, index) in filteredInvoices"
        :key="index"
        :invoiceItem="item"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import InvoicesHeader from "../components/InvoicesHeader.vue";
import InvoiceShort from "../components/InvoiceShort.vue";

export default {
  name: "Home",
  props: {},
  components: {
    InvoicesHeader,
    InvoiceShort,
  },
  computed: {
    ...mapGetters(["filteredInvoices"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 70px 215px;
  min-height: 100vh;
  width: 100vw;
}
.header {
  margin-bottom: 50px;
}
</style>
