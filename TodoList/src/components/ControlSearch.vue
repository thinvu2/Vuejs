<template>
    <div class="col-12">
        <div class="input-group">
            <input 
                v-bind:value="strSearch"
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
export default {
    name: 'control-search',
    props: {
        strSearch: {
            type: String,
            default: ''
        }
    },
    data() {
        return {

        }
    },
    methods: {
        clearSearch() {
            this.$emit('handleSearch', '');
        },
        handleSearch(e) {
            this.$emit('handleSearch', e.target.value);
        }
    }
}
</script>
<style>
</style>