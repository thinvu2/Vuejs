<template>
    <div class="wrapper-player">
        <div class="player-panel">
                <div class="player-name tai" v-bind:class = "{active: currentScore > 10}">Tài</div>
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

.header-rainbow {
    padding: 10px 0;
    text-align: center;
    margin-bottom: 5px;
    border-radius: 5px;
    font-family:arial black;
    font-size:3rem;
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
    height: 60px;
    font-weight: none;
    color: #f7f2f2;
}
.tai{
    color: #515553;
}

.active {
    /* background-color: aqua; */
    -webkit-animation: NAME-YOUR-ANIMATION 1s infinite;  /* Safari 4+ */
    -moz-animation: NAME-YOUR-ANIMATION 1s infinite;  /* Fx 5+ */
    -o-animation: NAME-YOUR-ANIMATION 1s infinite;  /* Opera 12+ */
    animation: NAME-YOUR-ANIMATION 1s infinite;  /* IE 10+, Fx 29+ */
}

@keyframes NAME-YOUR-ANIMATION {
  0%, 49% {
    background-color: rgb(209, 235, 64);
  }
  50%, 100%{
    background-color: rgb(211, 218, 184);
  }
  /* 50%, 74% {
    background-color: #5bee2e;
  }
  75%, 100% {
    background-color: #2ec8ee;
  } */
}


</style>