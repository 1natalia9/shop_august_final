import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from "./style.module.css"
import ProductsSearchBar from '../../components/ProductsSearchBar';

export default function ProductsPage() {
   const {category} = useParams();

   const products = useSelector(
    ({products}) => {
      if (category === undefined){
        return products
      }else{
        return products.filter(item => item.category === category)
      }
    })

  return (
   <div>
       {
        products.length === 0
        ? <p>There are no such products</p>
        : <>
        <h1>{category}</h1>
        <ProductsSearchBar />
        <div className={s.container}>
    {
        products
        .filter(({show}) => show)
        .map((product) => <ProductItem key={product.id} {...product}/>)
    }
   </div>
       </>
    }
   </div>
  
  )
}
