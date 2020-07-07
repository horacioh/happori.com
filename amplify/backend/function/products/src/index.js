const stripe = require("stripe")("sk_test_O3LMojDmepqQ5shzHGgzBmrR00cL00xqkE")

exports.handler = function(event, _, callback) {
  stripe.products.list({ limit: 3 }, function(err, products) {
    if (err) {
      callback(null, {
        statusCode: 400,
        body: JSON.stringify(err),
      })
    }

    // asynchronously called
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(products),
    })
  })
}
