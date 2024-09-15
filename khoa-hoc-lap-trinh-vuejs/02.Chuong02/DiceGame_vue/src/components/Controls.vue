<template>
    <div class="container">
        <div v-for="(score, index) in arrSaveScore" 
            v-bind:key = "index" 
            v-bind:class = "['circle', scoreClass (score)]">
        </div>
    </div>
</template>
<script>
export default {
    name:'controls',
    props:{
        arrSaveScore:{
            type: Array, 
            default:() =>[]
        },
    },
    data() {
        return{}
    },
    methods:{
        scoreClass(score) {
            
            if (score > 10) {
                return 'black';
            }else if (score >=3 && score <=10) {
                return 'white';
            }
            return '';
        }
    }
}
</script>

<style>
.container{
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    left: 30%;
    bottom: 33%;
    border: 1px solid rgb(167, 97, 97);
    width: 403px;
    height: 12px;
    border-radius: 5px;
    
}
.circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #bdbaba;
}
.white{
    background-color: #fff;
}
.black{
    background-color: #000;
}
</style>