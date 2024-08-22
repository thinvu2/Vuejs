<template>
    <div class="user">
        <p>{{ user.email }}</p>
        <button
            v-on:click="handleDelete"
            class="delete">
            Delete
        </button>
    </div>
</template>
<script>
export default {
    name:'comp-user',
    props: {
        user: {
            type: Object,
            default: null
        }
    },
    data() {
        return{
            text:'This is User',
        }
    },
    methods:{
        handleDelete(){
            let data ={
                id: this.user.id,
            }
            console.log('handleDelete trong User.vue');
            this.$emit('deleteUser', data);
        },
    }
}
</script>
<style scoped>
    .user{
        position: relative;
    }
    .user .delete{
        top: 0;
        position: absolute;
    }
</style>