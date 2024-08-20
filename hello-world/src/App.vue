<template>
  <div id="app">
    <div class="container">
      <comp-header v-bind:titleHeader = "title"/>
      <comp-list-products />
      <list-users v-bind:ListUsers="ListUsers"/>
      <comp-footer/>
    </div>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import CompListProducts from './components/CompListProducts.vue'
import ListUsers from './components/ListUsers.vue'
export default {
  name: 'App',
  data(){
    return{
      title:'Hello vue',
      ListUsers:[
        { email: '1@gmail.com', active: false },
        { email: '2@gmail.com', active: true },
        { email: '3@gmail.com', active: false },
        { email: '4@gmail.com', active: true },
      ]
    }
  },
  components: {
    CompHeader,
    CompFooter,
    CompListProducts,
    ListUsers
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
  min-height: 1000px;
}
</style>
