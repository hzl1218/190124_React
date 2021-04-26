function Reducer(state,action){
    switch(action.type){
        case "add":
            return[...state,action.data]
        break;
        default : return state;
    }
}
export default Reducer;