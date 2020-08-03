import React from "react"
import { useQuery } from "react-query"
import { API } from "aws-amplify"
import { getProduct } from "../graphql/queries"

export default function EditProduct({ id }) {
  const { data, isLoading, isError, error } = useQuery(
    ["product", id],
    async (key, id) => {
      const { data } = await API.graphql({
        query: getProduct,
        variables: { id },
      })

      return data
    }
  )

  if (isLoading) {
    return <p>loading...</p>
  }

  if (isError) {
    console.log("error, ", error)
    return <p>error :(</p>
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>nombre</label>
        <imput />
      </div>
    </form>
  )
}
