const defaultState = [
    {id: 1, count: 12},
    {id: 2, count: 15},
    {id: 3, count: 17}
]

const BASKET_ADD = "BASKET_ADD";
const BASKET_INCREMENT = "BASKET_INCREMENT";
const BASKET_DECREMENT = "BASKET_DECREMENT";
const BASKET_RESET = "BASKET_RESET";
const BASKET_REMOVE_PRODUCT = "BASKET_REMOVE_PRODUCT";

export const basketAddAction = payload => ({type: BASKET_ADD, payload}); 
export const basketIncrAction = payload => ({type: BASKET_INCREMENT, payload}); 
export const basketDecrAction = payload => ({type: BASKET_DECREMENT, payload}); 
export const basketRemoveProductAction = payload => ({type: BASKET_REMOVE_PRODUCT, payload}); 
export const basketResetAction = () => ({type: BASKET_RESET}); 

export const basketReducer = (state=defaultState, action) => {
    if (action.type === BASKET_ADD){
       const product = state.find(({id}) => id === action.payload);
       if (product === undefined){
          return [...state, {id: action.payload, count: 1}]
       }else{
        product.count++;
        return [...state]
       }
    }else if(action.type === BASKET_INCREMENT){
        const product = state.find(({id}) => id === action.payload);
       
        product.count++;
        return [...state]
    }else if(action.type === BASKET_DECREMENT){
        const product = state.find(({id}) => id === action.payload);
        
        if (product.count ===1){
            return state.filter(item => item !== product);
        }else{
            product.count--;
            return [...state]
        }
    }else if(action.type === BASKET_RESET){
       return []
    }else if(action.type === BASKET_REMOVE_PRODUCT){
        return state.filter(({id}) => id !== action.payload);
    }
    return state
}