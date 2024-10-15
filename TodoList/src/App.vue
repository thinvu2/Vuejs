<template>
  <div id="app">
    <div class="container">
      abcd: {{ count }}
      <comp-title></comp-title>

        <div class="row">
          <comp-control
            :orderBy = "orderBy"
            :orderDir = "orderDir"
            :strSearch = "strSearch"
            v-on:handleSearch = "handleSearch"
            v-on:handleSort = "handleSort">
          </comp-control>
          <!-- comp-form -->
          <comp-form
            :isShowForm = "isShowForm"
            v-on:toggleForm = "toggleForm"
            v-bind:taskSelected="taskSelected"
            v-on:handleAddNewTask = "handleAddNewTask"
            v-on:handleEditTask="handleEditTask">
          </comp-form>
        </div>
    </div>
    <todo-list-table 
      v-bind:listTask = "listTaskSort"
      v-on:handleDeleteItem = "handleDeleteItem"
      v-on:handleEditItem="handleEditItem">
    </todo-list-table>
  </div>
</template>

<script>
import CompForm from "./components/CompForm.vue";
import CompControl from "./components/CompControl.vue";
import CompTitle from "./components/CompTitle.vue";
import TodoListTable from "./components/TodoListTable.vue";
import { mapState } from 'vuex'
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
      listTask: null,
      isShowForm: false,
      strSearch: '',
      orderBy: 'taskName',
      orderDir: 'asc',
      taskSelected: null
    }
  },
  created() {
   let tasks = localStorage.getItem('tasks');
   if(tasks !== null){
    const parsedTasks = JSON.parse(tasks);
    if(Array.isArray(parsedTasks)){
      this.listTask = parsedTasks;
    } else{
      console.error('Parsed tasks is not an array:', parsedTasks);
      this.listTask = [];
    }
   } else{
    this.listTask = [];
   }
  },
  watch: {
    listTask: function(newTasks) {
      let tasksString = JSON.stringify(newTasks);
      localStorage.setItem('tasks', tasksString);
    }
  },
  computed: {
    ...mapState ([
      'count'
    ]),
    listTaskSearch() {
      const { strSearch } = this;
      if(!Array.isArray(this.listTask)){
        console.error('listTask is not an array:', this.listTask);
        this.listTask = [];
      }else{
        let newItems = this.listTask.filter((item) => item.taskName.toLowerCase().includes(strSearch.toLowerCase()))
        return newItems;
      }
    },

    listTaskSort() {
      let listTask = [...this.listTaskSearch];
      listTask.sort(this.compareSort);
      return listTask;
    }
  },
  methods: {
    handleEditTask(objEditTask) {
      let index = this.listTask.findIndex(function(item) {
        return item.id === objEditTask.taskSelected;
      })
      if(index !== -1) {
        this.listTask.splice(index, 1, objEditTask);
      }
    },

    handleAddNewTask(objTask) {
      if(!Array.isArray(this.listTask)) this.listTask = [];
      this.listTask.push(objTask);
      this.listTask = [...this.listTask];
    },

    handleEditItem(editItem) {
      this.taskSelected = editItem;
      this.isShowForm = true;
    },

    handleDeleteItem(deleteItem) {
      if(!Array.isArray(this.listTask)) this.listTask = [];
      this.listTask.forEach((e,index) => {
        if(deleteItem.id === e.id){
        this.listTask.splice(index, 1);
        }
      });
    },

    compareSort(a, b) {
      let numberSort = this.orderDir === 'asc' ? -1 : 1;
      if(a[this.orderBy] < b[this.orderBy]) return numberSort;
      else if(a[this.orderBy] > b[this.orderBy]) return numberSort * (-1);
      return 0;
    },

    toggleForm() {
      if(this.isShowForm){
        this.isShowForm = false

        this.taskSelected = null
      }
      else{
        this.isShowForm = !this.isShowForm;
      }
    },

    handleSearch(data) {
      this.strSearch = data;
    },

    handleSort(orderBy, orderDir) {
      this.orderBy = orderBy;
      this.orderDir = orderDir;
    }
  },
}
</script>

<style>
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
