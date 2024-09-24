<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ task.taskName }}</td>
        <td class="text-center"><span class="badge" :class = "getLevelColor">{{ getLevelName }}</span></td>
        <td>
            <button type="button" class="btn btn-warning">Edit</button>
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
import mapLevel from '../mocks/level';
export default {
    name: 'todo-list-item',
    props: {
        task: {
            type: Object,
            default: null
        },
        index: {
            type: Number,
            Required: true
        },
    },
    data() {
        return {
            mapLevel: mapLevel,
        }
    },
    // created() {
    //     console.log("task: ", task);
    // },  
    computed: {
        getLevelName() {
            return this.mapLevel[this.task.level].name;
        },
        getLevelColor() {
            return this.mapLevel[this.task.level].class;
        },
    },
    methods: {
        handleDeleteItem() {
            this.$emit('handleDeleteItem', this.task)
        }
    }
}
</script>
<style>
</style>