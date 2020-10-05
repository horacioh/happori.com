import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { ToastProvider } from 'react-toast-notifications';

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_PUBLIC);
const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)


export function AppProviders(props) {
  return (
    <CartProvider
      stripe={stripePromise}
      // mode="checkout-session"
      mode="client-only"
      successUrl={`${process.env.URL}/gracias`}
      // The URL to which Stripe should send customers when payment is canceled.
      cancelUrl={`${process.env.URL}/houston`}
      currency="EUR"
      allowedCountries={['ES']}
      billingAddressCollection={true}
      {...props}
    >
      <ToastProvider autoDismiss={true}>
        {props.children}
      </ToastProvider>
    </CartProvider>
  );
}
