<template>
    <footer>
        <h2>{{ titleFooter }}</h2>
    </footer>
</template>
<script>
export default {
    name:'comp-footer',
    props: {
        titleFooter: {
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