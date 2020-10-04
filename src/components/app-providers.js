import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"
import { ToastProvider } from "react-toast-notifications"

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC);
// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(
  "pk_live_51Gdl0TLx7jivaev6CAAXupa3dmxyhALItnREcOoJSHrMPjHmACFJIsEMSm7weXXvlPwN6waCJ2dFEenr56jduPdf00G5FSV41M"
)

export function AppProviders(props) {
  return (
    <CartProvider
      stripe={stripePromise}
      // mode="checkout-session"
      mode="client-only"
      successUrl="http://localhost:8000/success"
      // The URL to which Stripe should send customers when payment is canceled.
      cancelUrl="http://localhost:8000"
      currency="EUR"
      allowedCountries={["ES"]}
      billingAddressCollection={true}
      {...props}
    >
      <ToastProvider autoDismiss={true}>{props.children}</ToastProvider>
    </CartProvider>
  )
}
