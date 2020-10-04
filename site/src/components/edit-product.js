import React from "react"
import { useQuery } from "react-query"
import { getProduct as getProductQuery } from "../graphql/queries"
import { API, graphqlOperation, Storage } from "aws-amplify"
import { useProduct } from "../api/product"
import { useForm } from "react-hook-form"

export default function CreateProduct(props) {
  console.log("CreateProduct -> props", props)

  const { register, handleSubmit, errors, formState, setValue } = useForm({
    mode: "onChange",
  })

  const { updateProduct } = useProduct()
  const { data, isSuccess, isLoading } = useQuery(
    ["product", props?.id],
    async () => {
      const { data } = await API.graphql({
        query: getProductQuery,
        variables: { id: props.id },
      })
      return data.getProduct
    }
  )

  React.useEffect(() => {
    if (isSuccess) {
      console.log(data)
      setValue("name", data.name)
      setValue("description", data.description)
      setValue("price", data.price)
      setValue("priceId", data.priceId)
      setValue("currentInventory", data.currentInventory)
    }
  }, [data, isSuccess])
  const [file, setFile] = React.useState()

  async function onSubmit(input) {
    await updateProduct({ input: { ...input, id: props.id }, file })
  }

  function handleImageChange(e) {
    const [file] = e.target.files
    // console.log("handleImageChange -> file", file)
    // const url = URL.createObjectURL(file)
    // console.log("handleOnChange -> url", url)
    setFile(file)
  }

  return (
    <div className="mx-auto max-w-3xl w-full px-4">
      <h1 className="text-4xl font-extrabold py-4">Nuevo Producto</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm ml-1" htmlFor="name">
            Nombre
          </label>
          <input
            className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
            type="text"
            name="name"
            id="name"
            ref={register({ required: true })}
          />
        </div>
        <div className="pt-4">
          <label className="block text-sm ml-1" htmlFor="description">
            Descripcion
          </label>
          <textarea
            className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
            name="description"
            id="description"
            ref={register({ required: true })}
          ></textarea>
        </div>
        <div className="pt-4">
          <label className="block text-sm ml-1" htmlFor="priceId">
            Price ID (el de stripe)
          </label>
          <input
            className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
            type="text"
            name="priceId"
            id="priceId"
            ref={register({ required: true })}
          />
        </div>
        <div className="pt-4">
          <label className="block text-sm ml-1" htmlFor="price">
            Precio
          </label>
          <input
            className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
            type="number"
            name="price"
            id="price"
            ref={register({ required: true })}
          />
        </div>
        <div className="pt-4">
          <label className="block text-sm ml-1" htmlFor="currentInventory">
            Inventario
          </label>
          <input
            className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
            type="number"
            name="currentInventory"
            id="currentInventory"
            ref={register({ required: true })}
          />
        </div>
        <div className="pt-4">
          <label className="block text-sm ml-1" htmlFor="image">
            Imagen
          </label>
          <input
            type="file"
            className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
            name="image"
            id="image"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
        </div>
        <div className="pt-4">
          <button
            className={`px-4 py-2 bg-green-500 hover:bg-green-800 text-white rounded`}
            type="submit"
          >
            Crear
          </button>
        </div>
        <div>{JSON.stringify(formState, null, 4)}</div>
      </form>
    </div>
  )
}
