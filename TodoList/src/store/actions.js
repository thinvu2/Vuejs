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
       // console.log('Action handleSort',  {orderBy, orderDir});
        commit('HANDLE_SORT', { orderBy, orderDir });
    },
    handleDelete({ commit, state }, taskDelete) {
      if(!Array.isArray(state.listTask)) state.listTask = [];
      let newListTask = state.listTask.forEach((e,index) => {
        if(deleteItem.id === e.id){
        state.listTask.splice(index, 1);
        }
      });
      console.log('Action handleDelete',  newListTask);
      commit('CHANGE_TASKS', newListTask);
    },
    handleAddNewTask({ commit}, objTask) {
      commit('ADD_NEW_TASK', objTask)

    },
}