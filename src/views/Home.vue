<template>
  <main class="home">
    <InvoicesHeader class="header" />
    <div class="invoices-container">
      <InvoiceShort
        v-for="(item, index) in filteredInvoices"
        :key="item.id"
        :invoiceItem="item"
        :index="index"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
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
  methods: {
    ...mapMutations(["SET_EDIT"]),
  },
  created() {
    this.SET_EDIT({ status: false });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 50px 150px 50px 220px;
  height: 100vh;
  width: 100%;
}
.invoices-container {
  height: 90%;
  overflow-y: scroll;
  padding-right: 10px;
}
.header {
  margin-bottom: 30px;
}

::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #141624;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #252946;
  border-radius: 20px;
}

@media screen and (max-width: 1024px) {
  .home {
    padding: 100px 120px 20px 120px;
  }
  .header {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 750px) {
  .home {
    padding: 100px 20px 20px 20px;
  }
}
</style>
