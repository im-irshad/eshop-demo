import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

export default function product({ product }) {
  return (
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
        <Button size="small">add to cart</Button>
      </CardActions>
    </Card>
  );
}
