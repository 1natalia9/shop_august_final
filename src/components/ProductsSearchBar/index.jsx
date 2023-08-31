import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { productSearchFilterAction } from '../../store/reducer/productsReducer';

export default function ProductsSearchBar() {

    const dispatch = useDispatch();
    const onChange = (event)=>{
        dispatch(productSearchFilterAction(event.target.value));
    }
return (
    <div className={s.container}>
        <input placeholder='search...' onChange={onChange} type='text'/>
    </div>
  )
}
