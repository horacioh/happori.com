import React from "react"
import slugify from "slugify"
import { Section } from "./page-layout"
import { Heading2 } from "./headings"
import { Link, graphql, useStaticQuery } from "gatsby"

export function ProductsSection(props) {
  const { products } = useStaticQuery(graphql`
    query {
      products {
        getCollection(id: "1342fdea-eb9d-42b7-a3fd-d72a27d42499") {
          products {
            items {
              product {
                name
              }
            }
          }
        }
      }
    }
  `)

  console.log({ products })

  if (
    products &&
    products.getCollection &&
    products.getCollection.products &&
    products.getCollection.products.items
  ) {
    return (
      <Section className="border-b-2">
        <Heading2 className="text-primary">Nuestros Productos</Heading2>
        <div className="py-12 bg-red-100">
          <ul className="flex flex-col md:flex-row -mx-4">
            {products.getCollection.products.items.map(({ product }) => {
              const url = `/productos/${slugify(product.name, {
                lower: true,
              })}`
              return (
                <li className="mx-4 p-4 rounded bg-red-200 flex-1">
                  <Link to={url}>
                    <p>{product.name}</p>
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
