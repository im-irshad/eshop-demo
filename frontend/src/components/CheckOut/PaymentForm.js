import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "./Checkout";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import EventIcon from "@mui/icons-material/Event";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import { Button, Container, Paper } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
export default function PaymentForm() {
  const { shippingInfo, cartItems } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.UserReducer);
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const [stripeApiKey, setStripeApiKey] = React.useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  React.useEffect(() => {
    getStripeApiKey();
  }, []);

  const navigate = useNavigate();
  const payBtn = React.useRef(null);

  const paymentData = {
    amount: Math.round(orderInfo * 100),
  };

  const submitHandler = async (e, elements, stripe) => {
    e.preventDefault();

    // payBtn.current.disabled = true;

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/v1/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        alert.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          // order.paymentInfo = {
          // id: result.paymentIntent.id,
          //status: result.paymentIntent.status,
          // };

          // dispatch(createOrder(order));

          navigate("/success");
        } else {
          console.log("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      alert.error(error.response.data.message);
    }
  };
  const stripePromise = loadStripe(
    "pk_test_51KeFVNGhQbUTO99Bzhw6cC6O8MTwqU2rXL7Tw8zW1aNcfeNtovZyvuOAWG8hls01qcQ6bOuPnYEnoLzkBWOrnddd00EplXLqu2"
  );
  console.log(stripePromise);
  return (
    <React.Fragment>
      <Checkout activeStep={2} />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
            Payment method
          </Typography>
          <Elements stripe={stripePromise}>
            <ElementsConsumer>
              {({ elements, stripe }) => (
                <form onSubmit={(e) => submitHandler(e, elements, stripe)}>
                  <CardElement />
                  <br /> <br />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={!stripe}
                      color="primary"
                    >
                      Pay {orderInfo}
                    </Button>
                  </div>
                </form>
              )}
            </ElementsConsumer>
          </Elements>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
