<template>
  <div id="app">
    <div class="container">
      <comp-title></comp-title>

        <div class="row">
          <comp-control
            :orderBy = "orderBy"
            :orderDir = "orderDir"
            :strSearch = "strSearch"
            v-on:handleSearch = "handleSearch"
            v-on:handleSort = "handleSort">
          </comp-control>
          <comp-form
            :isShowForm = "isShowForm"
            v-on:toggleForm = "toggleForm">
          </comp-form>
        </div>
    </div>
    <todo-list-table 
      v-bind:listTask = "listTaskSort"
      v-on:handleDeleteItem = "handleDeleteItem">
    </todo-list-table>
  </div>
</template>

<script>
import CompForm from "./components/CompForm.vue";
import CompControl from "./components/CompControl.vue";
import CompTitle from "./components/CompTitle.vue";
import TodoListTable from "./components/TodoListTable.vue";
import listTask from './mocks/tasks.js'
import tasks from "./mocks/tasks.js";
import level from "./mocks/level.js";
export default{
  name: 'app',
  components: {
    TodoListTable,
    CompTitle,
    CompControl,
    CompForm
  },
  data() {
    return{
      listTask: listTask,
      isShowForm: false,
      strSearch: '',
      orderBy: 'taskName',
      orderDir: 'asc'
    }
  },
  // created() {
  //   console.log("listTask: ", listTask);
  // },
  methods: {
    handleDeleteItem(taskDelete) {
    // console.log("handleDeleteItem App.vue", taskDelete);


     //console.log("this.listTaskOld: ", this.listTask);

     //this.listTask = this.listTask.filter((item) => item.id !== taskDelete.id); return listTask
      // this.listTask = this.listTask.filter(function(task) {
      //   if( task.id !== taskDelete.id) return listTask
      // });
      //taskDelete.id = e.id lay index splice theo index
      this.listTask.forEach((e,index) => {
       // console.log("e:", e, " index: ", index);
        if(taskDelete.id === e.id){
          console.log("index: ", index);
          this.listTask.splice(index, 1);
        }
      });
    //  const removed = this.listTask.splice(2, 0, "drum");
      //console.log("this.listTaskNew: ", this.listTask);

    },
    compareSort(a, b) {
      let numberSort = this.orderDir === 'asc' ? -1 : 1;
      if(a[this.orderBy] < b[this.orderBy]) return numberSort;
      else if(a[this.orderBy] > b[this.orderBy]) return numberSort * (-1);
      return 0;
    },
    // compareLevel(a, b) {
    // //  console.log("a: ", a, " b: ", b);
    //   if(this.orderDir === 'asc') return a.level - b.level;
    //   else if(this.orderDir === 'desc') return b.level - a.level;
    // },
    toggleForm() {
      //console.log("toggleForm App.vue");
      this.isShowForm = !this.isShowForm;
    },
    handleSearch(data) {
      //console.log("handleSearch App.vue", data);
      this.strSearch = data;
    },
    handleSort(orderBy, orderDir) {
     //console.log('handleSort App.vue', orderBy, orderDir);
      this.orderBy = orderBy;
      this.orderDir = orderDir;
    }
  },
  computed: {
    listTaskSearch() {
      const { strSearch } = this;
      //C1
      // let newItems = [];
      // this.listTask.forEach(function(item){
      //   if(item.taskName.toLowerCase().includes(strSearch.toLowerCase())) {
      //     newItems.push(item);
      //   }
      // });
      //Filter c2
      let newItems = this.listTask.filter((item) => item.taskName.toLowerCase().includes(strSearch.toLowerCase()))
      return newItems;
      // let newItems = this.listTask.filter(item => {
      //   return item.taskName.toLowerCase().includes(strSearch.toLowerCase())
      // })
      // return newItems
    },
    listTaskSort() {
      let listTask = [...this.listTaskSearch];

      // console.log("listTask: ", listTask);
      // console.log("this.compareSort: ", this.compareSort);
      listTask.sort(this.compareSort);
    
      // else if(this.orderBy === 'level'){
      //   listTask.sort(this.compareLevel);
      // }
      return listTask;
    }
  }
}
</script>

<style scoped>
body {
  padding: 100px 0;
}
.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td,
.table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {
  vertical-align: middle;
}
.container > .row {
  margin-top: 20px;
  margin-bottom: 30px;
}
span.badge-medium {
  padding: 11px 10px;
  margin: 0px 8px;
  font-size: 16px;
  display: inline-block;
  vertical-align: top;
}
@media (max-width: 992px) {
  .add-task {
    margin-top: 50px;
  }
}
</style>
