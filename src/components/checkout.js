/** @jsx jsx */
import { ShoppingCart } from "react-feather"
import { useShoppingCart } from "use-shopping-cart"
import { css, jsx } from "@emotion/core"

export function CheckoutButton({ className, ...props }) {
  const { cartCount } = useShoppingCart()
  return (
    <div {...props} className={`${className} px-2 relative`}>
      <ShoppingCart />
      <div
        css={css`
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(50%, -50%);
          min-width: 24px;
          height: 24px;
          padding: 0 4px;
          background: var(--color-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <span className="text-white">{cartCount}</span>
      </div>
    </div>
  )
}
