<template>
    <div class="col-12 col-lg-6">
        <form-add></form-add>
            <!-- end -->
            <form action="" method="POST" class="form-inline justify-content-between">
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
                <button type="button" class="btn btn-secondary">Cancel</button>
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
    data() {
        return {

        }
    }
}
</script>
<style>
</style>