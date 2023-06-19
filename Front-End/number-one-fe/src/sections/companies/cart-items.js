import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Chip,
  Container,
  Typography,
  Button,
  Stack
} from "@mui/material";
import { Cancel, ClearAll, Delete, RocketLaunch, SafetyDivider } from "@mui/icons-material";
import { ShoppingCart } from "@mui/icons-material";
import CartItem from "./cart-item";
import OrderSummary from "./order-summary";

function CartItems({ cartItems, removeFromCart, setCartItems, setBadgeCount }) {
  
  const clearCart = () => {
    setCartItems([]);
    setBadgeCount(0);
  };
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
            {cartItems.map((data) => (
              <CartItem key={data.id} item={data} removeFromCart={removeFromCart} />
            ))}
          </List>

          <Divider className="divider-summary">
            <Chip label="Order Summary" />
          </Divider>
          <OrderSummary />
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Button
              color="error"
              variant="outlined"
              startIcon={<Cancel />}
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<RocketLaunch />}
              onClick={() => setCartItems([])}
            >
              Place Order
            </Button>
          </Stack>

          <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}></Stack>
        </>
      )}
    </Container>
  );
}

export default CartItems;


// <React.Fragment key={item.id}>
              //   <ListItem>
              //     {/* <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
              //       <Stack justifyContent="center" alignItems="center" spacing={-0.5}>
              //         <ListItemText primary={item.name} />
              //         <ListItemText secondary={item.name} />
              //       </Stack>
              //       <Stack justifyContent="center" alignItems="center" spacing={2}>
              //         <ListItemText secondary={item.name} />
              //       </Stack>
              //     </Stack> */}
              //     <Stack
              //       direction="row"
              //       justifyContent="space-between"
              //       alignItems="center"
              //       spacing={3}
              //     >
              //       <Stack
              //         justifyContent="space-between"
              //         alignItems="center"
              //         divider={<Divider orientation="vertical" flexItem />}
              //         // direction={{ xs: "column", sm: "row" }}
              //         direction="row"
              //         spacing={{ xs: 1, sm: 2, md: 4 }}
              //       >
              //         <Stack>
              //           <Typography component="div" noWrap>
              //             {item.name}
              //           </Typography>
              //           <ListItemText secondary={item.name} />
              //         </Stack>

              //         <Typography variant="body2" color="text.secondary">
              //           #600
              //         </Typography>
              //         <Stack
              //           direction="row"
              //           justifyContent="center"
              //           alignItems="center"
              //           spacing={3}
              //         >
              //           <Typography
              //             component="div"
              //             noWrap
              //           >
              //             +
              //           </Typography>
              //           <Typography variant="body2" color="text.secondary">
              //             1
              //           </Typography>
              //           <Typography component="div" noWrap>
              //             -
              //           </Typography>
              //         </Stack>
              //       </Stack>
              //     </Stack>

              //     <ListItemSecondaryAction>
              //       <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item)}>
              //         <Delete />
              //       </IconButton>
              //     </ListItemSecondaryAction>
              //   </ListItem>
              //   <Divider />
              // </React.Fragment>