<template>
    <footer>
        <h2>{{ titleHeader }}</h2>
    </footer>
</template>
<script>
export default {
    name:'comp-footer',
    props: {
        titleHeader: {
            type: String,
            default: "ahihi"
        },
    },
    data(){
        return{
            text: 'This is footer'
        }
    }
}
</script>
<style scoped>

</style>