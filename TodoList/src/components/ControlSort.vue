<template>
    <div class="col-12">
    <div class="form-group">
        <!-- Example single danger button -->
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
        </button>
        <ul class="dropdown-menu">
        <li v-on:click ="handleSort('taskName', 'asc')" class="dropdown-item">Name ASC</li>
        <li v-on:click ="handleSort('taskName', 'desc')" class="dropdown-item">Name DESC</li>
        <li><hr class="dropdown-divider"></li>
        <li v-on:click ="handleSort('level', 'asc')" class="dropdown-item">Level ASC</li>
        <li v-on:click ="handleSort('level', 'desc')" class="dropdown-item">Level DESC</li>
        </ul>
        <span class="order-text badge text-bg-success">{{ orderBy }} - {{ orderDir }}</span>
    </div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
    name: 'control-sort',
    data() {
        return {}
    },
    computed: {
        ...mapState([
            'orderBy',
            'orderDir'
        ])
    },
    methods: {
        ...mapActions({
            actionHandleSort: 'handleSort'
        }),
        handleSort(orderBy, orderDir) {
            let data = {orderBy, orderDir}
           console.log('handleSort',data);
           this.actionHandleSort(data);
        }
    }
}
</script>
<style>
.order-text{
    text-transform: uppercase;
}
</style>