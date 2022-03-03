import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Product from "../Product/Product";

const product = {
  name: "T Shirt",
  price: "300£",
  _id: "abcdef",
  images: [
    {
      url: "https://www.intimissimi.com/dw/image/v2/BHHR_PRD/on/demandware.static/-/Sites-INT_EC_COM/default/dwc1365929/images/CMU12G860I-FI.jpg?sw=800&sfrm=jpeg",
    },
  ],
};

function Home() {
  return (
    <>
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
        <Product product={product} />
      </Box>
    </>
  );
}

export default Home;
