<template>
    <div class="card panel-success">
        <div class="card-heading">List Task</div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th style="width: 10%;" class="text-center">#</th>
                    <th>Task</th>
                    <th style="width: 20%;" class="text-center">Level</th>
                    <th style="width: 160px;">Action</th>
                </tr>
            </thead>
            <!-- tbody -->
             <tbody v-if="listTask.length !== 0">
                <todo-list-item 
                    v-for="(task, index) in listTask" 
                    v-bind:key = "task.id"
                    v-bind:task = "task"
                    v-bind:index = "index + 1"
                    v-on:handleDeleteItem = "handleDeleteItem"
                    v-on:handleEditItem = "handleEditItem">
                </todo-list-item>
             </tbody>
             <tbody v-else>
                <tr>
                    <td>
                        <h3>List Empty</h3>
                    </td>
                </tr>
             </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters  } from 'vuex'
import TodoListItem from './TodoListItem.vue';
export default {
    name: 'todo-list-table',
    components: {
        TodoListItem
    },
    // props: {
    //     listTask:{
    //         type: Array,
    //         default() {
    //             return []
    //         },
    //     }
    // },
    data() {
        return {}
    },
    created() {
        let tasks = localStorage.getItem('tasks') || '[]';
        console.log("created todo-list-table: ",JSON.parse(tasks));
        this.changeTasks(JSON.parse(tasks));
    },
    watch: {
    listTask: function(newTasks) {
      let tasksString = JSON.stringify(newTasks);
      localStorage.setItem('tasks', tasksString);
    }
  },
    computed: {
        ...mapGetters({
            listTask: 'listTaskSearchSort'
        }),
    },
    methods: {
        ...mapActions([
            'changeTasks'
        ]),
        handleEditItem(editItem) {
            this.$emit('handleEditItem', editItem);
        },
        handleDeleteItem(deleteItem) {
            this.$emit('handleDeleteItem', deleteItem);

        }
    }
}
</script>

<style>
</style>