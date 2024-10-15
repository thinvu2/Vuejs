import { createStore } from 'vuex'
import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
const store = createStore ({
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations

});
export default store;