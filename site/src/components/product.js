import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart";

export function Product({ className, ...props }) {
  console.log("props => ", props);
  const [count, setCount] = React.useState(1);
  const { addItem } = useShoppingCart();
  const image = useStaticQuery(graphql`
    query productImage {
      file(relativePath: { eq: "product_test.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <div className={`p-4 w-full mx-auto max-w-sm ${className}`} {...props}>
      <Image fluid={image.file.childImageSharp.fluid} />
      <p className="px-2 font-bold">
        Precio por par:{" "}
        {formatCurrencyString({
          value: props.price,
          currency: props.currency,
        })}
      </p>
      <div className="flex items-center mt-2">
        <input
          className="px-4 py-2 outline-none font-bold border-orange-500 border-2"
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          style={{ width: 80 }}
        />
        <button
          className="px-4 py-2 bg-orange-500 hover:bg-orange-600 transition transform duration-100 text-black text-sm font-bold uppercase flex-1"
          style={{ minHeight: 44 }}
          onClick={() => {
            console.log("add!!");
            addItem(props, count);
          }}
        >
          Añadir
        </button>
      </div>
    </div>
  );
}
