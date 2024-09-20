<template>
    <div class="col-12">
    <div class="form-group">
        <!-- Example single danger button -->
        <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
        </button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Name ASC</a></li>
        <li><a class="dropdown-item" href="#">Name DESC</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Level ASC</a></li>
        <li><a class="dropdown-item" href="#">Level DESC</a></li>
        </ul>
        <span class="badge badge-success badge-medium">NAME - DESC</span>
    </div>
</div>
</template>
<script>
export default {
    name: 'control-sort',
    data() {
        return {

        }
    }
}
</script>
<style>
</style>