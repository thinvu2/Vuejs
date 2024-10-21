export default {
    CHANGE_TASKS(state, newTasks) {
        state.listTask = newTasks;
        console.log("Mutations: CHANGE_TASKS", newTasks);
    },
    TOGGLE_FORM(state) {
        // if(this.isShowForm){
        //     this.isShowForm = false
        //     this.taskSelected = null
        //   }
      //  console.log("Mutations: TOGGLE_FORM", state);
        state.isShowForm = !state.isShowForm;
    },
    HANDLE_SEARCH(state, strSearch) {
     //   console.log('HANDLE_SEARCH', strSearch);
       state.strSearch = strSearch;
    },
    HANDLE_SORT(state, { orderBy, orderDir }) {
       // console.log('HANDLE_SORT', { orderBy, orderDir });
        state.orderBy = orderBy,
        state.orderDir = orderDir
    },
    ADD_NEW_TASK(state, objTask) {
        if(!Array.isArray(state.listTask)) state.listTask = [];
        state.listTask.push(objTask);
        state.listTask = [...state.listTask];
    }
}