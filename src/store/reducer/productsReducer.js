const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const PRODUCTS_SEARCH_FILTER = "PRODUCTS_SEARCH_FILTER";

export const loadAction = (payload) => ({type: LOAD_PRODUCTS, payload});
export const productSearchFilterAction = (payload) => ({type: PRODUCTS_SEARCH_FILTER, payload});

export const productsReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload.map(item => ({...item, show: true}));
    } else if (action.type === PRODUCTS_SEARCH_FILTER){
        return state.map(item => ({
            ...item, 
            show: item.title.startsWith(action.payload)
        }))
    }
    return state
}