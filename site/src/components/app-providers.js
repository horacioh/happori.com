import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"
import { ToastProvider } from "react-toast-notifications"

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC);
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

export function AppProviders(props) {
  return (
    <CartProvider
      stripe={stripePromise}
      mode="checkout-session"
      currency="EUR"
      allowedCountries={["ES"]}
      billingAddressCollection={true}
      {...props}
    >
      <ToastProvider autoDismiss={true}>{props.children}</ToastProvider>
    </CartProvider>
  )
}
