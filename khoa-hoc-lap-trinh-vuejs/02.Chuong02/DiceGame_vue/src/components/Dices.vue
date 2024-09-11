<template>
    <div class="wrapper-dice">
        <div class="dice" v-bind:class = "countDown">
            <div class="bowl">
            </div>
            <div id="roll-dice1">
                <div class="spinner" v-bind:class = "'dice-' + dices[0]">
                    <div class="face1">1</div>
                    <div class="face2">2</div>
                    <div class="face3">3</div>
                    <div class="face4">4</div>
                    <div class="face5">5</div>
                    <div class="face6">6</div>
                </div>
            </div>
            <div id="roll-dice2">
                <div class="spinner" v-bind:class = "'dice-' + dices[1]">
                    <div class="face1">1</div>
                    <div class="face2">2</div>
                    <div class="face3">3</div>
                    <div class="face4">4</div>
                    <div class="face5">5</div>
                    <div class="face6">6</div>
                </div>
            </div>
            <div id="roll-dice3">
                <div class="spinner" v-bind:class = "'dice-' + dices[2]">
                    <div class="face1">1</div>
                    <div class="face2">2</div>
                    <div class="face3">3</div>
                    <div class="face4">4</div>
                    <div class="face5">5</div>
                    <div class="face6">6</div>
                </div>
            </div>
        </div>
        <!-- dice 2 -->
        <div class="dice" v-bind:class ="{hideDice: hideDice}">
            <div class="item-second">{{ seconds }}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:'dices',
    props:{
        dices:{type: Array, default: [1, 1, 1]}
    },
    data(){
        return{
            countDownSeconds: 60,
            hideDice: false,
            dicesLocal: [...this.dices],
        }
    },
    created () {
        setInterval(() =>{
            this.countDown();
        }, 1000);
    },

    methods:{
        countDown(){
            this.countDownSeconds --;
            if(this.countDownSeconds == 0){
                this.hideDice = true;
                this.$emit('handleRollDice');
            }
            if(this.countDownSeconds == -13){
                this.hideDice = false;
                this.countDownSeconds = 60;
            }
        }
    },
    computed:{
        seconds: function(){
            return this.countDownSeconds;
        }
    },
    watch: {
        dices(newVal) {
            this.dicesLocal = [...newVal];
        }
    }
}
</script>

<style>
.item-second{
    position: absolute;
    left: 60px;
    top: 40px;
    font-size: 80px;
    color:gray;
    
}

.hideDice{
    display: none;
}

.bowl{
    position: absolute;
    top: 25%;
    left: 25%;
    border: 1px solid rgb(109 107 95);
    border-radius: 50%;
    width: 100px;
    height: 100px;
}
#roll-dice1 {
    position: absolute;
    top: 30px;
    left: 50px;
}

#roll-dice2 {
    position: absolute;
    top: 80px;
    left: 20px;
}

#roll-dice3{
    position: absolute;
    bottom: 60px;
    left: 75px;
}

.dice {
    position: absolute;
    background-color: #151411;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid rgb(189, 178, 90);
    box-shadow: 0px 10px 60px rgba(0, 0, 0, 0.10);
}
.spinner div {
    position: absolute;
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    text-align: center;
    line-height: 120px;
    font-size: 100px;
    color: #42b983;
    font-size: 0;
    transition: all .3s ease;
    opacity: 1;
}

.spinner .face1 { 
    -webkit-transform: translateZ(60px);
    -ms-transform: translateZ(60px);
    transform: translateZ(60px);
    background-image: url("/public/assets/dice-1.png");
    background-position: center;
    background-size: cover;
}
.spinner .face2 { 
    -webkit-transform: rotateY(90deg) translateZ(60px); 
    -ms-transform: rotateY(90deg) translateZ(60px); 
    transform: rotateY(90deg) translateZ(60px); 
    background-image: url("/public/assets/dice-2.png");
    background-position: center;
    background-size: cover;
}
.spinner .face3 { 
    -webkit-transform: rotateY(90deg) rotateX(90deg) translateZ(60px); 
    -ms-transform: rotateY(90deg) rotateX(90deg) translateZ(60px); 
    transform: rotateY(90deg) rotateX(90deg) translateZ(60px); 
    background-image: url("/public/assets/dice-3.png");
    background-position: center;
    background-size: cover;
}
.spinner .face4 { 
    -webkit-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px); 
    -ms-transform: rotateY(180deg) rotateZ(90deg) translateZ(60px); 
    transform: rotateY(180deg) rotateZ(90deg) translateZ(60px); 
    background-image: url("/public/assets/dice-4.png");
    background-position: center;
    background-size: cover;
}
.spinner .face5 { 
    -webkit-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px); 
    -ms-transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px); 
    transform: rotateY(-90deg) rotateZ(90deg) translateZ(60px); 
    background-image: url("/public/assets/dice-5.png");
    background-position: center;
    background-size: cover;
}
.spinner .face6 { 
    -webkit-transform: rotateX(-90deg) translateZ(60px); 
    -ms-transform: rotateX(-90deg) translateZ(60px); 
    transform: rotateX(-90deg) translateZ(60px); 
    background-image: url("/public/assets/dice-6.png");
    background-position: center;
    background-size: cover;
}

.spinner {
    -webkit-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transform-origin: 60px 60px 0;
    -ms-transform-origin: 60px 60px 0;
    transform-origin: 60px 60px 0;
    -webkit-transition: all .9s ease;
    -o-transition: all .9s ease;
    transition: all .9s ease;
    -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.spinner.dice-1 {
	-webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -ms-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    -o-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
.spinner.dice-2 {
	-webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
    -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
    -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(-90deg) rotateZ(0deg); 
}
.spinner.dice-3 {
    -webkit-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
    -ms-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
    -o-transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg);
    transform: rotateX(0deg) rotateY(-90deg) rotateZ(90deg); 
}
.spinner.dice-4 {
    -webkit-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
    -ms-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
    -o-transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg);
    transform: rotateX(0deg) rotateY(180deg) rotateZ(90deg); 
}
.spinner.dice-5 {
    -webkit-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
    -ms-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
    -o-transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg);
    transform: rotateX(0deg) rotateY(90deg) rotateZ(0deg); 
}
.spinner.dice-6 {
    -webkit-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
    -ms-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
    -o-transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg);
    transform: rotateX(90deg) rotateY(90deg) rotateZ(0deg); 
}
</style>