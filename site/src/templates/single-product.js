import React from "react"
import { MainLayout, Section } from "../components/page-layout"
import { MainMenu } from "../components/page-menu"
import { Heading1, Heading2 } from "../components/headings"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { useToasts } from 'react-toast-notifications'

export default function SingleProduct({ pageContext }) {
  const [count, setCount] = React.useState(1)
  const { addItem, totalPrice, incrementItem, cartDetails } = useShoppingCart()
  const { ...product } = pageContext
  const { addToast } = useToasts()

  return (
    <MainLayout>
      <Section className="bg-secondary-hover">
        <MainMenu />
        <div className="mt-32">
          <Heading1>
            <span
              className="text-2xl block text-primary"
              style={{ fontWeight: "300" }}
            >
              Producto
            </span>
            <span className="text-primary-hover">{product.name}</span>
          </Heading1>
        </div>
      </Section>
      <Section>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">imagen aqui</div>
          <div className="flex-1">
            <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
              {product.description}
            </p>
            <p className="py-4 font-bold text-3xl">
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}
            </p>
            <div className="flex items-center mt-2">
              <input
                className="px-4 py-2 outline-none font-bold border-orange-500 border-2"
                min={1}
                max={100}
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                style={{ width: 80 }}
              />
              <button
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transition transform duration-100 text-black text-sm font-bold uppercase flex-1"
                style={{ minHeight: 44 }}
                onClick={() => {
                  if (cartDetails[product.sku]) {
                    incrementItem(product.sku, parseInt(count))
                  } else {
                    addItem(product, parseInt(count))
                  }

                  addToast('Se ha agregado el producto a tu cesta!', { appearance: 'success' })
                }}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      </Section>
    </MainLayout>
  )
}
