export default {
    changeTasks({ commit }, newTasks) {
      //  console.log("actions: changeTasks", newTasks);
        commit('CHANGE_TASKS', newTasks);
    },
    toggleForm({ commit }) {
       // console.log("actions: toggleForm", commit);
        commit('TOGGLE_FORM')
    },
    handleSearch({ commit }, strSearch) {
       // console.log('Action handleSearch', strSearch);
      commit('HANDLE_SEARCH', strSearch);
    },
    handleSort({ commit}, { orderBy, orderDir }) {
        console.log('Action handleSort',  {orderBy, orderDir});
        commit('HANDLE_SORT', { orderBy, orderDir });
    }
}