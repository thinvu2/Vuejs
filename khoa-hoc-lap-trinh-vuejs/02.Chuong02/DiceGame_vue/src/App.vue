<template>
	<div id="app">
        <h1>Dice game</h1>
        <div class="wrapper clearfix">  
            <dices
            v-bind:dices="dices"
            v-on:handleRollDice = "handleRollDice">
            </dices>

            <players v-bind:currentScore="currentScore"></players>
        </div>
	</div>
</template>

<script>
import Players from './components/Players.vue';
import Dices from './components/Dices.vue';
export default {
	name: 'app',
	data () {
		return {
            currentScore: 0,
            dices: [1, 1, 1],
		}
	},
	components: {
        Dices,
        Players
    },

    methods:{
        handleRollDice(){
                let dice1 = Math.floor(Math.random() * 6) + 1;
                let dice2 = Math.floor(Math.random() * 6) + 1;
                let dice3 = Math.floor(Math.random() * 6) + 1;
                this.dices = [dice1, dice2, dice3];
                this.currentScore = dice1 + dice2 + dice3;
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
