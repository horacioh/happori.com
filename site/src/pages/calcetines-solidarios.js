import React from "react";
import { MainLayout } from "../components/page-layout";
import { Heading1 } from "../components/headings";
import { Section } from "../components/page-layout";
import { MainMenu } from "../components/page-menu";
import { Product } from "../components/product";
import { SectionBackground } from "../components/background-header";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";
import productData from "../../functions/data/products.json";

export default function CalcetinesSolidatios(props) {
  const {
    redirectToCheckout,

    clearCart,
    // cartCount,
    totalPrice,
    cartDetails,
  } = useShoppingCart();
  console.log("CalcetinesSolidatios -> redirectToCheckout", redirectToCheckout);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/checkout", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => {
        console.log("handleSubmit -> res", res);

        return res.json();
      })
      .catch((error) => console.error(`ERRORR!!! => ${error}`));

    redirectToCheckout({ sessionId: response.sessionId });
  };

  return (
    <MainLayout>
      <SectionBackground>
        <MainMenu dark />
        <div className="mt-32">
          <Heading1>
            <span className="text-primary">Sí, saldremos de esta.</span>
          </Heading1>
          {/* <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary mx-auto">
            tagline para calcetines solidarios.{" "}
            <b className="font-bold">De tu ropa hacemos tu ropa.</b>
          </p> */}
        </div>
      </SectionBackground>
      <Section className="text-center">
        <p className="mt-10 first:mt-0 w-full mx-auto max-w-2xl mb-0 text-xl font-light text-primary-hover">
          Detrás de Happori estamos Horacio y David. Dos amigos que comparten el
          amor por los calcetines y la visión de un mundo más justo, más
          equitativo, mejor. Cualquier gran movimiento empieza siempre desde
          abajo y desde los pequeños cambios.
        </p>
        {productData.map((p) => (
          <Product {...p} />
        ))}
        <div className="mt-16 flex flex-col w-full max-w-sm mx-auto">
          <p className="px-2 font-bold text-3xl">
            TOTAL:{" "}
            {formatCurrencyString({
              value: totalPrice,
              currency: "EUR",
            })}
          </p>
          <button
            className="flex-1 p-4 mt-4 rounded bg-green-500 hover:bg-green-400 transition transform duration-100 text-black text-sm font-bold uppercase"
            onClick={handleSubmit}
          >
            Comprar
          </button>
        </div>
        <div>
          <button
            className="mt-4 px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 transition transform duration-100 text-black text-xs font-bold uppercase"
            onClick={() => clearCart()}
          >
            Borrar
          </button>
        </div>
      </Section>
    </MainLayout>
  );
}
