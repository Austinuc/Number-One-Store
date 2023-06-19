import { Stack, Typography, ListItemText } from "@mui/material";
import React, { useState } from "react";



export default function OrderSummary({ orders }) {


    return (
      <Stack justifyContent="center" alignItems="center" className="order-summary">
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Typography component="div" noWrap>
            Total:
          </Typography>
          <ListItemText secondary={300} />
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
          <Typography component="div" noWrap>
            Total:
          </Typography>
          <ListItemText secondary={300} />
        </Stack>
      </Stack>
    );
}