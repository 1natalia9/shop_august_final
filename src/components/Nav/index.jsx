import React from 'react'
import { NavLink } from 'react-router-dom'
import s from "./style.module.css"

export default function Nav() {

    const classActive = ({isActive}) => isActive ? s.active : "";

  return (
<div className={s.container}>
  <h1>Shop-online</h1>
<nav className={s.nav}>
   <NavLink className={classActive} to="/">Categories</NavLink>
   <NavLink className={classActive} to="/products">Products</NavLink>
   <NavLink className={classActive} to="/basket">Car</NavLink>
  </nav>
</div>
  )
}
