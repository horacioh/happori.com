import { API, Storage } from "aws-amplify"
import { useMutation, queryCache, useQuery } from "react-query"
import {
  deleteProduct,
  createProduct as createProductMutation,
  updateProduct as updateProductMutation,
} from "../../site/src/graphql/mutations"

export function useProduct() {
  const mutationOptions = {
    onSuccess: () => {
      console.log("Success!!")
      queryCache.invalidateQueries("products")
      alert("Completado!!")
    },
  }
  const [createProduct] = useMutation(async ({ input, file }) => {
    const ext = file.name.split(".").reverse()[0]
    const image = `product_${input.name}_${input.priceId}.${ext}`
    const product = {
      ...input,
      image,
    }
    await Storage.put(image, file, {
      level: "public",
      contentType: file.type,
    })
    const { data } = await API.graphql({
      query: createProductMutation,
      variables: {
        input: product,
      },
    })
  }, mutationOptions)

  const [removeProduct] = useMutation(async (id) => {
    await API.graphql({
      query: deleteProduct,
      variables: {
        input: {
          id,
        },
      },
    })
  }, mutationOptions)

  const [updateProduct] = useMutation(async ({ input, file }) => {
    let product = input
    if (file) {
      const ext = file.name.split(".").reverse()[0]
      const image = `product_${input.name}_${input.priceId}.${ext}`
      product.image = image
      await Storage.put(image, file, {
        level: "public",
        contentType: file.type,
      })
    }

    const { data } = await API.graphql({
      query: updateProductMutation,
      variables: {
        input: product,
      },
    })
  }, mutationOptions)

  return {
    createProduct,
    removeProduct,
    updateProduct,
  }
}
