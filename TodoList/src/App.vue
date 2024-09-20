<template>
  <div id="app">
    <div class="container">
      <comp-title></comp-title>

        <div class="row">
          <comp-control></comp-control>
          <comp-form></comp-form>
        </div>
    </div>
    <todo-list-table v-bind:listTask="listTask"></todo-list-table>
  </div>
</template>

<script>
import CompForm from "./components/CompForm.vue";
import CompControl from "./components/CompControl.vue";
import CompTitle from "./components/CompTitle.vue";
import TodoListTable from "./components/TodoListTable.vue";
import listTask from './mocks/tasks.js'
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
    }
  },
  created() {
    console.log("listTask: ", listTask);
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
