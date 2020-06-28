const axios = require("axios").default

exports.handler = (event, _, callback) => {
  if (event.arguments.input.email) {
    axios({
      url: "https://api.formik.com/submit/happoricom/contact-form",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: event.arguments.input,
    })
      .then(function(response) {
        console.log(response)
        callback(null, response.data)
      })
      .catch((err) => callback(err))
  } else {
    callback({
      error: "email should not be empty",
    })
  }
}
