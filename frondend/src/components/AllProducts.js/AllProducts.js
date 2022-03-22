import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Rating, Slider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function AllProducts() {
  const categories = [
    "Computer & Tablets",
    "Mobile & Photo",
    "Tv & Music",
    "Gaming",
    "Smart Watch",
    "Home",
    "Sports & Hobbies",
  ];
  const dispatch = useDispatch();
  const { loading, error, products, productsCount, itemsPerPage } = useSelector(
    (state) => state.productReducer
  );
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState([1, 20000]);
  const [category, setCategory] = useState("");

  const { keyword } = useParams();
  console.log(productsCount, itemsPerPage);
  useEffect(() => {
    dispatch(getProduct(keyword, page, price, category));
  }, [dispatch, keyword, page, price, category]);

  const handleChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };
  const handleRangeChange = (event, newValue) => {
    event.preventDefault();
    setPrice(newValue);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Container sx={{ py: 8, display: "flex" }}>
            <Box component="div" sx={{ flex: "0.2" }}>
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={handleRangeChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={1}
                max={20000}
                sx={{ width: "10vmax" }}
              />
              <Typography>Categories</Typography>
              <Box
                sx={{
                  width: "100%",

                  bgcolor: "background.paper",
                }}
              >
                <Divider />
                {categories.map((category) => (
                  <List key={category}>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => setCategory(category)}>
                        <ListItemText primary={category} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                ))}
              </Box>
            </Box>
            <Grid container spacing={4} sx={{ flex: "1" }}>
              {products.map((product) => (
                <Grid item key={product._id} xs={12} sm={6} md={4}>
                  <Card sx={{ maxWidth: 345, margin: "20px" }}>
                    <CardMedia
                      component="img"
                      height="440"
                      image={
                        "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwc1365929/images/CMU12G860I-FI.jpg?sw=800&sfrm=jpeg"
                      }
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Rating
                        name="half-rating"
                        defaultValue={2.5}
                        precision={0.5}
                        readOnly
                      />
                      <Typography variant="subtitle2"> 256 review </Typography>
                      <Typography variant="subtitle2"> Price: 20£ </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">set Favourtie</Button>
                      <Button size="small" href={`/product/${product._id}`}>
                        View Detail
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}{" "}
            </Grid>
          </Container>
          <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination
              count={productsCount / itemsPerPage}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </div>
      )}
    </>
  );
}
