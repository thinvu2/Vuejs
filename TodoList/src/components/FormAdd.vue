<template>
    <div class="form-group add-task">
        <!-- Add Task -->
        <button 
            v-if="!isShowForm"
            v-on:click ="toggleForm"
            type="button" 
            class="btn btn-info btn-block">
            Add Task
        </button>
        <!-- Close Task -->
        <button 
            v-else
            v-on:click ="toggleForm"
            type="button" 
            class="btn btn-info btn-block">
            Close Task
        </button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'form-add',
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'isShowForm'
        ])
    },
    methods: {
        ...mapActions([
            'toggleForm'
        ]),
    }
}
</script>
<style>
</style>