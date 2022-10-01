import React from 'react'
import ProductCard from '../ProductCard'
import { ProductsList } from './style'

export default function ProductList({products, cartItem, setCartItem}) {
  return (
    <ProductsList> 
      {
        products.map(product => 
          <ProductCard key={product.id} product={product} products={products} cartItem={cartItem} setCartItem={setCartItem} />
        )
      }
    </ProductsList>
  )
}
