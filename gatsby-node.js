const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const slugify = require("slugify")

// const products = require("./data/products.json")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      products {
        listProducts {
          items {
            id
            image
            name
            price
            priceId
            description
          }
        }
      }
    }
  `)
  console.log("exports.createPages -> result", result)

  result.data.products.listProducts.items.forEach(async (product) => {
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

exports.onCreatePage = async ({ page, actions }) => {
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  const { createPage } = actions
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}
