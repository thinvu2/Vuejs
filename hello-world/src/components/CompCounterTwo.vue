<template>
    <div>
        <h1>{{ count }} <span>value2: {{ value2 }}</span></h1>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    name: 'comp-counter-two',
    data() {
        return{
        }
    },
    computed: {
    count () {
      return this.$store.state.count
    },
    ...mapGetters([
         'value',
        'countDouble'
    ]),
    ...mapState([
        'value2'
    ]),

  },
    methods: {
        handleCountPlus() {
            this.$emit('handleCountPlus');
        },
        handleCountMinus() {
            this.$emit('handleCountMinus');
        }
    },
    mounted() {
        console.log(this.$store);
    }
}
</script>