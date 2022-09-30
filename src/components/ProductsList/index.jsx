import React from 'react'
import ProductCard from '../ProductCard'
import { ProductsList } from './style'

export default function ProductList() {
  return (
    <ProductsList> 
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </ProductsList>
  )
}
