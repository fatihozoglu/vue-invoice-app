<template>
  <div class="header">
    <div class="logo-container">
      <router-link :to="{ name: 'Home' }">
        <div class="logo">
          <div class="logo-rect"></div>
        </div>
      </router-link>
    </div>
    <div class="user-info">
      <a href="https://github.com/fatihozoglu" target="_blank">
        <img
          class="user-photo"
          width="40px"
          height="40px"
          :src="require('../assets/fatih-ozoglu-logo.jpg')"
          alt="profile photo"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 100vh;
  width: 103px;
  background-color: #1e2139;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
}
.logo-container {
  width: 100%;
  height: 103px;
  background-color: #7b5cfa;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 40px;
  height: 40px;
  position: relative;
  background-color: white;
  border-radius: 50%;
}
.logo-rect {
  background: #7b5cfa;
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(80% 0, 20% 0, 50% 50%);
}
.user-info {
  width: 100%;
  height: 90px;
  border-top: 1px solid rgb(73, 79, 110);
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-photo {
  border-radius: 50%;
}
</style>
