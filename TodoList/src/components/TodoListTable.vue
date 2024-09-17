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
             <tbody>

                <tr>
                    <td class="text-center">2</td>
                    <td>Mở các tệp có xung đột và thực hiện các sửa đổi</td>
                    <td class="text-center"><span class="badge badge-secondary">Small</span></td>
                    <td>
                        <button type="button" class="btn btn-warning">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">3</td>
                    <td>Mở các tệp có xung đột và thực hiện các sửa đổi</td>
                    <td class="text-center"><span class="badge badge-info">Medium</span></td>
                    <td>
                        <button type="button" class="btn btn-warning">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
             </tbody>
        </table>
        <todo-list-item></todo-list-item>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
    name: 'todo-list-table',
    components: {
        TodoListItem
    },
    props:{
        msg: {
            type: String,
            default: "hi hi"
        }
    },
    data() {
    },
}
</script>

<style>
</style>