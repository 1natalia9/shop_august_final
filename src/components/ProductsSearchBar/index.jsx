import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux';
import { filterProductsByPriceAction, productSearchFilterAction, sortProductsAction } from '../../store/reducer/productsReducer';

export default function ProductsSearchBar() {

    const dispatch = useDispatch();
    const onChange = (event)=>{
        dispatch(productSearchFilterAction(event.target.value));
    }

    const sort = event => dispatch(sortProductsAction(event.target.value))

    const filter_price = e => {
        e.preventDefault();
        const { min, max } = e.target;
        const min_value = min.value || 0;
        const max_value = max.value || Infinity;
        dispatch(filterProductsByPriceAction({ min_value, max_value }))
    }

return (
    <div className={s.container}>
        <label>
            <span>Price:</span>
            <form onSubmit={filter_price}>
                <input type="number" placeholder='min' name='min' min='0'/>
                <input type="number" placeholder='max' name='max' min='0'/>
                <button>Filter</button>
            </form>
        </label>
        <label>
            <span>Sort: </span>
        <select onInput={sort} defaultValue={{ value: 'default'}}>
            <option value='default' hidden>---</option>
            <option value='title'>by title</option>
            <option value='price_asc'>by price ASC</option>
            <option value='price_desc'>by price DESC</option>
        </select>
        </label>
       <div>
        <input placeholder='search...' onChange={onChange} type='text'/>
       </div>
    </div>
    
  )
}
