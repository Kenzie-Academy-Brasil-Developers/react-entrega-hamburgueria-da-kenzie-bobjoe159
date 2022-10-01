import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import { ProductsList } from './style'
import 'animate.css'

export default function ProductList({products, cartItem, setCartItem}) {
  return (
    <ProductsList className='animate__animated animate__fadeIn animate__delay-2s'> 
      {
        products.map(product => 
          <ProductCard key={product.id} product={product} products={products} cartItem={cartItem} setCartItem={setCartItem} />
        )
      }
    </ProductsList>
  )
}
