import React from 'react';
import { ProductDiv } from './style';

export default function ProductCard() {
  return (
    <ProductDiv>
        <figure>
            <img src="../../hamburguer.png" alt="" />
        </figure>
        <div>
            <h2>Hamburguer</h2>
            <p>Sanduíches</p>
            <span>R$ 14.00</span>
            <button>Adicionar</button>
        </div>
    </ProductDiv>
  )
}
