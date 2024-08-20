<template>
    <header>
        <h1>{{ titleHeader }}</h1>
    </header>
</template>
<script>
export default {
    name: 'comp-header',
    props: {
        titleHeader: String,
    },
    data() {
        return{
            text: 'This is Header'
        }
    },
}
</script>
<style scoped>

</style>