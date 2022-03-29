import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { IconButton, Rating } from "@mui/material";
import DetailsIcon from "@mui/icons-material/Details";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { typography } from "@mui/system";

export default function product({ product }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" }}>
      <CardMedia
        component="img"
        height="440"
        image={product.images[0].url}
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
        <Typography variant="subtitle2">
          {" "}
          Price: {product.price} Kr.{" "}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small" href={`/product/${product._id}`}>
          <DetailsIcon />
          <Typography>View Detail</Typography>
        </IconButton>
        <IconButton size="small">
          <AddShoppingCartIcon />
          <Typography>Add to Cart</Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
