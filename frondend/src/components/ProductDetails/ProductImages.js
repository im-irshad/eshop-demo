import Carousel from "react-material-ui-carousel";
import React from "react";
import { Box } from "@mui/system";

function ProductImages({ product }) {
  return (
    <Box component="div" sx={{ width: "100%", height: "100%" }}>
      <Carousel>
        {product.images &&
          product.images.map((item, i) => (
            <img key={i} src={item.url} alt={`${i} Slide`} />
          ))}
      </Carousel>
    </Box>
  );
}

export default ProductImages;
