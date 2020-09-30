import React from "react"
import slugify from "slugify"
import { Storage } from "aws-amplify"
import { useQuery } from "react-query"
import { Section } from "./page-layout"
import { Heading2 } from "./headings"
import { Link, graphql, useStaticQuery } from "gatsby"

export function ProductsSection(props) {
  const { products } = useStaticQuery(graphql`
    query {
      products {
        prod1: getProduct(id: "175ce1df-c789-4bad-81a2-897dbd34d020") {
          id
          name
          image
        }
        prod2: getProduct(id: "b99d7a80-6b25-4b3d-9216-cb078069cb08") {
          id
          name
          image
        }
      }
    }
  `)

  const { data, isSuccess } = useQuery("HomeProducts", async () => {
    const prods = await Promise.all(
      Object.values(products).map(async (prod) => {
        let imageUrl = await Storage.get(prod.image)
        prod.imageUrl = imageUrl
        return prod
      })
    )

    return prods
  })

  if (!isSuccess) {
    return <p>loading...</p>
  }

  if (data) {
    return (
      <Section className="border-b-2">
        <Heading2 className="text-primary">Nuestros Productos</Heading2>
        <div className="py-12">
          <ul className="flex flex-col md:flex-row -mx-4">
            {data.map((product) => {
              const url = `/productos/${slugify(product.name, {
                lower: true,
              })}`
              return (
                <li
                  key={product.id}
                  className="mx-4 rounded-lg flex-1 overflow-hidden hover:shadow-lg transition duration-150"
                  style={{ height: 400 }}
                >
                  <Link to={url} className="relative block w-full h-full">
                    <img
                      className="block w-full object-cover  absolute top-0 left-0"
                      src={product.imageUrl}
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
