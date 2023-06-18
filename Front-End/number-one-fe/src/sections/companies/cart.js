import React, { useState } from "react";
import CartItems from "./cart-items";
import { ShoppingCart, ShoppingCartIcon } from "@mui/icons-material";

import { Button, IconButton, Badge } from "@mui/material";


function Cart() {
    const data = [
      { name: "Rice", id: 1, qty: 2 },
      { name: "Beans", id: 2, qty: 3 },
      { name: "Chicken", id: 3, qty: 5 },
      { name: "Meat", id: 4, qty: 1 },
    ];
  const [cartItems, setCartItems] = useState(data);
  const [isCartOpen, setIsCartOpen] = useState(false);

  

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <div>
        
        <ShoppingCart onClick={toggleCart} />
        <div className="cart-display">
          {isCartOpen && (
            <CartItems
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              setCartItems={setCartItems}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
