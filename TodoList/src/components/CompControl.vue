<template>
    <div class="col-12 col-lg-6">
        <div class="row">
        <!-- sort start -->
            <control-sort
                :orderDir = "orderDir"
                :orderBy = "orderBy"
                v-on:handleSort = "handleSort">
            </control-sort>
            <!-- search -->
             <control-search
                :strSearch = "strSearch"
                v-on:handleSearch = "handleSearch">
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
    props: {
        strSearch: { type: String,  default: '' },
        orderBy: { type: String, default: 'taskName' },
        orderDir: { type: String, default: 'asc' }
    },
    data() {
        return {}
    },
    methods: { 
        handleSort(orderBy, orderDir) {
            this.$emit('handleSort', orderBy, orderDir);
        },
        handleSearch(data) {
            this.$emit('handleSearch', data);
        }
    }
}
</script>
<style>
</style>