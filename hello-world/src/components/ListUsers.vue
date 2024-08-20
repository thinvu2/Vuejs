<template>
    <div class="list-user">
        <div class="user">
            <comp-user
            v-for="(user, index) in ListUsers" v-bind:key="index"
            v-bind:userahihi="user"
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
        padding: 30px;
        margin-bottom: 30px;
        border: 1px solid #333;
        width: calc(33.3333% - 20px);
    }
</style>