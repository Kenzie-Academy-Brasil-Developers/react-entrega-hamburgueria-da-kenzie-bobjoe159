import React from 'react'
import { CardDiv } from './style'

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
                <div className='cardContent'>
                    <img src="../../hamburguer.png" alt="" />
                    <div>
                        <h3>Hamburguer</h3>
                        <p>Sanduíches</p>
                    </div>
                    <button>Remover</button>
                </div>
                <div className='totalValue'>
                    <p>Total</p>
                    <span>R$ 40,00</span>
                </div>
                <button className="removeAllButton">Remover todos</button>
            </>
        </section>
    </CardDiv>
  )
}
