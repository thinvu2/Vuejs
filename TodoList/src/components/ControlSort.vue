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
export default {
    name: 'control-sort',
    props: {
        orderBy: { type: String, default: 'taskName' },
        orderDir: { type: String, default: 'asc' }
    },
    data() {
        return {}
    },
    methods: {
        handleSort(orderBy, orderDir) {
            this.$emit('handleSort', orderBy, orderDir);
        }
    }
}
</script>
<style>
.order-text{
    text-transform: uppercase;
}
</style>