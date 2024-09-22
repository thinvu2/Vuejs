<template>
    <tr>
        <td class="text-center">{{ index }}</td>
        <td>{{ task.taskName }}</td>
        <td class="text-center"><span class="badge" :class = "getLevelColor">{{ getLevelName }}</span></td>
        <td>
            <button type="button" class="btn btn-warning">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
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
           // console.log("mapLevel", mapLevel)
            // switch (this.task.level) {
            //     case 0:
            //         return 'Small';
            //     case 1:
            //         return 'Medium';
            //     case 2:
            //         return 'High';
            //     default:
            //         return '';
            // }
        },
        getLevelColor() {
            return this.mapLevel[this.task.level].class;
            // switch (this.task.level) {
            //     case 0:
            //         return { 'text-bg-primary': true };
            //     case 1:
            //         return { 'text-bg-warning': true };
            //     case 2:
            //         return { 'text-bg-danger': true };
            //     default:
            //         return {};
            // }
        },
    }
}
</script>
<style>
</style>