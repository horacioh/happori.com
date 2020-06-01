import React from "react";
import "./src/styles/main.css";

export function wrapRootElement({ element }) {
  return <AppProviders>{element}</AppProviders>;
}
