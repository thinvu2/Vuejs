<template>
  <div id="app">
    <div class="container">
      <button v-on:click="title = 'Learn vuejs ahihi'">Thay doi title tu component app.vue</button>
      <comp-header 
        v-bind:ListUsers = "ListUsers"
        v-bind:titleHeader = "title"
        v-on:changeTitleEvent = "handleChangeTitle"
      />
      <!-- counter -->
       <comp-counter
        v-bind:count="count"
        @handleCountPlus = "handleCountPlus"
        @handleCountMinus  = "handleCountMinus">
      </comp-counter>
       <comp-counter-two
        :count = "count"
        @handleCountPlus = "handleCountPlus"
        @handleCountMinus  = "handleCountMinus">
      </comp-counter-two>
      <!-- end-counter -->
      <comp-list-products />
      <list-users 
        v-bind:ListUsers="ListUsers"
        v-on:deleteUserEvent="handleDeleteUser"
      />
      <demo-ref/>
      <demo-slot>
        <div class="app-slot">
          <p>CTCP Chứng khoán BIDV</p>
        </div>
      </demo-slot>
      <comp-footer v-bind:titleFooter = "title"/>
    </div>
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue'
import CompFooter from './components/CompFooter.vue'
import CompListProducts from './components/CompListProducts.vue'
import ListUsers from './components/ListUsers.vue'
import DemoRef from './components/DemoRef.vue'
import DemoSlot from './components/DemoSlot.vue'
import CompCounter from './components/CompCounter.vue'
import CompCounterTwo from './components/CompCounterTwo.vue'
export default {
  name: 'App',
  data(){
    return{
      count: 0,
      title:'Hello vuejs',
      ListUsers:[
        { id:0, email: '1@gmail.com', active: false },
        { id:1,email: '2@gmail.com', active: true },
        { id:2,email: '3@gmail.com', active: false },
        { id:3,email: '4@gmail.com', active: true },
      ]
    };
  },
  components: {
    CompHeader,
    CompFooter,
    CompListProducts,
    ListUsers,
    DemoRef,
    DemoSlot,
    CompCounter,
    CompCounterTwo
  },
  methods:{
    handleChangeTitle(data){
      //this.title = 'Hoc lap trinh do header.vue'
      this.title = data.title;
      console.log("handleChangeTitle duoc goi sau khi kich hoat thanh cong App.vue");
    },
    handleDeleteUser(data){
      let indexDelete = -1;
      this.ListUsers.forEach((element, idx) => {
        //console.log('element.id: ', element.id, ' idx: ', idx, ' data.id: ',data.id);
        //console.log('element: ',element);
        if(element.id === data.id){
          indexDelete = idx;
        }
      });
      if(indexDelete != -1){
        this.ListUsers.splice(indexDelete, 1);
       //console.log('test: ', test);
      }
      //console.log('indexDelete sau khi chay vong for', indexDelete);
      //console.log('handleDeleteUser trong App.vue', data);
    },
    handleCountPlus() {
      console.log("handleCountPlus App.vue");
      this.count ++;
    },
    handleCountMinus() {
      this.count --;
    }
  },
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
