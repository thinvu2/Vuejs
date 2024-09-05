<template>
    <div class="com-tabs">
        <div class="tabs-title">
            <span>{{ title }}</span>
            <ion-icon name="heart" aria-hidden="true"></ion-icon>
        </div>
        <div class="tabs-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default{
    name:'com-tabs',
    props:{
        title: String,
    },
    data() {
        return{

        }
    },
}
</script>

<style>
.tabs-title{
    height: 40px;
    padding: 10px 20px;
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
}
.tabs-content{
    margin-top: 2px;
    border: 1px solid #000;
}
.tabs-header{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}
.tabs-header li{
    padding: 8px 15px;
    background-color: #ccc;
    transition: all 0.3s ease;
}
.tabs-header li:hover{
    background-color:rgb(77, 73, 73);
    color:rgb(219, 212, 212);
}
</style>
