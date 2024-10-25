<template>
  <div id="app">
    <div class="container">
      <comp-title />

        <div class="row">
          <comp-control />
          <comp-form />
        </div>
    </div>
    <todo-list-table />
    <br>
    <route />
  </div>
</template>

<script>
import Route from "./components/Route.vue";
import { mapState } from "vuex";
import CompForm from "./components/CompForm.vue";
import CompControl from "./components/CompControl.vue";
import CompTitle from "./components/CompTitle.vue";
import TodoListTable from "./components/TodoListTable.vue";
export default{
  name: 'app',
  components: {
    TodoListTable,
    CompTitle,
    CompControl,
    CompForm,
    Route
  },
  data() {
    return{}
  },
  watch: {
    listTask: function(newTasks) {
      let tasksString = JSON.stringify(newTasks);
      localStorage.setItem('tasks', tasksString);
    }
  },
  computed: {
    ...mapState([
      'listTask'
    ])
  }
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
