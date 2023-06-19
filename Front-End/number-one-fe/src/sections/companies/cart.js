import React, { useState } from "react";
import CartItems from "./cart-items";
import { ShoppingCart, ShoppingCartIcon } from "@mui/icons-material";

import { Button, IconButton, Badge } from "@mui/material";


function Cart({ data, badgeCount, setBadgeCount }) {
  

  const [cartItems, setCartItems] = useState(data);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    setBadgeCount(badgeCount + 1);
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== item.id));
    setBadgeCount(badgeCount - 1);
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
              setBadgeCount={setBadgeCount}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
