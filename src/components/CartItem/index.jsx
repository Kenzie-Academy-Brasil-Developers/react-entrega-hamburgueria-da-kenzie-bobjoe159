import React, { useEffect } from "react";
import { useState } from "react";
import { CartLi } from "./style";
import "animate.css";

export default function CartItem({
  cartProduct,
  cartItem,
  setCartItem,
  totalValue,
  setTotal,
}) {
  let arrSuporte = [];

  function handleRemoveItem() {
    cartItem.forEach((product) => {
      if (product !== cartProduct) {
        arrSuporte.push(product);
      }
    });
    setCartItem(arrSuporte);
  }

  useEffect(() => {
    console.log(totalValue);
  });

  const [quantity, setQuantity] = useState(1);

  return (
    <CartLi className="animate__animated animate__backInRight">
      <div className="cardContent">
        <img src={cartProduct.img} alt="" />
        <div>
          <h3>{cartProduct.name}</h3>
          <p>{cartProduct.category}</p>
        </div>
        <button
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
        {/* <span>{quantity}</span> */}
        <button
          onClick={() => {
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <button id={cartProduct.id} onClick={handleRemoveItem}>
          Remover
        </button>
      </div>
    </CartLi>
  );
}
