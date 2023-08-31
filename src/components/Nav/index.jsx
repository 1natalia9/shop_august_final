import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import s from "./style.module.css"

export default function Nav() {

    const classActive = ({isActive}) => isActive ? s.active : "";

  return (
<div className={s.container}>
  <Link className={s.logo} to="/"><h1>Shop-online</h1></Link>
<nav className={s.nav}>
   <NavLink className={classActive} to="/">Categories</NavLink>
   <NavLink className={classActive} to="/products">Products</NavLink>
   <NavLink className={classActive} to="/basket"><i class="las la-shopping-bag"></i></NavLink>
  </nav>
</div>
  )
}
