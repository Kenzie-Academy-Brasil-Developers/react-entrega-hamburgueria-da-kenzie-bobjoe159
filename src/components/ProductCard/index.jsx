import React from 'react';
import { ProductDiv } from './style';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({product, products, cartItem, setCartItem}) {

  function notify() {
    toast.error('Já possui este produto no carrinho!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  function addCartItem() {
    products.forEach(productUnique => {
      if(product.id === productUnique.id) {
        const haveItem = cartItem.includes(productUnique)
        if(haveItem) {
          notify()
          return false
        }
        setCartItem([...cartItem, product])
      }
    })
  }

  return (
      <ProductDiv>
          <figure>
              <img src={product.img} alt="" />
          </figure>
          <div>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <span>R$ {product.price}</span>
              <button id={product.id} onClick={addCartItem}>Adicionar</button>
          </div>
      </ProductDiv>
  )
}
