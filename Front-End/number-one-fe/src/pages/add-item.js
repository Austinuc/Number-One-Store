import React, { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Grid,
  Button,
  Container,
  Stack,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,

} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomersTable } from "src/sections/customer/customers-table";
import { CustomersSearch } from "src/sections/customer/customers-search";
import { applyPagination } from "src/utils/apply-pagination";
import ItemList from "src/sections/companies/item-lists";
import ProductItem from "src/sections/companies/product-item";
import AddItem from "src/layouts/forms/add-item";
import { Close } from "@mui/icons-material";


const now = new Date();

 const category = [
   { name: "Drinks", id: 1 },
   { name: "Snacks", id: 2 },
   { name: "Rice", id: 3 },
   { name: "Swallow", id: 4 },
   { name: "Meat", id: 5 },
 ];

 const attribute = [
   {
     Drinks: [{ Type: ["soft", "energy", "beer"] }, { Size: ["medium"] }],
     id: 1,
   },
   {
     Snacks: [{ Type: ["meat-pie", "plantain-chips", "doughnut"] }],
     id: 2,
   },
   {
     Rice: [{ Type: ["Fried", "Jollof"] }, { Weight: ["5kg"] }],
     id: 3,
   },
   {
     Swallow: [{ Type: ["Garri", "Fufu"] }],
     id: 4,
   },
   {
     Meat: [{ Type: ["Goat", "Beef"] }],
     id: 5,
   },
 ];

 const handleSelectAttribute = (attr) => {
   setSelected(attr);

   attribute
     .filter((obj) => obj.hasOwnProperty(attr))
     .forEach((obj) => {
       Object.values(obj)[0].map((el) => console.log(Object.values(el)[0]));
     });
 };



const Page = () => {
   const [formValues, setFormValues] = useState({
     name: "",
     description: "",
     category: "",
     parentCategory: "",
     attribute: [{}],
     quantity: "",
     unitPrice: "",
   });

   const [attributes, setAttributes] = useState([{}]);

   const [errors, setErrors] = useState({});

   const [selected, setSelected] = useState("");

   const handleChange = (e) => {
     const { name, value } = e.target;
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: value,
        }));
     
   };

   const handleSubmit = (e) => {
     e.preventDefault();
     const validationErrors = validateForm();
     setErrors(validationErrors);

     if (Object.keys(validationErrors).length === 0) {
       // Submit form or perform other actions
       console.log("Form submitted:", formValues);
     }
   };

   const validateForm = () => {
     let errors = {};

     if (!formValues.name) {
       errors.name = "Name is required";
     }

     if (!formValues.quantity) {
       errors.quantity = "Quantity is required";
     }

     if (!formValues.unitPrice) {
       errors.unitPrice = "Unit price is required";
     }

     return errors;
   };

   const useCustomers = (page, rowsPerPage) => {
     return useMemo(() => {
       return applyPagination(data, page, rowsPerPage);
     }, [page, rowsPerPage]);
   };

   const useCustomerIds = (customers) => {
     return useMemo(() => {
       return customers.map((customer) => customer.id);
     }, [customers]);
   };

  return (
    <>
      <Head>
        <title>Items | Number One</title>
      </Head>
      <Box
        component="form"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
        noValidate
        autoComplete="off"
        className="add-item-container"
      >
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid xs={12} md={8} className="add-item-container__left form-bg">
              <Stack spacing={2}>
                <div>
                  <FormControl fullWidth>
                    <TextField
                      label="Name"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      required
                    />
                  </FormControl>
                </div>

                <div>
                  <FormControl fullWidth>
                    <TextField
                      label="Description"
                      name="description"
                      value={formValues.description}
                      onChange={handleChange}
                      multiline
                      rows={4}
                    />
                  </FormControl>
                </div>
              </Stack>

              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <FormControl>
                    <TextField
                      type="number"
                      label="Quantity"
                      name="quantity"
                      value={formValues.quantity}
                      onChange={handleChange}
                      error={!!errors.quantity}
                      helperText={errors.quantity}
                      required
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <TextField
                      type="number"
                      label="Unit Price"
                      name="unitPrice"
                      value={formValues.unitPrice}
                      onChange={handleChange}
                      error={!!errors.unitPrice}
                      helperText={errors.unitPrice}
                      required
                    />
                  </FormControl>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={4} className="add-item-container__right form-bg">
              <div>
                <FormControl fullWidth >
                  <InputLabel>Category</InputLabel>
                  <Select name="category" value={formValues.category} onChange={handleChange}>
                    {category.map((item) => (
                      <MenuItem
                        key={item.id}
                        value={item.name}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                  <InputLabel>Parent Category</InputLabel>
                  <Select name="parentCategory" value={formValues.parentCategory} onChange={handleChange}>
                    {category.map((item) => (
                      <MenuItem
                        key={item.id}
                        value={item.name}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div>
                {attributes && attributes.map((atrr) => {
                    atrr
                })}
              </div>
            </Grid>
          </Grid>
          <div>
            <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit}>
              Submit
            </Button>
          </div>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
    <DashboardLayout>
        {page}
    </DashboardLayout>
);

export default Page;
