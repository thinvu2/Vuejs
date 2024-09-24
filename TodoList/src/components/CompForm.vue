<template>
    <div class="col-12 col-lg-6">
        <form-add 
            v-on:handleAddTask = "handleAddTask"
            :isShowForm = "isShowForm">
        </form-add>
            <!-- end -->
            <form  v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
                <div class="form-group">
                    <label for="" class="sr-only">label</label>
                    <input type="text" class="form-control" placeholder="Task Name"/>
                </div>
                <div class="form-group">
                    <label for="" class="sr-only">label</label>
                    <select name="ds" class="form-control" required = "required">
                        <option value="0">Small</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                    </select>
                </div>
                <button type="button" class="btn btn-primary">Submit</button>
                <button v-on:click = "cancelForm" type="button" class="btn btn-secondary">Cancel</button>
            </form>
    </div> 
</template>
<script>
import FormAdd from './FormAdd.vue';
export default {
    name: 'comp-form',
    components: {
        FormAdd,
    },
    props: {
        isShowForm: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    methods: {
        cancelForm() {
            this.$emit('toggleForm');
        },
        handleAddTask() {
            //console.log("handleAddTask CompForm.vue");
            this.$emit('toggleForm');
        }
    }
}
</script>
<style>
</style>