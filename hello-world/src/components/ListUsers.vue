<template>
    <div class="list-user">
        <div class="user">
            <comp-user
            v-for="(user, index) in ListUsers" v-bind:key="index"
            v-bind:user="user"
            v-on:deleteUser="deleteUser"
            />
        </div>
    </div>
</template>
<script>
import CompUser from './CompUser.vue'
export default {
    name:'list-users',
    props: {
        ListUsers: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return{
            text:'This is ListUsers'
        }
    },
    components: {
        CompUser
  },
  methods:{
    deleteUser(data){
        console.log('deleteUser ListUsers.vue', data);
        this.$emit('deleteUserEvent', data);
    },
  }
}
</script>
<style scoped>
    .list-user{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .list-user .user{
        display: inline-block;
        padding: 30px;
        margin: 30px;
        border: 1px solid #333;
        /* width: calc(33.3333% - 20px); */
    }
</style>