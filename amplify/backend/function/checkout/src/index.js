const stripe = require("stripe")(
  process.env.STRIPE_SECRET_KEY ||
    "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"
)

const URL = process.env.URL || "http://localhost:8000"
/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */

const inventory = require("./data/products.json")

exports.handler = async function(event) {
  try {
    const productJSON = event.arguments.input.reduce((acc, curr) => {
      acc[curr.sku] = {
        ...curr,
        price: curr.sku,
      }

      return acc
    }, {})

    const line_items = buildCheckoutLineItems(inventory, productJSON)
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["ES"],
      },
      /*
       * This env var is set by Netlify and inserts the live site URL. If you want
       * to use a different URL, you can hard-code it here or check out the
       * other environment variables Netlify exposes:
       * https://docs.netlify.com/configure-builds/environment-variables/
       */
      success_url: `${URL}/gracias/`,
      // success_url: `https://happori.com/success/`,
      cancel_url: `${URL}`,
      // cancel_url: `https://happori.com/calcetines-solidarios/`,
      line_items: [
        ...line_items,
        {
          price_data: {
            currency: "EUR",
            product_data: {
              name: "Costes de Envío",
              description: "Precio por envio a cualquier sitio de España",
            },
            unit_amount: 500,
          },
          quantity: 1,
        },
      ],
    })

    return {
      statusCode: 200,
      body: { sessionId: session.id },
    }
  } catch (error) {
    console.log("entro en el catch de la funcion!!", error)
    return {
      statusCode: 400,
      body: `[Error]: ${error.message}`,
    }
  }
}

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
