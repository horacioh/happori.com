import React from "react";
import "./src/styles/main.css";
import { AppProviders } from "./src/components/app-providers";

// export const onClientEntry = () => {
//   // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//   if (!(`IntersectionObserver` in window)) {
//     import(`intersection-observer`)
//     console.log(`# IntersectionObserver is polyfilled!`)
//   }
// }

export function wrapRootElement({ element }) {
  return <AppProviders>{element}</AppProviders>;
}
