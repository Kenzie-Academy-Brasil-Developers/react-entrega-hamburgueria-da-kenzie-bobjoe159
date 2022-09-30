import React from 'react'
import { CartLi } from './style'

export default function CartItem() {
  return (
    <CartLi>
        <div className='cardContent'>
            <img src="../../hamburguer.png" alt="" />
            <div>
                <h3>Hamburguer</h3>
                <p>Sanduíches</p>
            </div>
            <button>Remover</button>
        </div>
    </CartLi>
  )
}
