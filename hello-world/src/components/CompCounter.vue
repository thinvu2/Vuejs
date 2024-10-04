<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="handleCountPlus">Plus</button>
        <button v-on:click="handleCountMinus">Minus</button>
    </div>
</template>
<script>
export default {
    name: 'comp-counter',
    props:{
            count: {
                default: 0,
                type: Number
            }
        },
    data() {
        return{
        }
    },
    methods: {
        handleCountPlus() {
            this.$emit('handleCountPlus');
            console.log("handleCountPlus CompCounter.vue");
        },
        handleCountMinus() {
            this.$emit('handleCountMinus');
        }
    }
}
</script>