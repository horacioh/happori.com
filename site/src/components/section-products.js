import React from "react"
import slugify from "slugify"
import { Section } from "./page-layout"
import { Heading2 } from "./headings"
import { Link, graphql, useStaticQuery } from "gatsby"

export function ProductsSection(props) {
  const { products } = useStaticQuery(graphql`
    query {
      products {
        prod1: getProduct(id: "19a305f5-2645-4c4d-a058-1875604a8a1a") {
          name
        }
        prod2: getProduct(id: "6344964c-bae1-4bc6-b56e-ed9cb248abaf") {
          name
        }
      }
    }
  `)

  console.log({ products })

  if (products) {
    return (
      <Section className="border-b-2">
        <Heading2 className="text-primary">Nuestros Productos</Heading2>
        <div className="py-12 bg-red-100">
          <ul className="flex flex-col md:flex-row -mx-4">
            {Object.values(products).map((product) => {
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
