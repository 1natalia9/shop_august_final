import { loadAction } from "../reducer/categoryReducer";

export const loadCategoryAction = async (dispatch) => {
   const resp = await fetch("https://fakestoreapi.com/products/categories");
   const data = await resp.json();
   dispatch(loadAction(data));
}