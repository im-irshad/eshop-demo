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
              backgroundImage: `url("https://images.unsplash.com/photo-1565211604822-2641d0b081a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`,
              backgroundColor: "lightgray",
              opacity: [0.9, 0.8, 0.5],
            }}
          >
            <Typography variant="h5">Welcome to E-shop</Typography>
            <div>
              <Button
                variant="contained"
                size="medium"
                href="#featureProducts"
                sx={{ opacity: 1 }}
              >
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
              id="featureProducts"
            >
              {products &&
                products.map((produc) => {
                  return (
                    <div key={produc._id}>
                      <Product product={produc} />
                    </div>
                  );
                })}
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}

export default Home;
