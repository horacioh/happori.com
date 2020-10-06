/*
 * This function creates a Stripe Checkout session and returns the session ID
 * for use with Stripe.js (specifically the redirectToCheckout method).
 *
 * @see https://stripe.com/docs/payments/checkout/one-time
 *
 * NOTE: You need to make the following environment variable available to this function:
 * STRIPE_SECRET_KEY (can be found at https://dashboard.stripe.com/apikeys)
 */

const stripe = require('stripe')(
  process.env.STRIPE_SECRET_KEY,
  {
    apiVersion: '2020-03-02',
    maxNetworkRetries: 2,
  }
);

const products = {
  dev: [
    {
      name: 'Happori',
      slug: 'happori',
      description:
        'Calcetin con el logo de Happori',
      sku: 'price_1HZ0bYLx7jivaev6a1EzGS8D',
      priceId: 'price_1HZ0bYLx7jivaev6a1EzGS8D',
      price: 1450,
      currency: 'EUR',
    },
    {
      name: 'Pachamama',
      slug: 'pachamama',
      description:
        'La madre naturaleza es figura de deidad en muchas culturas. En la mitología Inca la simbolizan como la diosa de la fertilidad, la que siembra y cosecha bajo el nombre de la Pachamama. Una deidad de lo cotidiano que provee y protege facilitando la vida. Desde Argentina hasta Ecuador, muchos son los pueblos que veneran a esta Diosa. No es para menos, sin montañas, sin agua manando de sus manantiales, sin frutos creciendo de sus tierras, la humanidad no existiría. Estos calcetines 90% algodón orgánico no contaminante son todo un homenaje a Incas, Quechuas, Mapuches… a todos los pueblos indígenas de América del Sur que han agradecido a la madre naturaleza todo lo que nos ha dado.',
      sku: 'price_1HZ0anLx7jivaev6xuz73cnQ',
      priceId: 'price_1HZ0anLx7jivaev6xuz73cnQ',
      price: 1450,

      currency: 'EUR',
    },
    {
      name: 'Tierra',
      slug: 'tierra',
      sku: 'price_1HZ0b7Lx7jivaev6Ygz5nou7',
      description:
        'La tierra visible ocupa solamente el 29% de nuestro planeta y, sin embargo, ha sido en este pequeño territorio donde la humanidad ha prosperado. Le debemos mucho a este elemento pero, aún así, lejos de cuidar y agradecer, la explotamos y la maltratamos. Es hora de cambiar nuestros hábitos y respetarla como se merece. Este par de calcetines no solamente son un homenaje a la tierra sino también un alegato al respeto por ella al estar fabricados en un 90% de algodón orgánico no contaminante.',
      priceId: 'price_1HZ0b7Lx7jivaev6Ygz5nou7',
      price: 1450,
      currency: 'EUR',
    },
  ],
  prod: [
    {
      name: 'Happori',
      slug: 'happori',
      sku: 'price_1GzTtcLx7jivaev6qDKuu98f',
      priceId: 'price_1GzTtcLx7jivaev6qDKuu98f',
      price: 1450,
      currency: 'EUR',
    },
    {
      name: 'Pachamama',
      slug: 'pachamama',
      sku: 'price_1GzTnSLx7jivaev6IDuDJidK',
      price: 1450,
      currency: 'EUR',
    },
    {
      name: 'Tierra',
      slug: 'tierra',
      sku: 'price_1GzTnpLx7jivaev6PIyLOFra',
      priceId: 'price_1GzTnpLx7jivaev6PIyLOFra',
      price: 1450,
      currency: 'EUR',
    },
  ],
};

function buildCheckoutLineItems(
  inventorySrc,
  cartItems
) {
  const lineItems = [];

  for (const sku in cartItems) {
    const cartItem = cartItems[sku];
    const inventoryItem = inventorySrc.find(
      (currentProduct) =>
        currentProduct.sku === sku
    );
    if (!inventoryItem)
      throw new Error('Product not found!');
    const product_data = {
      name: inventoryItem.name,
    };
    if (inventoryItem.description)
      product_data.description =
        inventoryItem.description;
    if (inventoryItem.image)
      product_data.images = [
        inventoryItem.image,
      ];
    const item = {
      price_data: {
        currency: inventoryItem.currency,
        unit_amount: inventoryItem.price,
        product_data,
      },
      quantity: cartItem.quantity,
    };
    lineItems.push(item);
  }

  return lineItems;
}

exports.handler = async (event) => {
  const cartItems = JSON.parse(
    event.arguments.input
  );
  // console.log("ENTRO EN FUNCTION!", cartItems)
  try {
    const lineItems = buildCheckoutLineItems(
      products[process.env.GATSBY_ENV],
      cartItems
    );
    const session = await stripe.checkout.sessions.create(
      {
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_address_collection: {
          allowed_countries: ['ES'],
        },
        success_url: `${process.env.URL}/success`,
        cancel_url: `${process.env.URL}`,
        line_items: [
          ...lineItems,
          {
            price_data: {
              currency: 'EUR',
              product_data: {
                name: 'Envio',
                description: 'Gastos de Envio',
              },
              unit_amount: 450,
            },
            quantity: 1,
          },
        ],
      }
    );

    // return JSON.stringify({ sessionId: session.id }),

    return JSON.stringify({
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: { sessionId: session.id },
    });
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: `[Error]: ${error.message}`,
    };
  }
};
