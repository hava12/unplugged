<template>
  <div id="app">
    <header-menu />
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {
    HeaderMenu,
  },
};
</script>

<style>
html {
  font-size: 13px;
}
body {
  font-family: "Nanum Gothic", sans-serif;
}
a {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
ul {
  list-style: none;
}
.activeFlex {
  display: flex !important;
}
.activeBlock {
  display: block !important;
}
.btn {
  background: black;
  border-radius: 17%;
  color: white;
  border: none;
  margin: 0.3rem 0.3rem;
  padding: 0.3rem 0.8rem;
  cursor: pointer;
}
.btn-delete {
  background: rgb(248, 79, 79);
}
.selectBox {
  padding: 0 0.8rem;
  border: 1px solid rgb(209, 209, 209);
}
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  /* width: 100%; Full width */
  /* height: 100%; Full height */
  overflow: hidden; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.bold {
  font-weight: bold;
}
</style>
