import React from 'react'
import { useSelector } from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import s from "./style.module.css"

export default function CategoriesPage() {
const categories = useSelector(state => state.categories);

  return (
    <div className={s.container}>
      <h1>Лучший магазин лучших товаров</h1>
    <div className={s.cardsContainer}>
      {
        categories.map(item=>{
          return <CategoryCard key={item} title={item} />
        })
      }
    </div>
    </div>
  )
}
