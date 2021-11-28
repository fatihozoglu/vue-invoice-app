<template>
  <div class="invoice-item" @click="showDetail">
    <p class="id">#{{ invoiceItem.id }}</p>
    <p class="due">Due: {{ invoiceItem.invoiceDue }}</p>
    <p class="name">{{ invoiceItem.clientName }}</p>
    <p class="price">
      &#8378; {{ invoiceItem.totalPrice.toLocaleString("en-US") }}
    </p>
    <div
      class="status"
      :class="[
        invoiceItem.status === 'Draft'
          ? 'draft-background'
          : invoiceItem.status === 'Pending'
          ? 'pending-background'
          : 'paid-background',
      ]"
    >
      <div
        class="status-circle"
        :class="[
          invoiceItem.status === 'Draft'
            ? 'circle-draft'
            : invoiceItem.status === 'Pending'
            ? 'circle-pending'
            : 'circle-paid',
        ]"
      ></div>
      <div
        class="status-text"
        :class="[
          invoiceItem.status === 'Draft'
            ? 'draft-color'
            : invoiceItem.status === 'Pending'
            ? 'pending-color'
            : 'paid-color',
        ]"
      >
        {{ invoiceItem.status }}
      </div>
    </div>
    <svg
      color="hsl(252, 94%, 67%)"
      viewBox="0 0 1024 1024"
      style="fill: currentcolor; width: 10px; height: 10px"
    >
      <path
        d="M328.4 30l-144.8 144.8 337.2 337.2-337.2 337.2 144.8 144.8 482-482z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "InvoiceShort",
  props: {
    invoiceItem: Object,
    index: Number,
  },
  methods: {
    showDetail() {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id: this.invoiceItem.id, index: this.index },
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 15px 32px;
  border: 1px solid #1e2139;
  border-radius: 8px;
  background-color: #1e2139;
  color: white;
  transition: border 350ms ease-in-out;
  cursor: pointer;
  margin-bottom: 20px;
}
.invoice-item:hover {
  border: 1px solid #7b5cfa;
}
.id {
  flex-basis: 5%;
  font-weight: 700;
}
.due {
  flex-basis: 30%;
  font-size: 12px;
  text-align: center;
}
.name {
  flex-basis: 20%;
  font-size: 12px;
  text-align: left;
}
.price {
  font-size: 16px;
  font-weight: 700;
  flex-basis: 25%;
}
.status {
  flex-basis: 15%;
  width: 105px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 6px;
  font-weight: 700;
}
.status-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
}
.status-text {
  font-size: 12px;
}
svg {
  flex-basis: 5%;
}
.draft-background {
  background-color: #292c45;
}
.draft-color {
  color: rgb(224, 228, 251);
}
.pending-background {
  background-color: rgba(255, 145, 0, 0.06);
}
.pending-color {
  color: rgb(255, 145, 0);
}
.paid-background {
  background-color: rgba(51, 215, 160, 0.06);
}
.paid-color {
  color: rgb(51, 215, 160);
}
.circle-draft {
  background-color: rgb(224, 228, 251);
}
.circle-pending {
  background-color: rgb(255, 145, 0);
}
.circle-paid {
  background-color: rgb(51, 215, 160);
}

@media screen and (max-width: 1024px) {
  .invoice-item {
    display: grid;
    grid-template-columns: 1fr 1fr 30px;
    grid-template-rows: auto;
    align-items: center;
    row-gap: 10px;
    padding: 16px 16px;
    margin-bottom: 10px;
  }
  .id {
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .due {
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: start;
  }
  .price {
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .name {
    justify-self: end;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .status {
    justify-self: end;
    align-self: center;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
  svg {
    justify-self: end;
    align-self: center;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
  }
}
</style>
