import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import { Rating } from "@mui/material";
import Button from "@mui/material/Button";

function PdData({ product }) {
  return (
    <div>
      <Box
        component="div"
        sx={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-arround",
          border: "1px solid black",
          margin: "5%",
          padding: "5%",
        }}
      >
        <Box component="div">
          <Typography variant="h5">{product.name}</Typography>
          <Typography variant="subtitle2">product Nr. {product._id}</Typography>
        </Box>
        <Box component="div">
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </Box>
        <Box component="div">
          <Typography variant="h2">{product.price} Kr</Typography>
        </Box>
        <Box component="div">
          <Button variant="outlined">Add to Cart</Button>
        </Box>
        <Typography>Status</Typography>
        <Typography>in Stock</Typography>
      </Box>
    </div>
  );
}

export default PdData;
