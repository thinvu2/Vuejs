<template>
    <div class="form-group add-task">
        <!-- Add Task -->
        <button 
            v-if="!isShowForm"
            v-on:click ="onClickAddTask"
            type="button" 
            class="btn btn-info btn-block">
            Add Task
        </button>
        <!-- Close Task -->
        <button 
            v-else
            v-on:click ="onClickAddTask"
            type="button" 
            class="btn btn-info btn-block">
            Close Task
        </button>
    </div>
</template>
<script>
export default {
    name: 'form-add',
    props: {
        isShowForm: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    created() {
        console.log ("isShowForm form add.vue", this.isShowForm);
    },
    methods: {
        onClickAddTask() {
            console.log('onClickAddTask FormAdd.vue');
            this.$emit('handleAddTask');
        }
    }
}
</script>
<style>
</style>