const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

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
      cancel_url: `${URL}`,
      line_items: [
        ...line_items,
        // {
        //   name: "Costes de Envío",
        //   description: "Precio por envio a cualquier sitio de España",
        //   currency: "EUR",
        //   amount: 590,
        //   quantity: 1,
        // },
      ],
    })

    console.log("session complete ==> \n", session)

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

    const item = {
      // name: inventoryItem.name,
      // currency: inventoryItem.currency,
      // amount: inventoryItem.price,
      quantity: cartItem.quantity,
      price: inventoryItem.sku,
    }

    // if (inventoryItem.description) item.description = inventoryItem.description
    // if (inventoryItem.image) item.images = [inventoryItem.image]
    lineItems.push(item)
  }

  return lineItems
}
