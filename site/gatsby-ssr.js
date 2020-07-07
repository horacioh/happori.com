import React from "react"
import "./src/styles/main.css"
import { AppProviders } from "./src/components/app-providers"

export function wrapRootElement({ element }) {
  return <AppProviders>{element}</AppProviders>
}
