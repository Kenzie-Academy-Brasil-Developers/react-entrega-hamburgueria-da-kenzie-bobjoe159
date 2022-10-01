import React from 'react'
import { CardDiv } from './style'
import CartItem from '../CartItem'
import Total from '../Total'

export default function Cart({cartItem, setCartItem}) {
  return (
    <CardDiv>
        <h2>
            Carrinho de compras
        </h2>
        <section>
            {cartItem.length === 0 ?  
            <>
                <div className="emptyDiv">
                    <h3>
                        Sua sacola está vazia
                    </h3>
                    <p>
                        Adicione itens
                    </p>
                </div>
            </>
            :
            <>
                <ul>
                    {cartItem.map(cartProduct => 
                    <CartItem key={cartProduct.id} cartProduct={cartProduct} cartItem={cartItem} setCartItem={setCartItem}/>)}
                </ul>

                <Total cartItem={cartItem} setCartItem={setCartItem}/>
            </>
            }
        </section>
    </CardDiv>
  )
}
