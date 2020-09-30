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

const inventory = require("../data/products.json")

exports.handler = async ({ body }) => {
  try {
    const productJSON = JSON.parse(body)

    const line_items = validateCartItems(inventory, productJSON)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["ES"],
      },
      success_url: `${process.env.URL}/success/`,
      // success_url: `https://happori.com/success/`,
      cancel_url: process.env.URL,
      line_items,
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId: session.id }),
    }
  } catch (error) {
    console.log("entro en el catch de la funcion!!", error)
    console.error(error)
  }
}
