import React from "react"
import { MainLayout } from "../components/page-layout"
import { HomeHeader } from "../components/home-header"
import { ProductsSection } from "../components/section-products"
import { HomeAbout } from "../components/home-about"
import { CovidCallout } from "../components/callout"

/**

- header
  - logo
  - menu
  - alert bar calcetin solidario
  - mensaje
  - bg image
- productos
- mensaje
- footer

**/

export default function Index(props) {
  return (
    <MainLayout>
      <CovidCallout />
      <HomeHeader />
      <ProductsSection />
      <HomeAbout />
    </MainLayout>
  )
}
