import React from "react"
import { useForm } from "react-hook-form"
// import { submitContact } from "../graphql/mutations"
// import { API, graphqlOperation } from "aws-amplify"

export function ContactForm() {
  const [success, setSuccess] = React.useState(false)
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  })

  async function onSubmit(data) {
    await fetch("https://api.formik.com/submit/happoricom/contact-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setSuccess(true)
    // try {
    //   await API.graphql(
    //     graphqlOperation(submitContact, {
    //       input: data,
    //     })
    //   )
    //   setSuccess(true)
    // } catch (err) {
    //   throw new Error(err)
    // }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8 max-w-2xl">
      <div className="relative">
        <label htmlFor="name" className="block text-sm ml-1">
          Nombre:
        </label>
        <input
          id="name"
          name="name"
          type="name"
          ref={register}
          placeholder="Tu Nombre"
          className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
        />
      </div>
      <div className="mt-2 mb-8 relative">
        <label htmlFor="email" className="block text-sm ml-1">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          ref={register({
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
              message: "email no valido.",
            },
          })}
          placeholder="nombre@email.com"
          className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
        />
        {errors.email && (
          <p className="text-sm font-semibold text-red-700 py-1 px-2 rounded-sm leading-3 m-0 p-0 absolute w-full mt-1">
            email incorrecto
          </p>
        )}
      </div>
      <div className="mt-2 mb-8 relative">
        <label htmlFor="email" className="block text-sm ml-1">
          Comentario:
        </label>
        <textarea
          rows={5}
          id="comment"
          name="comment"
          ref={register}
          placeholder="¿En qué te podemos ayudar?"
          className="mt-1 block border border-gray-400 w-full p-2 outline-none focus:border-gray-600 rounded transition duration-200"
        />
      </div>
      {success ? (
        <p className="mt-6 text-xl font-bold text-primary-hover">
          Gracias! en breve nos pondremos en contacto contigo!
          <span role="img" aria-label="thumbs up emoji">
            👍
          </span>
        </p>
      ) : (
        <button
          type="submit"
          className="block text-center text-xl font-bold bg-primary text-white w-full px-4 py-2 rounded mt-2 hover:bg-primary-hover hover:shadow-md transition duration-200"
        >
          Apuntarme
        </button>
      )}
    </form>
  )
}
