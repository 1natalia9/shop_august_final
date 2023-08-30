import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./style.module.css"

export default function Nav() {

    const classActive = ({isActive}) => isActive ? s.active : "";

  return (
  <nav className={s.nav}>
   <NavLink className={classActive} to="/">Категорий</NavLink>
   <NavLink className={classActive} to="/products">Все товары</NavLink>
   <NavLink className={classActive} to="/basket">Корзина</NavLink>
  </nav>
  )
}
