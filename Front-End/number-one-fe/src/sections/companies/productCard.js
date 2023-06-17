import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Stack, SvgIcon } from "@mui/material";
import ArrowDownIcon from "@heroicons/react/24/solid/ArrowDownIcon";
import ArrowUpIcon from "@heroicons/react/24/solid/ArrowUpIcon";
// import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove"
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

function ProductCard() {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleOrder = () => {
    // Perform order-related functionality here
    console.log(`Ordered ${quantity} items`);
  };

  return (
    <Box sx={{ p: 2, border: "1px dashed grey" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={3}>
        <Stack
          justifyContent="space-between"
          alignItems="center"

          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Typography component="div" noWrap>
            Product Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            #600
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          {/* <Button variant="contained" onClick={handleDecrement}>
            -
          </Button>
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
          <Button variant="contained" onClick={handleIncrement}>
            +
          </Button> */}
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Typography variant="body2" color="text.secondary">
            {quantity}
          </Typography>
          <Fab size="small" color="secondary" aria-label="minus">
            <RemoveIcon />
          </Fab>
        </Stack>

        <Button variant="contained" onClick={handleOrder}>
          Order
        </Button>
      </Stack>
    </Box>
  );
}

export default ProductCard;

 <Box sx={{ "& > :not(style)": { m: 1 } }}>
   <Fab color="primary" aria-label="add">
     <AddIcon />
   </Fab>
   <Fab color="secondary" aria-label="minus">
     <EditIcon />
   </Fab>
   <Fab variant="extended">
     <NavigationIcon sx={{ mr: 1 }} />
     Navigate
   </Fab>
   <Fab disabled aria-label="like">
     <FavoriteIcon />
   </Fab>
 </Box>;
