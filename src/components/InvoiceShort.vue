<template>
  <div class="invoice-short">
    <p>#RT3080</p>
    <p>Due 19 Aug 2021</p>
    <p>Jensen Huang</p>
    <p>1,800.90</p>
    <p>Paid</p>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoice-short {
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
}
.invoice-short:hover {
  border: 1px solid #7b5cfa;
}
</style>
