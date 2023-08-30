import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketAddAction } from '../../store/reducer/basketReducer';
import s from "./style.module.css"

export default function ProductItem({id, title, image}) {
  const dispatch = useDispatch();
  return (
    <div className={s.item}>
        <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <p>{title}</p>
    </Link>
    <button onClick={() => dispatch(basketAddAction(id))}>Добавить в корзину</button>
    </div>
  
  )
}
