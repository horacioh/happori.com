import React from "react"
import { useQuery } from "react-query"
import { API, Storage } from "aws-amplify"
import { listProducts } from "../graphql/queries"
import { Link } from "gatsby"

export default function ListProducts() {
  const { data, isLoading, isError, error } = useQuery("products", async () => {
    const { data } = await API.graphql({ query: listProducts })
    const products = await Promise.all(
      data.listProducts.items.map(async (prod) => {
        const image = await Storage.get(prod.image)
        prod.s3Image = image
        return prod
      })
    )
    return products
  })

  if (isError) {
    return (
      <>
        <p>Error!</p>
        <p>{JSON.stringify(error, null, 2)}</p>
      </>
    )
  }

  if (isLoading) {
    return <p>loading...</p>
  }

  return (
    <div>
      {data.map((item) => (
        <div className="flex items-center">
          <img
            className="flex-none"
            src={item.s3Image}
            alt={item.image}
            style={{ width: 80, height: 80 }}
          />
          <div className="flex-1 px-4">
            <p>{item.name}</p>
          </div>
          <div className="flex-none px-4">
            <Link to={`/app/edit/${item.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  )
}
