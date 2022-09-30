import React from 'react'
import { CardDiv } from './style'
import CartItem from '../CartItem'
import Total from '../Total'

export default function Cart() {
  return (
    <CardDiv>
        <h2>
            Carrinho de compras
        </h2>
        <section>
            {/* <>
                <h3>
                    Sua sacola está vazia
                </h3>
                <p>
                    Adicione itens
                </p>
            </> */}
            <>
                <ul>
                    <CartItem/>
                </ul>

                <Total/>
            </>
        </section>
    </CardDiv>
  )
}
