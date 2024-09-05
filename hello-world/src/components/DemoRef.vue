<template>
    <div class="demo-ref">
        <h1>DemoRef</h1>
        <button class="avatar" v-on:click="handleClickInputFile"> Change Avatar</button>
        <input 
        ref="inputFileAvatar"
        type="file" 
        style="display: none;">
    </div>
</template>
<script>
export default{
    name:'demo-ref',
    data(){
        return{

        }
    },
    methods:{
        handleClickInputFile(){
            this.$refs.inputFileAvatar.click();
            //console.log();
        }
    }
}

</script>
<style scoped>
.demo-ref{
    margin-top: 100px;
    padding: 100px 30px;
    border: 1px solid #000;
}
.avatar{
    color: #fff;
    border: 2px solid #333;
    padding: 12px;
    background-color: #000;
    transition: all .3s ease;
}
.avatar:hover{
    color:aliceblue;
    background-color: green;
}
</style>