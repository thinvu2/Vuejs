<template>
  <div id="app">
    <div class="container">
      <!-- title start -->
        <div class="page-header">
          <h1>Todo List <small>VueJs</small></h1>
        </div>
        <!-- title end -->
         <div class="row">
            <div class="col-12 col-lg-6">
              <div class="row">
                <!-- sort start -->
                 <div class="col-12">
                  <div class="form-group">
   <!-- Example single danger button -->
              <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Sort by
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Name ASC</a></li>
                <li><a class="dropdown-item" href="#">Name DESC</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Level ASC</a></li>
                <li><a class="dropdown-item" href="#">Level DESC</a></li>
              </ul>
              <span class="badge badge-success badge-medium">NAME - DESC</span>
                  </div>
                 </div>
              </div>
            </div>
         </div>
    </div>
    <todo-list-table v-bind:msg ="msg"></todo-list-table>
  </div>
</template>

<script>
import TodoListTable from "./components/TodoListTable.vue";
export default{
  name: 'app',
  components: {
    TodoListTable,
  },
  data() {
    return{
      msg:"Hello from vue-js",
      show: false
    }
  },
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
