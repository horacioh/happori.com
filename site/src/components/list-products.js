import React from "react"
import { queryCache, useMutation, useQuery } from "react-query"
import { API, Storage } from "aws-amplify"
import { listProducts } from "../../site/src/graphql/queries"
import { deleteProduct as deleteMutation } from "../../site/src/graphql/mutations"
import { Link } from "gatsby"
import { useProduct } from "../api/product"

export default function ListProducts() {
  const { data, isLoading, isError, error } = useQuery(
    "products",
    async () => {
      const { data } = await API.graphql({
        query: listProducts,
      })
      const products = await Promise.all(
        data.listProducts.items.map(async (prod) => {
          const image = await Storage.get(prod.image)
          prod.s3Image = image
          return prod
        })
      )
      return products
    },
    {
      refetchOnWindowFocus: false,
    }
  )

  if (isError) {
    return (
      <>
        <p>Error!</p>
      </>
    )
  }

  if (isLoading) {
    return <p>loading...</p>
  }

  return <ProductList products={data} />
}

function ProductList({ products = [] }) {
  const { removeProduct } = useProduct()
  async function deleteProduct(prodId) {
    const confirm = window.confirm("SEGURO??")

    if (confirm) {
      removeProduct(prodId)
    }
  }
  return products.length === 0 ? (
    <div className="mx-auto max-w-3xl w-full px-4 text-center p-4">
      <p className="text-gray-600 text-xl font-bold text-center">
        No hay productos aun :(
      </p>
    </div>
  ) : (
    <div className="mx-auto max-w-3xl w-full px-4">
      <h1 className="text-4xl font-extrabold py-4">Productos</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id} className="flex p-2">
            <img
              src={prod.s3Image}
              className="w-8 h-8 inline-block mr-3 rounded-sm overflow-hidden"
            />
            <p className="px-2">{prod.id}</p>
            <p className="px-2">{prod.name}</p>
            <Link
              className="px-2 py-1 rounded-sm bg-gray-200 hover:bg-gray-400 mx-2"
              to={`/app/product/${prod.id}`}
            >
              edit
            </Link>
            <button
              className="px-2 py-1 rounded-sm bg-gray-200 hover:bg-gray-400 mx-2"
              onClick={() => deleteProduct(prod.id)}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
