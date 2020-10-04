import React from "react"
import "./src/styles/main.css"
import { AppProviders } from "./src/components/app-providers"
import Amplify from "aws-amplify"
import API from "@aws-amplify/api"
import Auth from "@aws-amplify/auth"
import config from "./src/aws-exports"

Amplify.configure(config)
Amplify.register(Auth)
Amplify.register(API)

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }

export function wrapRootElement({ element }) {
  return <AppProviders>{element}</AppProviders>
}
