import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketResetAction } from "../../store/reducer/basketReducer";
import s from "./style.module.css"

export default function BasketCalculation() {
    const dispatch = useDispatch();
   const {basket, products} = useSelector(state => state);
   const productsInBasket = basket.map((item) => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product};
   })
   const totalCount = basket.reduce((acc, {count}) => acc + count , 0);
   const totalSum = productsInBasket.reduce((acc, {count, price})=> acc + count * price, 0);
    return (
       <div className={[s.item, s.test].join(" ")}>
         <p>Количество: {totalCount}</p>
         <p>Общая сумма: {totalSum.toFixed(2)}</p>
         <button onClick={() => dispatch(basketResetAction())}>Очистить</button>
       </div>
    )
}