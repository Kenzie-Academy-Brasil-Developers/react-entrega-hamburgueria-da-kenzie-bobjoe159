import React from 'react'
import { TotalDiv } from './style'

export default function Total() {
  return (
    <TotalDiv>
        <div className='totalValue'>
        <p>Total</p>
        <span>R$ 40,00</span>
        </div>
        <button className="removeAllButton">Remover todos</button>
    </TotalDiv>
  )
}
