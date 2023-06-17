import React, { useState } from "react";
import CartItems from "./cart-item";
import { ShoppingCart } from "@mui/icons-material";
import { Button } from "@mui/material";


function Cart() {
    const data = [
      { name: "Rice", id: 1 },
      { name: "Beans", id: 2 },
      { name: "Chicken", id: 3 },
      { name: "Meat", id: 4 },
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
      {/* Other components */}
      <div>
        <ShoppingCart onClick={toggleCart} />
        <div className="cart-display">
          {isCartOpen && (
            <CartItems cartItems={cartItems} removeFromCart={removeFromCart} setCartItems={setCartItems}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
