const LOAD_CATEGORY = "LOAD_CATEGORY";

export const loadAction = (payload) => ({type: "LOAD_CATEGORY", payload})

export const categoryReducer = (state = [], action) =>{
    if (action.type === LOAD_CATEGORY){
        return action.payload;
    }
    return state
}