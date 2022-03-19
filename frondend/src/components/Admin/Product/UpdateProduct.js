import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  updateProduct,
} from "../../../redux/actions/adminProductAction";
import { getProductDetails } from "../../../redux/actions/productAction";

function NewProduct() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.productDetailsReducer);
  console.log(product);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Computer & Tablets",
    "Mobile & Photo",
    "Tv & Music",
    "Gaming",
    "Smart Watch",
    "Home",
    "Sports & Hobbies",
  ];

  useEffect(() => {
    if (product && product._id !== id) {
      dispatch(getProductDetails(id));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory(product.category);
      setStock(product.Stock);
    }
  }, [dispatch, id, product]);

  const updateProductHandler = (e) => {
    e.preventDefault();

    dispatch(updateProduct({ name, price, description, Stock, category }));
  };
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{ marginTop: "100px", marginBottom: "100px" }}
      >
        NewProduct
        <form onSubmit={updateProductHandler}>
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
              label="Age"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={10}>Computer & Tablets</MenuItem>
              <MenuItem value={20}>Mobile & Photo</MenuItem>
              <MenuItem value={30}>Tv & Music</MenuItem>
              <MenuItem value={40}>Gaming</MenuItem>
              <MenuItem value={50}>Smart Watch</MenuItem>
              <MenuItem value={60}>Home</MenuItem>
              <MenuItem value={70}>Sports & Hobbies</MenuItem>
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
          <Button fullWidth type="submit" sx={{ mt: 3, mb: 2 }}>
            Add New Product
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default NewProduct;
