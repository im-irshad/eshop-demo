import React, { Fragment, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { useParams } from "react-router-dom";
import { addItToCart } from "../../redux/actions/cartAction";
import {
  clearErrors,
  getProductDetails,
} from "../../redux/actions/productDetailAction";
import Loader from "../Loader/Loader";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state) => state.productDetailsReducer
  );

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItToCart(id, quantity));
    alert.success("Item Added To Cart");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error]);

  return (
    <Fragment>
      {!product ? (
        <Loader />
      ) : (
        <Fragment>
          <Box
            sx={{
              backgroundColor: "rgb(255, 255, 255)",
              maxWidth: "100%",
              padding: "6vmax",
              boxSizing: "border-box",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "2vmax",
                boxSizing: "border-box",
                border: "1px solid black",
              }}
            >
              <Carousel>
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      key={i}
                      sx={{ width: "20vmax" }}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "2vmax",
                boxSizing: "border-box",
                border: "1px solid black",
              }}
            >
              <Box>
                <Typography variant="h2">{product.name}</Typography>
                <Typography variant="subtitle2">
                  Product # {product._id}
                </Typography>
              </Box>

              <Box sx={{ width: "70%" }}>
                <Typography
                  variant="h2"
                  align="center"
                  m={3}
                >{`${product.price}Kr`}</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Button
                      sx={{
                        padding: "1.2vmax",
                        width: "4vmax",
                        fontSize: "32px",
                      }}
                      variant="Contained"
                      onClick={decreaseQuantity}
                    >
                      -
                    </Button>
                    <TextField readOnly type="number" value={quantity} />
                    <Button
                      sx={{
                        padding: "1.2vmax",
                        width: "4vmax",
                        fontSize: "32px",
                      }}
                      onClick={increaseQuantity}
                    >
                      +
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </Box>

                <Typography variant="subtitle2" align="center">
                  Status:
                  <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </b>
                </Typography>
              </Box>

              <Box
                sx={{
                  color: "rgba(0, 0, 0, 0.897)",
                  font: "500 1.2vmax sans-serif",
                }}
              >
                Description :{" "}
                <Typography variant="caption">{product.description}</Typography>
              </Box>
            </Box>
          </Box>
        </Fragment>
      )}
      ;
    </Fragment>
  );
};

export default ProductDetails;
