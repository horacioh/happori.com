const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

exports.handler = async ({ headers, body }) => {
  try {
    const event = stripe.webhooks.constructEvent(
      body,
      headers["stripe-signature"],
      endpointSecret
    );

    if (event.type !== "checkout.session.completed") {
      return;
    }

    if (event.type === "checkout.session.completed") {
      const order = event.data.object;
      console.log("order => ", order);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ received: true }),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: `webhook error: ${err.message}`,
    };
  }
};
