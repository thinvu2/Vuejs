<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ task.Name }}</td>
        <td class="text-center"><span class="badge" :class = "getLevelColor">{{ getLevelName }}</span></td>
        <td>
            <button 
                v-on:click = "handleEditItem" 
                type="button" 
                class="btn btn-warning">
                Edit
            </button>
            <button 
                v-on:click = "handleDeleteItem"
                type="button" 
                class="btn btn-danger">
                Delete
            </button>
        </td>
    </tr>
</template>
<script>
import { mapActions } from 'vuex';
import mapLevel from '../mocks/level';
export default {
    name: 'todo-list-item',
    props: {
        task: {  type: Object, default: null},
        index: Number
    },
    data() {
        return {
            mapLevel: mapLevel,
        }
    },
    computed: {
        getLevelName() {
            console.log("this.task.level", this.task.level);
            return this.mapLevel[this.task.level].name;
        },
        getLevelColor() {
            return this.mapLevel[this.task.level].class;
        },
    },
    methods: {
        ...mapActions({
            actionHandleDelete :'handleDelete',
            actionHandleEdit : 'handleEdit'
        }),
        handleEditItem() {
            this.actionHandleEdit(this.task);
        },
        handleDeleteItem() {
            if (confirm("Are you sure you want to delete?")) {
               this.actionHandleDelete(this.task);
            }
        }
    }
}
</script>
<style>
</style>