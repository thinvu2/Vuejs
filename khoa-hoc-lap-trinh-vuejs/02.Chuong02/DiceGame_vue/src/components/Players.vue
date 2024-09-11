<template>
    <div class="wrapper-player">
        <div class="player-panel">
                <div class="player-name" v-bind:class = "{active: currentScore > 10}">Tài</div>
            </div>
            
        <div class="player-panel">
            <div class="player-name" v-bind:class = "{active: currentScore >= 3 && currentScore <= 10}">Xỉu</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'players',

    props:{
           currentScore: { type: Number, default: 0}
        },

    data() {
        return{}
    },
}
</script>

<style>
.player-panel {
    width: 50%;
    float: left;
    height: 600px;
    padding: 100px;
    transition: all .3s ease;
    background-color: #cfcccc;
}

.player-name {
    font-family: sans-serif;
    font-size: 50px;
    text-align: center;
    letter-spacing: 2px;
    margin-top: 100px;
    margin-bottom: 10px;
    position: relative;
    border: 3px solid rgba(159, 175, 66, 1);
    border-radius: 50%;
    width: 200px;
    height: 60px;
    font-weight: none;
    color: #f7f2f2;
}

.active { 
    color: #42b983;
    background-color: aqua;
}
</style>