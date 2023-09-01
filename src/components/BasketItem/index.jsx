import React from 'react'
import { useDispatch } from 'react-redux';
import { basketDecrAction, basketIncrAction, basketRemoveProductAction } from '../../store/reducer/basketReducer';
import s from "./style.module.css";

export default function BasketItem({id, image, title, count, price}) {
  const dispatch = useDispatch();

  return (
    <div className={s.item}>
        <img src={image} alt={title}/>
        <p>{title}</p>
        <p>{price} X {count} = {(price * count).toFixed(2)}</p>
        <div className={s.btn_container}>
            <button className={s.btn_item} onClick={()=> dispatch(basketIncrAction(id))}>+</button>
            <button className={s.btn_item} onClick={()=> dispatch(basketDecrAction(id))}>-</button>
      </div>
      <button className={s.btn} onClick={()=>dispatch(basketRemoveProductAction(id))}>Delete</button>
    </div>
  )
}
