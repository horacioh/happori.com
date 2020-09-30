import React from "react"
import { useQuery } from "react-query"
import { MainLayout, Section } from "../components/page-layout"
import { Storage } from "aws-amplify"
import { MainMenu } from "../components/page-menu"
import { Heading1, Heading2 } from "../components/headings"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { useToasts } from "react-toast-notifications"

export default function SingleProduct({ pageContext }) {
  const [count, setCount] = React.useState(1)
  const { addItem, totalPrice, incrementItem, cartDetails } = useShoppingCart()
  const { addToast } = useToasts()

  const { data: product, isSuccess } = useQuery("product", async () => {
    let product = pageContext
    const imageUrl = await Storage.get(product.image)

    return {
      ...product,
      imageUrl,
    }
  })

  if (!isSuccess) {
    return <p>loading...</p>
  }

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
          <div
            className="flex-1 relative overflow-hidden mr-8 rounded-lg shadow-lg"
            style={{ height: 400 }}
          >
            <img
              className="block w-full object-cover absolute top-0 left-0"
              src={product.imageUrl}
            />
          </div>
          <div className="flex-1">
            <p className="w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
              {product.description}
            </p>
            <p className="py-4 font-bold text-3xl">
              {formatCurrencyString({
                value: product.price,
                currency: "EUR",
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
                  if (cartDetails[product.priceId]) {
                    incrementItem(product.priceId, parseInt(count))
                  } else {
                    addItem(
                      {
                        ...product,
                        sku: product.priceId,
                      },
                      parseInt(count)
                    )
                  }

                  addToast("Se ha agregado el producto a tu cesta!", {
                    appearance: "success",
                  })
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
