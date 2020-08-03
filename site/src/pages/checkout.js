/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { MainLayout, Section } from "../components/page-layout"
import { Heading1 } from "../components/headings"
import { MainMenu } from "../components/page-menu"
import { Trash } from "react-feather"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { Link } from "../components/link"
import { checkout as checkoutOperation } from "../graphql/mutations"
import { API, graphqlOperation } from "aws-amplify"

export default function Checkout() {
  const {
    redirectToCheckout,
    clearCart,
    totalPrice,
    setItemQuantity,
    removeItem,
    cartDetails,
  } = useShoppingCart()

  function handleClearCart() {
    const result = window.confirm("Estas seguro que quieres vaciar tu cesta?")

    if (result) {
      clearCart()
    }
  }

  async function handleCheckout() {
    console.log("cartDetails", cartDetails)
    const input = Object.keys(cartDetails).map((o) => ({
      ...cartDetails[o],
    }))
    const { data } = await API.graphql(
      graphqlOperation(checkoutOperation, { input })
    )
    console.log("handleCheckout -> result.data.checkout.sessionId", data)

    redirectToCheckout({ sessionId: data.checkout.body.sessionId })
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
              Tu carrito de la compra
            </span>
            <span className="text-primary-hover">Checkout</span>
          </Heading1>
        </div>
      </Section>
      {Object.keys(cartDetails).length > 0 ? (
        <Section>
          <div className="border">
            <div className="flex flex-row md:flex-row border-b">
              <div className="px-4 py-2 flex-1 font-bold border-r">
                producto
              </div>
              <div
                className="px-4 py-2 flex-none font-bold border-r w-full"
                css={css`
                  max-width: 110px;
                `}
              >
                cantidad
              </div>
              <div
                className="px-4 py-2"
                css={css`
                  width: 110px;
                `}
              />
            </div>
            {Object.keys(cartDetails).map((key) => (
              <div className="flex flex-row md:flex-row border-b" key={key}>
                <div className="px-4 py-2 flex-1 overflow-hidden border-r">
                  <p className="font-bold">{cartDetails[key].name}</p>
                  <p className="truncate text-gray-600 text-sm font-light">
                    {cartDetails[key].description}
                  </p>
                </div>
                <div
                  className="px-4 py-2 flex-none border-r w-full flex items-center justify-center"
                  css={css`
                    max-width: 110px;
                  `}
                >
                  <input
                    className="px-4 py-2 outline-none"
                    style={{ width: 80 }}
                    min={1}
                    type="number"
                    value={cartDetails[key].quantity}
                    onChange={(e) => {
                      const q = parseInt(e.target.value)
                      let value = q > 0 ? q : 1
                      setItemQuantity(cartDetails[key].sku, value)
                    }}
                  />
                </div>
                <div
                  className="px-4 py-2 w-full flex items-center justify-center"
                  css={css`
                    width: 110px;
                  `}
                >
                  <button onClick={() => removeItem(cartDetails[key].sku)}>
                    <Trash className="text-red-700" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex flex-row md:flex-row">
              <div className="px-4 py-2 flex-1 border-r">&nbsp;</div>
              <div
                className="px-4 py-2 flex-none w-full"
                css={css`
                  max-width: 220px;
                `}
              >
                <p className="font-bold text-2xl text-right">
                  Total:{" "}
                  {formatCurrencyString({
                    value: totalPrice,
                    currency: "EUR",
                  })}
                </p>
              </div>
            </div>
          </div>
          <button
            className="py-2 px-4 my-2 rounded border"
            onClick={handleClearCart}
          >
            Vacía la cesta
          </button>
          <button
            className="py-2 px-4 my-2 rounded border ml-4"
            onClick={handleCheckout}
          >
            pagar
          </button>
        </Section>
      ) : (
        <EmptyCart />
      )}
    </MainLayout>
  )
}

function EmptyCart() {
  return (
    <Section>
      <div className="border p-6 text-center">
        <h3 className="font-bold text-2xl ">Tu cesta está vacia</h3>
        <p>
          empieza viendo nuestra <Link to="/">colección actual</Link>
        </p>
      </div>
    </Section>
  )
}
