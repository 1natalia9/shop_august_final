import React from 'react'
import { Link } from "react-router-dom"
import s from "./style.module.css"

export default function CategoryCard({title}) {
  return (
    <Link to={`/products/${title}`}className={s.item}>{title}</Link>
  )
}
