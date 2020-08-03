import React from "react"
import { Router } from "@reach/router"
import { Link } from "gatsby"
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignIn,
} from "@aws-amplify/ui-react"
import { listProducts } from "../graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
import { useQuery } from "react-query"
import ListProducts from "../components/list-products"
import EditProduct from "../components/edit-product"

export default function App() {
  const { data } = useQuery("products", () =>
    API.graphql({ query: listProducts })
  )

  return (
    <AmplifyAuthenticator>
      <nav>
        <Link to="/app/">Home</Link>
      </nav>
      <AmplifySignIn hideSignUp slot="sign-in" />
      <Router>
        <ListProducts path="/app/" />
        <EditProduct path="/app/edit/:id" />
      </Router>
      <AmplifySignOut />
    </AmplifyAuthenticator>
  )
}
