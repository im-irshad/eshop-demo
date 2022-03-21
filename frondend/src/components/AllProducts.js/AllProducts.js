import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import { Container, Grid, Rating } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/productAction";
import Loader from "../Loader/Loader";
import { useEffect } from "react";

export default function AllProducts() {
  const dispatch = useDispatch();
  const { loading, error, products, productsCount, itemsPerPage } = useSelector(
    (state) => state.productReducer
  );

  const { keyword } = useParams();
  console.log(productsCount, itemsPerPage);
  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
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
        </div>
      )}
    </>
  );
}
