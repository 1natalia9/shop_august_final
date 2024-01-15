import { loadAction } from "../reducer/productsReducer";

export const loadProductsAction = async (dispatch) => {
   // const resp = await fetch("https://fakestoreapi.com/products");
   // const data = await resp.json();
   fetch('https://fakestoreapi.com/products')
   .then(res => res.json())
   .then(json => {
   const new_json = json.map(el => ({
      ...el,
      show_item: true
   }))
   dispatch(loadAction(new_json));
})
}