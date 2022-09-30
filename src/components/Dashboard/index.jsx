import React from 'react'
import ProductsList from '../ProductsList'
import Cart from '../Cart'
import { DashboardDiv } from './style'

export default function Dashboard() {
  return (
    <DashboardDiv>
      <ProductsList/>
      <Cart/>
    </DashboardDiv>
  )
}
