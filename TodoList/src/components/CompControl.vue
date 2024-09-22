<template>
    <div class="col-12 col-lg-6">
        <div class="row">
        <!-- sort start -->
            <control-sort></control-sort>
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
        strSearch: {
            type: String,
            default: ''
        }
    },
    data() {
        return {}
    },
    methods: { 
        handleSearch(data) {
            console.log("handleSearch CompControl.vue", data);
            this.$emit('handleSearch', data);
        }
    }
}
</script>
<style>
</style>