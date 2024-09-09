<template>
	<div id="app">
        <h1>Dice game</h1>
        <div class="wrapper clearfix">  
            <players
                v-bind:isWinner="isWinner"
                v-bind:activePlayer="activePlayer"
                v-bind:scoresPlayer="scoresPlayer"
                v-bind:currentScore="currentScore"
            ></players>
            <controls
                v-bind:isPlaying = "isPlaying"
                v-bind:finalScore = "finalScore"
                v-on:handleChangeFinalScore = "handleChangeFinalScore"
                v-on:handleNewGame = "handleNewGame"
                v-on:handleRollDice = "handleRollDice"
                v-on:handleHoldScore = "handleHoldScore"
            ></controls>
            <dices
            v-bind:dices="dices"
            ></dices>
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
            isPlaying: false,
            isOpenPopup: false,
            activePlayer: 0,
            scoresPlayer: [2, 5],
            currentScore: 0,
            dices: [1, 1, 1],
            finalScore:12,
		}
	},
	components: {
        Players,
        Controls,
        Dices,
        PopupRule
        
    },
    computed:{
        isWinner(){
            let {scoresPlayer , finalScore} = this;
            if(scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore){
               this.isPlaying = false;
                return true;
            }
            return false;
        }
    },
    methods:{
        handleChangeFinalScore(e){
            let finalScore = parseInt(e.target.value);
            console.log(parseInt(finalScore));
        },
        handleConfirm(){
            this.dices = [1, 1, 1];
            this.isPlaying = true;
            this.scoresPlayer = [0, 0];
            this.currentScore = 0;
            this.activePlayer = 0;
          //  console.log("handleConfirm app.vue ");
            this.isOpenPopup = false;
        },
        handleNewGame(){
           // console.log("handleNewGame App.vue: ");
            this.isOpenPopup = true;
        },
        handleRollDice(){
            if(this.isPlaying){
            // console.log("rollDice App.vue");
                let dice1 = Math.floor(Math.random() * 6) + 1;
                let dice2 = Math.floor(Math.random() * 6) + 1;
                let dice3 = Math.floor(Math.random() * 6) + 1;
                console.log(dice1, dice2, dice3);
                this.dices = [dice1, dice2, dice3];
                if(dice1 === 1 || dice2 === 1 || dice3 === 1){
                    //doi luoi choi
                    // setTimeout(() => {
                    //     alert(`Player ${ this.activePlayer + 1} da quay trung so 1`);
                    // }, 10);
                    let activePlayer = this.activePlayer
                    setTimeout(function() {
                        alert(`Player ${ activePlayer + 1} da quay trung so 1`);
                    }, 10);

                    this.nextPlayer();
                    // reset ve diem tam thoi
                }else{
                    // cong don vao diem tam thoi nguoi dang choi
                    console.log('this.currentScore: ', this.currentScore);
                    console.log('this.dice1: ', dice1);
                    console.log('this.dice2: ', dice2);
                    console.log('this.dice3: ', dice3);
                    this.currentScore = this.currentScore + dice1 + dice2 + dice3;
                    console.log('this.currentScore: ', this.currentScore);
                }
            }else{
                alert('Please click New Game');
            }
        },
        nextPlayer(){
            this.activePlayer = this.activePlayer === 0 ? 1 : 0;
            this.currentScore = 0;
        },
        handleHoldScore(){
            if(this.isPlaying){
                //console.log('handleHoldScore App.vue');
                //activePlayer = 0 nguoi choi 1
                // activePlayer = 1 nguoi choi 2
                //scoresPlayer[0] = scoresPlayer[activePlayer]
                //scoresPlayer[1] = scoresPlayer[activePlayer]
                let {scoresPlayer, activePlayer, currentScore} = this;
                let scoredOld = scoresPlayer[activePlayer];
                //let copyScorePlayer = [...scoresPlayer];
                //copyScorePlayer [activePlayer] = scoredOld + currentScore;
                this.$set(scoresPlayer, activePlayer, scoredOld + currentScore);
            // console.log('copyScores', copyScorePlayer);
                //this.scoresPlayer = copyScorePlayer;
                if(!this.isWinner){
                    this.nextPlayer();
                }
                //this.scoresPlayer[this.activePlayer] = this.scoresPlayer[this.activePlayer] + currentScore;

                //this.scoresPlayer [activePlayer] = scoredOld + currentScore;
                //this.scoresPlayer [activePlayer] = copyScores + currentScore;
                //console.log('scoresPlayer', this.scoresPlayer);
            }else{
                alert('Please click New Game');
            }
        }
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
