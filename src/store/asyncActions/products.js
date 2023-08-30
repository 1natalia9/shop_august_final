import { loadAction } from "../reducer/productsReducer";

export const loadProductsAction = async (dispatch) => {
   const resp = await fetch("https://fakestoreapi.com/products");
   const data = await resp.json();
   dispatch(loadAction(data));
}