import React from "react";
import Logo from "./logo";
import { Link } from "gatsby";

export function MainMenu(props) {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between">
      <Link to="/">
        <Logo width="200" />
      </Link>
      <MainNav />
    </div>
  );
}

export function MainNav() {
  return (
    <nav className="py-4 md:py-0">
      <ul className="flex items-baseline">
        {/* <li className="mx-2">
            <Link className="text-xs uppercase font-light px-2 py-1 rounded hover:bg-primary-hover hover:text-white transform transition duration-100 md:px-4 md:py-2">
              productos
            </Link>
          </li> */}
        <li className="mx-2">
          <Link
            to="/nosotros/"
            activeClassName="bg-primary-hover text-white"
            className="text-xs uppercase font-light px-2 py-1 rounded hover:bg-primary-hover hover:text-white transform transition duration-100 md:px-4 md:py-2"
          >
            nosotros
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/contacto/"
            activeClassName="bg-primary-hover text-white"
            className="text-xs uppercase font-light px-2 py-1 rounded hover:bg-primary-hover hover:text-white transform transition duration-100 md:px-4 md:py-2"
          >
            contacto
          </Link>
        </li>
        <li className="mx-2">
          <Link
            to="/calcetines-solidarios/"
            activeClassName="bg-red-500 text-white"
            className="text-xs uppercase font-normal px-2 py-1 rounded bg-secondary text-white hover:bg-primary-hover transform transition duration-100 md:px-4 md:py-2"
          >
            calcetin solidario
          </Link>
        </li>
      </ul>
    </nav>
  );
}
