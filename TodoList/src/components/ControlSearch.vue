<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-on:input = "handleSearch"
                type="text" 
                class="form-control" 
                placeholder="search for..."
            />
            <span class="input-group-append">
                <button 
                    v-on:click ="clearSearch"
                    class="btn btn-info" 
                    type="button">
                    Clear
                </button>
            </span>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'control-search',
    data() {
        return {}
    },
    computed: mapState([
        'strSearch'
    ]),
    methods: {
        clearSearch() {
            this.$store.dispatch('handleSearch', '');
        },
        handleSearch(e) {
            this.$store.dispatch('handleSearch', e.target.value);
        }
    }
}
</script>
<style>
</style>