import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Container,
  Typography,
  Button
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";

function CartItems({ cartItems, removeFromCart, setCartItems }) {
  return (
    <Container maxWidth="md" className="cart-container">
      <Typography variant="h4" align="center" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="subtitle1" align="center">
          Your cart is empty.
        </Typography>
      ) : (
        <>
          <List>
            {cartItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText primary={item.name} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item)}>
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Button variant="contained" startIcon={<ShoppingCart />} onClick={() => setCartItems([])}>
            Clear Cart
          </Button>
        </>
      )}
    </Container>
  );
}

export default CartItems;
