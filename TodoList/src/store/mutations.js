export default {
    CHANGE_TASKS(state, newTasks) {
        //save localStore
        // console.log("localStorage", localStorage, JSON.stringify(newTasks));
        // let tasksString = JSON.stringify(newTasks);
        // localStorage.setItem('tasks', tasksString);
        state.listTask = newTasks;
    },
    
    TOGGLE_FORM(state) {
        if(state.isShowForm){
            state.isShowForm = false
            state.taskSelected = null
          }
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
    },

    HANDLE_EDIT(state, editItem) {
        state.taskSelected = editItem;
        state.isShowForm = true;
    }
}