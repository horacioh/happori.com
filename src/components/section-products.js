import React from "react"
import slugify from "slugify"
import Img from "gatsby-image"
import { Section } from "./page-layout"
import { Heading2 } from "./headings"
import { Link, graphql, useStaticQuery } from "gatsby"
import products from "../../data/home-products.json"

export function ProductsSection(props) {
  const data = useStaticQuery(graphql`
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
    }
  `)

  if (data) {
    return (
      <Section className="border-b-2">
        <Heading2 className="text-primary">Nuestros Productos</Heading2>
        <div className="py-12">
          <ul className="flex flex-col md:flex-row -mx-4">
            {products[process.env.GATSBY_ENV].map((product) => {
              const url = `/productos/${product.slug}`
              return (
                <li
                  key={product.slug}
                  className="mx-4 rounded-lg flex-1 overflow-hidden hover:shadow-lg transition duration-150"
                  style={{ height: 400 }}
                >
                  <Link to={url} className="relative block w-full h-full">
                    <Img
                      className="w-full"
                      fluid={data[product.slug].childImageSharp.fluid}
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-bg-transparent px-4 pt-8 pb-4">
                      <p className="text-white text-2xl font-bold">
                        {product.name}
                      </p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Section>
    )
  } else {
    return (
      <Section className="border-b-2">
        <Heading2 className="text-primary">Nuestros Productos</Heading2>
        <p>...</p>
      </Section>
    )
  }
}
