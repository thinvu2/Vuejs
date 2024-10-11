<template>
    <div>
        <h1>{{ count }}</h1>
        <h2>Value: {{ value }}</h2>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'comp-counter',
    data() {
        return{
        }
    },
    computed: {
        count: {
            get() {
                return this.$store.getters.count;
            },
            set(newValue) {
                this.$store.state.count = newValue;
               /// console.log('newValue', newValue);
            }
        },
        ...mapGetters([
            'value',
            'countDouble'
        ])
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