import React, { useState } from 'react'
import { TotalDiv } from './style'

export default function Total({cartItem, setCartItem}) {

  const totalSum = cartItem.reduce(function (acumulador, atual) {
    console.log(atual)
    return acumulador + Number(atual.price)
  }, 0)

  return (
    <TotalDiv>
        <div className='totalValue'>
        <p>Total</p>
        <span>R$ {totalSum.toFixed(2)}</span>
        </div>
        <button className="removeAllButton" onClick={() => {
          setCartItem([])
        }}>Remover todos</button>
    </TotalDiv>
  )
}
