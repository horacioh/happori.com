const path = require("path");

require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
  title: "happori.com"
  },
  plugins: []
}
