<template>
	<div id="app">
        <h1>Dice game</h1>
        <div class="wrapper clearfix">  
            <players
                v-bind:currentScore = "currentScore">
            </players>

            <controls
                v-on:handleRollDice = "handleRollDice">
            </controls>

            <dices
            v-bind:dices="dices">
            </dices>
        </div>
	</div>
</template>

<script>
import Players from './components/Players.vue';
import Controls from './components/Controls.vue';
import Dices from './components/Dices.vue';
export default {
	name: 'app',
	data () {
		return {
            isPlaying: false,
            isOpenPopup: false,
            activePlayer: 0,
            currentScore: 0,
            dices: [1, 1, 1],
		}
	},
	components: {
        Players,
        Controls,
        Dices,
    },
    //     isWinner(){
    //         let {scoresPlayer , finalScore} = this;
    //         if(scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore){
    //            this.isPlaying = false;
    //             return true;
    //         }
    //         return false;
    //     }
    // },
    methods:{
        handleRollDice(){
                let dice1 = Math.floor(Math.random() * 6) + 1;
                let dice2 = Math.floor(Math.random() * 6) + 1;
                let dice3 = Math.floor(Math.random() * 6) + 1;
                //console.log(dice1, dice2, dice3);
                this.dices = [dice1, dice2, dice3];
                this.currentScore = dice1 + dice2 + dice3;
               // console.log('this.currentScore', this.currentScore)
        },
    },
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
