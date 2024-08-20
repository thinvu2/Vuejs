<template>
    <main>
        <p>{{ userahihi.email }}</p>
    </main>
</template>
<script>
export default {
    name:'comp-user',
    props: {
        userahihi: {
            type: Object,
            default: null
        }
    },
    data() {
        return{
            text:'This is User',
        }
    },
}
</script>
<style scoped>

</style>