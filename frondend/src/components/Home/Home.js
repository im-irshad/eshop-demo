import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Product from "../Product/Product";
import { getProduct } from "../../redux/actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";

function Home() {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "100hmin",
              height: "80vmin",
              backgroundColor: "lightgray",
              "&:hover": {
                backgroundColor: "darkgray",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography variant="h5">Welcome to E-shop</Typography>
            <div>
              <Button variant="outlined" size="medium">
                See New Colletion
              </Button>
            </div>
          </Box>
          <Box>
            <Typography align="center" variant="h5">
              Featured Products
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {products &&
                products.map((produc) => {
                  return <Product product={produc} />;
                })}
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}

export default Home;
