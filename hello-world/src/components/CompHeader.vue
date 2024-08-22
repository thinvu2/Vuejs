<template>
    <header>
        <ul>
            <li v-for="(item, index) in ListUsers" v-bind:key="index">{{ item.email }}</li>
        </ul>
        <h1>{{ titleHeader }} <br>
            <button v-on:click="changeTitleHeader">Thay doi tu component header.vue</button>
        </h1>
    </header>
</template>
<script>
export default {
    name: 'comp-header',
    props: {
        titleHeader: String,
        ListUsers:{
            type: Array,
            default(){
                return []
            }
        } ,

    },
    data() {
        return{
            text: 'This is Header'
        }
    },
    methods:{
        changeTitleHeader(){
            console.log('Truoc khi kich hoat su kien changeTitleEvent trong header.vue');
            let data ={
                title:'data truyen qua bien event=>>',
            }
            this.$emit('changeTitleEvent', data);
            console.log('Sau khi kich hoat su kien changeTitleEvent trong header.vue');
        },
    },
}
</script>
<style scoped>

</style>