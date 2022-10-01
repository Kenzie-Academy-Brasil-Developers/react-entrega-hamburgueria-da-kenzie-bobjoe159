import React from 'react'
import ProductsList from '../ProductsList'
import Cart from '../Cart'
import { DashboardDiv } from './style'
import { ToastContainer } from 'react-toastify';

export default function Dashboard({products, cartItem, setCartItem }) {

  return (
    <DashboardDiv>
      <ToastContainer/>
      <ProductsList products={products} cartItem={cartItem} setCartItem={setCartItem}/>
      <Cart cartItem={cartItem} setCartItem={setCartItem} />
    </DashboardDiv>
  )
}
