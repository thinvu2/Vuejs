<template>
    <div class="col-12 col-lg-6">
        <form-add 
            v-on:handleToggleForm="handleToggleForm"
            :isShowForm = "isShowForm">
        </form-add>
            <!-- end -->
            <form  v-if="isShowForm" action="" method="POST" class="form-inline justify-content-between">
                <div class="form-group">
                    <label for="" class="sr-only">label</label>
                    <input v-model="taskName" type="text" class="form-control" placeholder="Task Name"/>
                </div>
                <div class="form-group">
                    <label for="" class="sr-only">label</label>
                    <select v-model="level" class="form-control" required = "required">
                        <option value="0">Small</option>
                        <option value="1">Medium</option>
                        <option value="2">High</option>
                    </select>
                </div>
                <button 
                    v-if="this.taskSelected === null"
                    v-on:click = "handleAddNewTask" 
                    type="button" 
                    class="btn btn-primary">
                    Submit
                </button>
                <button 
                    v-else
                    v-on:click = "handleEditTask" 
                    type="button" 
                    class="btn btn-primary">
                    Update
                </button>
                <button v-on:click = "handleCancel" type="button" class="btn btn-secondary">Cancel</button>
            </form>
    </div>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import level from '../mocks/level';
import FormAdd from './FormAdd.vue';
export default {
    name: 'comp-form',
    components: {
        FormAdd,
    },
    props: {
        isShowForm: { type: Boolean, default: false },
        taskSelected: { type: Object, default: null }
    },
    data() {
        return {
            taskName: '',
            level: 0,
        }
    },
    // created() {
    //     console.log("taskSelected, created: ", this.taskSelected)
    // },
    // beforeUpdate() {
    //     console.log("beforeUpdate", this.taskSelected);
    //     if(this.taskSelected !== null) {
    //         this.taskName = this.taskSelected.taskName;
    //         this.level = this.taskSelected.level;
    //     }
    // },
    watch: {
        taskSelected: function(newData, oldData) {
            if(newData !== null) {
            this.taskName = newData.taskName;
            this.level = newData.level;
        }
            console.log("watcher: ", newData, " Old Data: ", oldData)
        }
    },
    methods: {
        handleEditTask() {
            console.log("handleEditTask CompForm.vue", this.taskSelected);
        },
        handleAddNewTask() {
            let objTask = {
                id: uuidv4(),
                taskName: this.taskName, 
                level: parseInt(this.level),
            };
          //  console.log("this.taskName: ", this.taskName);
            if(this.taskName) {

            //    console.log("this.taskName1111: ", this.taskName);
                this.$emit('handleAddNewTask', objTask);
                this.handleCancel();
            }else{
                alert("Task Name is null");
            }

        },
        handleToggleForm() {
            this.$emit('toggleForm');
            this.clearData();
        },
        handleCancel() {
            this.$emit('toggleForm');
            this.clearData();
        },
        clearData() {
            this.taskName = '';
            this.level = 0;
        }
    }
}
</script>
<style>
</style>