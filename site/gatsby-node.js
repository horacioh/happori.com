const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const slugify = require("slugify")

const products = require("./data/products.json")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      products {
        listProducts {
          items {
            id
            name
            description
            sku
            currency
            price
          }
        }
      }
    }
  `)

  result.data.products.listProducts.items.forEach((product) => {
    const slug = slugify(product.name, { lower: true })
    createPage({
      path: `productos/${slug}`,
      component: path.resolve(`./src/templates/single-product.js`),
      context: {
        ...product,
        slug,
      },
    })
  })
}