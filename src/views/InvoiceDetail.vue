<template>
  <div class="detail">
    <router-link :to="{ name: 'Home' }" class="link">
      <svg
        class="back-icon"
        color="hsl(252, 94%, 67%)"
        viewBox="0 0 1024 1024"
        style="stroke: currentcolor; fill: currentcolor"
      >
        <path
          d="M730.6 18.4l-505.4 505.2 505.4 505.4 144.8-144.8-360.6-360.6 360.6-360.4z"
        ></path>
      </svg>
      <span class="back-text">Go Back</span>
    </router-link>
    <div class="status-container">
      <p class="status-title">Status</p>
      <p
        class="status-body"
        :class="[
          'Paid' === 'Draft'
            ? 'draft'
            : 'Paid' === 'Pending'
            ? 'pending'
            : 'paid',
        ]"
      >
        <span class="status-circle">.</span> Draft
      </p>
      <button class="btn btn-edit">Edit</button>
      <button class="btn btn-delete">Delete</button>
      <button class="btn btn-mark">Mark as Paid</button>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "InvoiceDetail",
};
</script>

<style scoped>
.detail {
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 750px;
  margin: 60px auto;
}
.link {
  text-decoration: none;
}
.back-icon {
  width: 10px;
  height: 10px;
}
.back-text {
  color: white;
  font-weight: 700;
  margin-left: 20px;
}
.status-container {
  padding: 20px 24px;
  display: flex;
  align-items: center;
  background-color: #1e2238;
  border-radius: 8px;
}
.status-title {
  font-weight: 600;
  color: hsl(231, 75%, 93%);
}
.status-body {
  width: 105px;
  padding: 13px 0;
  padding-left: 45px;
  border-radius: 6px;
  font-weight: 700;
  display: flex;
  align-items: center;
  position: relative;
}
.draft {
  background-color: #292c45;
  color: rgb(224, 228, 251);
}
.pending {
  background-color: rgba(255, 145, 0, 0.06);
  color: rgb(255, 145, 0);
}
.paid {
  background-color: rgba(51, 215, 160, 0.06);
  color: rgb(51, 215, 160);
}
.status-title {
  flex-basis: 60px;
}
.status-circle {
  font-size: 40px;
  position: absolute;
  left: 20px;
  top: -13px;
}
.btn {
  padding: 16px 24px;
  border: none;
  border-radius: 24px;
  color: white;
  font-weight: 700;
  cursor: pointer;
}
.btn-edit {
  background-color: #252946;
  margin-left: auto;
}
.btn-edit:hover {
  background-color: #1b1d32;
}
.btn-delete {
  background-color: #ec5555;
  margin-left: 10px;
}
.btn-delete:hover {
  background-color: #fb999a;
}
.btn-mark {
  background-color: #7b5cfa;
  margin-left: 10px;
}
.btn-mark:hover {
  background-color: #9175ff;
}

@media screen and (max-width: 1024px) {
  .detail {
    margin-top: 120px;
  }
}
@media screen and (max-width: 786px) {
  .detail {
    margin-left: 18px;
    margin-right: 18px;
  }
}
</style>
