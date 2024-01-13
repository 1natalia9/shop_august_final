import React from 'react'
import { useEffect } from 'react'
import { Route, Routes } from "react-router-dom"
import BasketPage from '../../pages/BasketPage'
import CategoriesPage from '../../pages/CategoriesPage'
import NotFoundPage from '../../pages/NotFoundPage'
import Nav from "../Nav"
import "./index.css";
import { useDispatch } from 'react-redux'
import { loadCategoryAction } from '../../store/asyncActions/category'
import { loadProductsAction } from '../../store/asyncActions/products'
import ProductsPage from '../../pages/ProductsPage'
import ProductDiscriptionPage from '../../pages/ProductDiscriptionPage'


export default function App() {
   const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadCategoryAction);
    dispatch(loadProductsAction);
  }, [])
  return (
 <div>
   <Nav />
   <Routes>
    <Route path="/shop_august_final" element={<CategoriesPage />} />
    <Route path="/basket" element={<BasketPage />} />
    <Route path="/products" element={<ProductsPage />} />
    <Route path="/products/:category" element={<ProductsPage />} />
    <Route path="/product/:id" element={<ProductDiscriptionPage />} />
    <Route path="/*" element={<NotFoundPage />} />
   </Routes>
   
 </div>
  )
}

