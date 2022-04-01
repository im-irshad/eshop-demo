import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PaymentForm from "./PaymentForm";

function LinkToPay() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    getStripeApiKey();
  }, []);

  return (
    <div>
      <Elements stripe={loadStripe(stripeApiKey)}>
        <PaymentForm />
      </Elements>
    </div>
  );
}

export default LinkToPay;
