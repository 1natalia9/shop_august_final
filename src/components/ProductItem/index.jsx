import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { basketAddAction } from '../../store/reducer/basketReducer';
import s from "./style.module.css"

export default function ProductItem({id, title, image, price}) {
  const dispatch = useDispatch();
  return (
     <div className={s.item}>
        <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>Price: {price}$</p>
    </Link>
    <button className={s.btn} onClick={() => dispatch(basketAddAction(id))}>Add to cart</button>
    </div>
  
  
  )
}
