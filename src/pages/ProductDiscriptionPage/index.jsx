import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { basketAddAction } from '../../store/reducer/basketReducer';
import s from "./style.module.css";

export default function ProductDiscriptionPage() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const product= useSelector(({products}) => products.find(item => item.id === +id));

    const render = () =>{
      if (product === undefined) {
        return <p>There are no such products</p>
      }else{
        const {title, image, description, price} = product;
        return (
          <div className={s.container}>
             <img src={image} alt={title} />
             <div className={s.info}>
                 <h1>{title}</h1>
                 <p>{description}</p>
                 <div className={s.sale_block}>
                 <p>Price: {price}</p>
                 <button onClick={() => dispatch(basketAddAction(+id))}>Добавить в корзину</button>
             </div>
          </div>
         </div>
        )
      }
    }
    return (
      render()
    )
   }
