<template>
    <div class="col-12 col-lg-6">
        <div class="row">
        <!-- sort start -->
            <control-sort>
            </control-sort>
            <!-- search -->
             <control-search>
            </control-search>
     
        </div>
    </div>
</template>
<script>
import ControlSearch from './ControlSearch.vue';
import ControlSort from './ControlSort.vue';
export default {
    name: 'comp-control',
    components: {
        ControlSearch,
        ControlSort
    },
    data() {
        return {}
    },
    methods: { 
        handleSearch(data) {
            this.$emit('handleSearch', data);
        }
    }
}
</script>
<style>
</style>