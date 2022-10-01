import React from 'react'
import { CartLi } from './style'
import 'animate.css'

export default function CartItem({cartProduct, cartItem, setCartItem}) {

  let arrSuporte = []

  function handleRemoveItem() {
      cartItem.forEach((product) => {
        if(product !== cartProduct) {
          arrSuporte.push(product)
        }
      })
      setCartItem(arrSuporte)
}

  return (
    <CartLi className="animate__animated animate__backInRight">
        <div className='cardContent'>
            <img src={cartProduct.img} alt="" />
            <div>
                <h3>{cartProduct.name}</h3>
                <p>{cartProduct.category}</p>
            </div>
            <button id={cartProduct.id} onClick={handleRemoveItem}>Remover</button>
        </div>
    </CartLi>
  )
}
