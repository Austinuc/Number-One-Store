import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Box
} from "@mui/material";


export default function AddItem() {

    const category = [
      { name: "Drinks", id: 1 },
      { name: "Snacks", id: 2 },
      { name: "Rice", id: 3 },
      { name: "Swallow", id: 4 },
      { name: "Meat", id: 5 }
    ];

    const attribute = [
      {
        Drinks: [
          { Type: ["soft", "energy", "beer"] },
          { Size: ["medium"] },
        ],
        id: 1
      },
      {
        Snacks: [
            { Type: ["meat-pie", "plantain-chips", "doughnut"] }
        ],
        id: 2
      },
      {
        Rice: [
          { Type: ["Fried", "Jollof"] },
          { Weight: ["5kg"] },
        ],
        id: 3
      },
      {
        Swallow: [
            { Type: ["Garri", "Fufu"] }
        ],
        id: 4
      },
      {
        Meat: [
            { Type: ["Goat", "Beef"] }
        ],
        id: 5
      },
    ];

    const handleSelectAttribute = (attr) => {
      setSelected(attr);

      const selectedAtrr = attribute.filter((obj) => obj.hasOwnProperty(attr));
      console.log(selectedAtrr)
      attribute
        .filter((obj) => obj.hasOwnProperty(attr))
        .forEach((obj) => {
          console.log(obj);
          console.log(Object.values(obj)[0]);
          Object.values(obj)[0].map((el) => console.log(Object.values(el)[0]));
          // const arrayElements = obj[selectedAtrr].flatMap((item) => Object.values(item)[0]);
          // console.log(arrayElements);
        });
    }

      const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        category: "",
        attribute: "",
        quantity: "",
        unitPrice: "",
      });

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

      return (
        // <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
            />
          </div>

          <div>
            <TextField
              label="Description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </div>

          <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel>Category</InputLabel>
              <Select name="category" value={formValues.category} onChange={handleChange}>
                {category.map((item) => (
                  <MenuItem
                    key={item.id}
                    value={item.name}
                    onClick={() => handleSelectAttribute(item.name)}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {selected && (
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel>{selected}</InputLabel>
                <Select name={selected} value={formValues.attribute} onChange={handleChange}>
                  {}
                </Select>
              </FormControl>
            )}
          </div>

          <div>
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
          </div>

          <div>
            <Button type="submit" variant="contained" color="primary" onSubmit={handleSubmit}>
              Submit
            </Button>
          </div>
        </Box>
      );
    }

