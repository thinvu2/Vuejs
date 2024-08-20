<template>
    <main>
        <h2>{{ text }}</h2>
    </main>
    <comp-user />
</template>
<script>
import CompUser from './CompUser.vue'
export default {
    name:'list-users',
    data() {
        return{
            text:'This is ListUsers'
        }
    },
    components: {
        CompUser
  }
}
</script>
<style scoped>

</style>