<template>
	<div id="app">
        <h1>Dice game</h1>
        <div class="wrapper clearfix">  
            <players
                v-bind:activePlayer="activePlayer"
                v-bind:scoresPlayer="scoresPlayer"
                v-bind:currentScore="currentScore"
            ></players>
            <controls
                v-on:handleNewGame = "handleNewGame"
            ></controls>
            <dices></dices>
            <popup-rule
                v-on:handleConfirm = "handleConfirm"
                v-bind:isOpenPopup = "isOpenPopup"
            ></popup-rule>
        </div>
	</div>
</template>

<script>
import Players from './components/Players.vue';
import Controls from './components/Controls.vue';
import Dices from './components/Dices.vue';
import PopupRule from './components/PopupRule.vue';
export default {
	name: 'app',
	data () {
		return {
            isOpenPopup: false,
            activePlayer: 1,
            scoresPlayer: [5, 2],
            currentScore: 30,
		}
	},
	components: {
        Players,
        Controls,
        Dices,
        PopupRule
        
    },
    methods:{
        handleConfirm(){
            console.log("handleConfirm app.vue ");
        },
        handleNewGame(){
            console.log("handleNewGame App.vue: ");
            this.isOpenPopup = true;
        },
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    /* background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg'); */
    background-color: rgb(36, 35, 35);
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #bdb9b9;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>
