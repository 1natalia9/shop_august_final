const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const PRODUCTS_SEARCH_FILTER = "PRODUCTS_SEARCH_FILTER";
const SORT_PRODUCTS = "SORT_PRODUCTS";
const FILTER_PRODUCTS_BY_PRICE = "FILTER_PRODUCTS_BY_PRICE"

export const loadAction = (payload) => ({type: LOAD_PRODUCTS, payload});
export const productSearchFilterAction = (payload) => ({type: PRODUCTS_SEARCH_FILTER, payload});
export const sortProductsAction = (payload) => ({type: SORT_PRODUCTS, payload});
export const filterProductsByPriceAction = (payload) => ({type: FILTER_PRODUCTS_BY_PRICE, payload});

export const productsReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload.map(item => ({...item, show: true}));
    } else if (action.type === PRODUCTS_SEARCH_FILTER){
        return state.map(item => ({
            ...item, 
            show: item.title.startsWith(action.payload)
        }))
    } else if(action.type === SORT_PRODUCTS) {
      if(action.payload === 'title'){
         state.sort((a, b) => a[action.payload].localeCompare(b[action.payload]))
      } else if(action.payload === 'price_asc'){
        state.sort((a, b) => a.price - b.price)
      } else if (action.payload === 'price_desc'){
        state.sort((a, b) => b.price - a.price)
      }
      return [...state]

    } else if (action.type === FILTER_PRODUCTS_BY_PRICE) {
       const { min_value, max_value } =  action.payload;
       return state.map(el => {
        if(el.price >= min_value && el.price <= max_value) {
            el.show_item = true
        } else {
          el.show_item = false
        }
        return el
       })
    } else {
      return state
    }
}