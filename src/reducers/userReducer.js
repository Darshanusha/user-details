export default (state = [],action) =>{
    switch(action.type){
        case "USER_DETAILS":
            return action.payload;
        case "ADD_USER":
            return action.payload;
        case "EDIT_USER":
            return action.payload;
        case "GET_USER":
            return action.payload;
    }
    return state;
}