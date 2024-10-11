import { createStore } from 'vuex'
const store = createStore({
    state: {
        count: 5,
        value: 100,
        value2: 200
    },
    getters: {
      count: state => {
        return state.count;
      },
      countDouble: state => {
        return state.count * 2;
      },
      value: state => {
        return state.value
      }
    },
    mutations: {
      increment (state, number) {
        console.log("increment index")
    setTimeout(function() {
      state.count = state.count + number;
    }, 1000)
    // setTimeout(() => {
    //   state.count = state.count + number;
    // }, 1000);
        
      },
      decrement(state, number) {
        state.count = state.count - number;
      }
    }
  });

  export default store;