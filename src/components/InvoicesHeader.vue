<template>
  <div class="invoices-header">
    <div class="title">
      <h1 class="title-name">Invoices</h1>
      <p class="title-total">
        There are {{ filteredInvoices.length }} invoices
      </p>
    </div>
    <div class="filter" ref="filter">
      <div @click="filterIsOpen = !filterIsOpen" class="filter-btn">
        Filter By Status
      </div>
      <div v-show="filterIsOpen" class="filter-body">
        <div class="filter-item">
          <input
            type="checkbox"
            name="draft"
            value="Draft"
            v-model="selectedFilter"
          />
          <label for="draft">Draft</label>
        </div>
        <div class="filter-item">
          <input
            type="checkbox"
            name="pending"
            value="Pending"
            v-model="selectedFilter"
          />
          <label for="pending">Pending</label>
        </div>
        <div class="filter-item">
          <input
            type="checkbox"
            name="paid"
            value="Paid"
            v-model="selectedFilter"
          />
          <label for="paid">Paid</label>
        </div>
      </div>
    </div>
    <button class="add-invoice" @click="SET_MENU_IS_OPEN">
      New <span class="remove">Invoice</span><span class="symbol">+</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "InvoicesHeader",
  data() {
    return {
      filterIsOpen: false,
      selectedFilter: [],
    };
  },
  computed: {
    ...mapState(["filter"]),
    ...mapGetters(["filteredInvoices"]),
  },
  props: {},
  methods: {
    ...mapMutations(["SET_MENU_IS_OPEN", "SET_FILTER"]),
    closeFilterMenu(e) {
      if (this.filterIsOpen === true) {
        if (!this.$refs.filter.contains(e.target)) {
          this.filterIsOpen = false;
        }
      }
    },
  },
  watch: {
    selectedFilter() {
      this.SET_FILTER(this.selectedFilter);
    },
  },
  created() {
    window.addEventListener("click", this.closeFilterMenu);
    this.selectedFilter = [...this.filter];
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeFilterMenu);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoices-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}
.title {
  flex-basis: 50%;
}
.title-name {
  font-weight: 700;
  font-size: clamp(1.25rem, 5vw, 2rem);
}
.title-total {
  font-weight: 500;
}
.btn-group {
  display: flex;
  align-items: center;
}
.filter {
  position: relative;
}
.filter-btn {
  font-weight: 700;
  cursor: pointer;
}
.filter-body {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 24px;
  background-color: #252946;
  position: absolute;
  top: 40px;
  left: -40px;
  border-radius: 8px;
  gap: 14px;
}
label {
  font-weight: 700;
  margin-left: 10px;
}
.filter-item {
  display: flex;
  align-items: center;
}
.add-invoice {
  font-weight: 700;
  padding: 16px 20px;
  border: none;
  background-color: #7b5cfa;
  color: hsl(0, 0%, 100%);
  border-radius: 24px;
  outline: none;
  position: relative;
  width: 160px;
  text-align: right;
  cursor: pointer;
}
.add-invoice::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 6px;
  width: 32px;
  height: 32px;
  background-color: hsl(0, 0%, 100%);
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  transform: translateY(-50%);
}
.symbol {
  position: absolute;
  color: #7b5cfa;
  font-size: 20px;
  font-weight: 800;
  left: 16px;
  top: 13px;
}

@media screen and (max-width: 1024px) {
  .filter {
    position: relative;
  }
  .filter-body {
    padding: 16px;
    top: 40px;
    left: -70px;
    gap: 8px;
  }
  label {
    margin-left: 8px;
  }
  .add-invoice {
    padding: 8px 14px;
    width: 80px;
  }
  .add-invoice::before {
    left: 6px;
    width: 20px;
    height: 20px;
  }
  .symbol {
    font-size: 16px;
    left: 11px;
    top: 8px;
  }
  .remove {
    display: none;
  }
}
</style>
