import React from "react"
import Logo from "./logo"
import { CheckoutButton } from "./checkout"
import { Link } from "gatsby"

export function MainMenu({ dark = false, ...props }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between relative">
      <Link to="/">
        <Logo width="200" />
      </Link>
      <MainNav dark={dark} />
    </div>
  )
}

export function MainNav({ dark = false, ...props }) {
  return (
    <nav
      className={`py-4 md:py-0 box-border rounded mt-4 md:mt-0 ${
        dark ? "bg-secondary" : "bg-transparent"
      }`}
    >
      <ul className="flex items-center p-0 md:p-4">
        {/* <li className="mx-2">
            <Link className="text-xs uppercase font-light px-2 py-1 rounded hover:bg-primary-hover hover:text-white transform transition duration-100 md:px-4 md:py-2">
              productos
            </Link>
          </li> */}
        <li className="mx-2">
          <Link
            to="/nosotros/"
            activeClassName="bg-primary-hover text-white"
            className={`text-xs uppercase font-light px-2 py-1 rounded hover:bg-primary-hover hover:text-white transform transition duration-100 md:px-4 md:py-2 ${
              dark ? "text-white" : ""
            }`}
          >
            nosotros
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/contacto/"
            activeClassName="bg-primary-hover text-white"
            className={`text-xs uppercase font-light px-2 py-1 rounded hover:bg-primary-hover hover:text-white transform transition duration-100 md:px-4 md:py-2 ${
              dark ? "text-white" : ""
            }`}
          >
            contacto
          </Link>
        </li>
        <li>
          <Link to="/checkout/" className={dark ? "text-white" : ""}>
            <CheckoutButton className={dark ? "text-white" : ""} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}