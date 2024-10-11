<template>
    <div>
        <h1>{{ count }}</h1>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'comp-counter-three',
    data() {
        return{
        }
    },
    computed: {
        ...mapGetters ([
            'count'
        ])
    },
    methods: {
        plus() {
            console.log('plus increment three');
            this.$store.commit('increment', 10)
        },
        minus() {
            this.$store.commit('decrement', 10)
        }
    }
}
</script>