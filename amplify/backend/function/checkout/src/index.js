const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const validateCartItems = require("use-shopping-cart/src/serverUtil")
  .validateCartItems
/*
 * Product data can be loaded from anywhere. In this case, we’re loading it from
 * a local JSON file, but this could also come from an async call to your
 * inventory management service, a database query, or some other API call.
 *
 * The important thing is that the product info is loaded from somewhere trusted
 * so you know the pricing information is accurate.
 */

const inventory = require("./data/products.json")

exports.handler = async function(event, _, callback) {
  try {
    const productJSON = event.arguments.input.reduce((acc, curr) => {
      acc[curr.sku] = curr

      return acc
    }, {})

    const line_items = validateCartItems(inventory, productJSON)
    const session = await stripe.checkout.sessions.create({
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
      success_url: `${process.env.URL}/gracias/`,
      // success_url: `https://happori.com/success/`,
      cancel_url: process.env.URL,
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

    callback(null, { sessionId: session.id })
  } catch (error) {
    callback(error)
    console.log("entro en el catch de la funcion!!", error)
    console.error(error)
  }
}
