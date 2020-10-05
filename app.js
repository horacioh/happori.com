import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
} from "@aws-amplify/ui-react"
// import { listProducts } from "../graphql/queries"
// import { API, graphqlOperation } from "aws-amplify"
// import { useQuery } from "react-query"
import ListProducts from "./src/components/list-products"
import CreateProduct from "./src/components/create-product"
import EditProduct from "./src/components/edit-product"
import { Auth } from "aws-amplify"

export default function App() {
  return (
    <AmplifyAuthenticator>
      <nav className="p-4 flex items-center justify-center">
        <Link
          className="px-4 py-2 bg-gray-200 hover:bg-gray-400 mx-2"
          to="/app"
        >
          Home
        </Link>
        <Link
          className="px-4 py-2 bg-gray-200 hover:bg-gray-400 mx-2"
          to="/app/product/new"
        >
          Crear nuevo producto
        </Link>
        <Link to="/" className="px-4 py-2 bg-gray-200 hover:bg-gray-400 mx-2">
          Go to website
        </Link>
        <button onClick={() => Auth.signOut()}>logout</button>
      </nav>
      <AmplifySignIn slot="sign-in" />
      <Router>
        <ListProducts path="/app" />
        <CreateProduct path="/app/product/new" />
        <EditProduct path="/app/product/:id" />
      </Router>
    </AmplifyAuthenticator>
  )
}
