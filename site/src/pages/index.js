import React from "react"
import Layout from "../components/background-layout"
import Form from "../components/landing-form"
import Logo from "../components/logo"

export default function Landing() {
  return (
    <Layout>
      <div className="fixed top-0 left-0 overflow-y-scroll w-full h-full">
        <div className="w-full max-w-xl px-4 pt-16 pb-8 md:p-16 min-h-full absolute left-0 top-0 md:flex md:items-center">
          <div className="p-6 shadow-xl rounded-lg bg-white">
            <h1 className="text-3xl font-bold" aria-label="Happori">
              <Logo width="200" />
            </h1>
            <h3 className="text-xl font-bold mt-8 text-primary">
              Estamos a muy pocos pasos de abrir nuestra tienda online.
            </h3>
            <p className="mt-6 text-primary-hover">
              Desde Happori queremos ser tu marca de referencia en calcetines
              sostenibles.{" "}
              <b>Se puede vestir bien respetando nuestro medio ambiente.</b>
            </p>
            <p className="mt-6 text-primary-hover">
              Dentro de muy poquito estaremos preparados para ofrecerte nuestra
              primer colección de calcetines.
            </p>
            <p className="mt-6 text-primary-hover">
              <b>Déjanos tu mail</b> y sé un@ de l@s primer@s en tener unos Happori.
            </p>
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  )
}
