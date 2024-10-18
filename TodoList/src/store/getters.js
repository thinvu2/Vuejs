export default {

    listTaskSearchSort: state => {
        const { strSearch } = state;
        if(!Array.isArray(state.listTask)){
          console.error('listTask is not an array:', state.listTask);
          state.listTask = [];
        }else{
          let newItems = state.listTask.filter((item) => item.taskName.toLowerCase().includes(strSearch.toLowerCase()))
          return newItems;
        }
  //sort
        let listTask = [...newItems];
        listTask.sort(function(a, b) {
          let numberSort = state.orderDir === 'asc' ? -1 : 1;
          if(a[state.orderBy] < b[state.orderBy]) return numberSort;
          else if(a[state.orderBy] > b[state.orderBy]) return numberSort * (-1);
          return 0;
        });
        return listTask;
    }
}