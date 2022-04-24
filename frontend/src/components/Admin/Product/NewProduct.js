import {
  Alert,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../redux/actions/adminProductAction";
import {
  CLEAR_ERRORS,
  NEW_PRODUCT_RESET,
} from "../../../redux/constants/productConstants";
import { useAlert } from "react-alert";

function NewProduct() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();
  ///////////

  const { loading, error, success } = useSelector(
    (state) => state.newProdReducer
  );
  console.log(success);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [open, setOpen] = React.useState(false);

  const categories = [
    "Computer & Tablets",
    "Mobile & Photo",
    "Tv & Music",
    "Gaming",
    "Smart Watch",
    "Home",
    "Sports & Hobbies",
  ];
  function handleClose() {
    //  Navigate("/admin/dashboard");
  }

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(CLEAR_ERRORS());
    }

    if (success) {
      alert.success("Product Added Successfully");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, Navigate, error, success, alert]);

  const createProductHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    console.log(myForm);
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{ marginTop: "100px", marginBottom: "100px" }}
      >
        Add a New Product
        <form encType="multipart/form-data" onSubmit={createProductHandler}>
          <TextField
            id="Product Name"
            label="Product Name"
            variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          />
          <TextField
            id="Price"
            label="Price"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            sx={{ mt: 3, mb: 2 }}
          />
          <TextField
            fullWidth
            id="Product Description"
            label="Product Description"
            multiline
            rows={4}
            variant="outlined"
            type=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mt: 3, mb: 2 }}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Choose Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            id="Stock"
            label="Stock"
            variant="outlined"
            type="number"
            value={Stock}
            onChange={(e) => setStock(e.target.value)}
            sx={{ mt: 3, mb: 2 }}
          />
          <div>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={createProductImagesChange}
              multiple
            />
          </div>
          <Box component="div" id="createProductFormImage">
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))}
          </Box>
          <Button fullWidth type="submit" sx={{ mt: 3, mb: 2 }}>
            Add New Product
          </Button>
        </form>
        {success && (
          <Alert
            autoHideDuration={6000}
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        )}
      </Container>
    </div>
  );
}

export default NewProduct;
