import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "use-shopping-cart";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC);
const stripePromise = loadStripe("pk_live_bXcFi9K28vbiW6n6IA94wbee006XduDtbm");

export function AppProviders(props) {
  return (
    <CartProvider
      stripe={stripePromise}
      mode="client-only"
      successUrl="https://happori.com"
      cancelUrl="https://happori.com"
      currency="EUR"
      allowedCountries={["ES"]}
      billingAddressCollection={true}
      {...props}
    >
      {props.children}
    </CartProvider>
  );
}
