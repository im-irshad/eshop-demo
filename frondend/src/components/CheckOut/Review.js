import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Button, Container, Paper } from "@mui/material";
import Checkout from "./Checkout";
import { useNavigate } from "react-router-dom";

export default function Review() {
  const navigate = useNavigate();
  const { shippingInfo, cartItems } = useSelector((state) => state.cartReducer);
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const proceedToPayment = () => {
    const data = subtotal;
    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    navigate("/process/payment");
  };
  return (
    <React.Fragment>
      <Checkout activeStep={1} />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            {cartItems.map((product) => (
              <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={product.name} secondary={product.desc} />
                <Typography variant="body2">{product.price}</Typography>
              </ListItem>
            ))}

            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Total" />
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {`${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}
              </Typography>
            </ListItem>
          </List>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Shipping
              </Typography>
              <Typography gutterBottom>John Smith</Typography>
              <Typography gutterBottom>
                {Object.values(shippingInfo).join(",")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                type="submit"
                onClick={proceedToPayment}
              >
                Go to Payment
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
