import React from "react";
import { Section } from "./page-layout";
import { Heading2 } from "./headings";
import { Link } from "gatsby";

export function ProductsSection(props) {
  return (
    <Section className="border-b-2">
      <Heading2 className="text-primary">Nuestros Productos</Heading2>
      <div className="py-12 bg-red-100">
        <ul className="flex flex-col md:flex-row -mx-4">
          <li className="mx-4 p-4 rounded bg-red-200 flex-1">
            <Link to="/productos/pachamama/">pachamama</Link>
          </li>
          <li className="mx-4 p-4 rounded bg-red-200 flex-1">
            <Link to="/productos/pachamama/">tierra</Link>
          </li>
        </ul>
      </div>
    </Section>
  );
}
