const path = require("path")
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const slugify = require("slugify")

const products = require("./data/products.json")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      pachamama: file(relativePath: { eq: "pachamama.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      tierra: file(relativePath: { eq: "tierra.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      happori: file(relativePath: { eq: "happori.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)

  products.forEach(async (product) => {
    const slug = slugify(product.name, { lower: true })
    const imageData = data[slug].childImageSharp.fluid
    createPage({
      path: `productos/${slug}`,
      component: path.resolve(`./src/templates/single-product.js`),
      context: {
        ...product,
        imageData,
        slug,
      },
    })
  })
}

// exports.onCreatePage = async ({ page, actions }) => {
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   const { createPage } = actions
//   if (page.path.match(/^\/app/)) {
//     page.matchPath = "/app/*"

//     // Update the page.
//     createPage(page)
//   }
// }
