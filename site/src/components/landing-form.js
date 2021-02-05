import React from "react"
import { useForm } from "react-hook-form"

export default function LandingForm() {
  const [success, setSuccess] = React.useState(false)
  const { register, handleSubmit, errors } = useForm()

  async function onSubmit(data) {
    await fetch("https://api.formium.io/submit/5e8f85371cf69f00017474bd/landing-page", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    setSuccess(true)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-8">
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
          <p className="text-xs text-white py-1 px-2 rounded-sm bg-red-700 leading-3 m-0 p-0 absolute w-full mt-1">
            email incorrecto
          </p>
        )}
      </div>
      {success ? (
        <p className="mt-6 text-xl font-bold text-primary-hover">
          Gracias por registrarte! <span role="img" aria-label="thumbs up emoji">👍</span>
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
