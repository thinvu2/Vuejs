<template>
  <img src="/public/assets/logo.png" alt="">
  <comp-header />
  <comp-list-products />
  <list-users />
  <comp-footer />
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import CompListProducts from './components/CompListProducts.vue'
import ListUsers from './components/ListUsers.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    CompHeader,
    CompFooter,
    CompListProducts,
    ListUsers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
