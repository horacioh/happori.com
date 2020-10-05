/*
 * This function creates a Stripe Checkout session and returns the session ID
 * for use with Stripe.js (specifically the redirectToCheckout method).
 *
 * @see https://stripe.com/docs/payments/checkout/one-time
 *
 * NOTE: You need to make the following environment variable available to this function:
 * STRIPE_SECRET_KEY (can be found at https://dashboard.stripe.com/apikeys)
 */

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-03-02",
  maxNetworkRetries: 2,
})

const products = [
  {
    name: "Happori",
    slug: "happori",
    sku: "price_1GzTtcLx7jivaev6qDKuu98f",
    priceId: "price_1GzTtcLx7jivaev6qDKuu98f",
    price: 1450,
    currency: "EUR",
  },
  {
    name: "Pachamama",
    slug: "pachamama",
    sku: "price_1GzTnSLx7jivaev6IDuDJidK",
    price: 1450,
    currency: "EUR",
  },
  {
    name: "Tierra",
    slug: "tierra",
    sku: "price_1GzTnpLx7jivaev6PIyLOFra",
    priceId: "price_1GzTnpLx7jivaev6PIyLOFra",
    price: 1450,
    currency: "EUR",
  },
]

function buildCheckoutLineItems(inventorySrc, cartItems) {
  const lineItems = []

  for (const sku in cartItems) {
    const cartItem = cartItems[sku]
    const inventoryItem = inventorySrc.find(
      (currentProduct) => currentProduct.sku === sku
    )
    if (!inventoryItem) throw new Error("Product not found!")
    const product_data = {
      name: inventoryItem.name,
    }
    if (inventoryItem.description)
      product_data.description = inventoryItem.description
    if (inventoryItem.image) product_data.images = [inventoryItem.image]
    const item = {
      price_data: {
        currency: inventoryItem.currency,
        unit_amount: inventoryItem.price,
        product_data,
      },
      quantity: cartItem.quantity,
    }
    lineItems.push(item)
  }

  return lineItems
}

exports.handler = async (event) => {
  const cartItems = JSON.parse(event.arguments.input)
  console.log("ENTRO EN FUNCTION!", cartItems)
  try {
    const lineItems = buildCheckoutLineItems(products, cartItems)
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["ES"],
      },
      success_url: "http://localhost:8000/success",
      cancel_url: "http://localhost:8000",
      line_items: [
        ...lineItems,
        {
          price_data: {
            currency: "EUR",
            product_data: {
              name: "Envio",
              description: "Gastos de Envio",
            },
            unit_amount: 450,
          },
          quantity: 1,
        },
      ],
    })

    // return JSON.stringify({ sessionId: session.id }),

    return JSON.stringify({
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: { sessionId: session.id },
    })
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: `[Error]: ${error.message}`,
    }
  }
}
