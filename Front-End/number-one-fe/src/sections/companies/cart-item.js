import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Icon,
  Container,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { AddCircle, Delete, RemoveCircle } from "@mui/icons-material";



function CartItem({ item, removeFromCart }) {
    const [count, setCount] = useState(item.qty);

    const increamentCount = () => {
        setCount(count + 1)
    }

    const decreamentCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
      
    };

  return (
    <React.Fragment key={item.id}>
      {/* {console.log("id: " + item.item.id)} */}
      {/* {console.log("Item name: " +item.item.name)} */}
      <ListItem>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
          <Stack
            justifyContent="space-between"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            // direction={{ xs: "column", sm: "row" }}
            direction="row"
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Stack>
              <Typography component="div" noWrap>
                {item.name}
              </Typography>
              <ListItemText secondary={item.name} />
            </Stack>

            <Typography variant="body2" color="text.secondary">
              #300
            </Typography>
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={3}>
              <IconButton color="secondary" aria-label="add an alarm" onClick={increamentCount}>
                <AddCircle />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {count}
              </Typography>
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={decreamentCount}
              >
                <RemoveCircle />
              </IconButton>
            
            </Stack>
          </Stack>
        </Stack>

        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item)}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </React.Fragment>
  );
}

export default CartItem;