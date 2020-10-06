import React from "react";
import { Section } from "./page-layout";
import { MainMenu } from "./page-menu";
import { Heading1 } from "./headings";

export function AboutHeader() {
  return (
    <Section className="bg-secondary-hover">
      <MainMenu />
      <div className="mt-32">
        <Heading1>
          <span
            className="text-2xl block text-primary"
            style={{ fontWeight: "300" }}
          >
            Sobre Nosotros.
          </span>
          <span className="text-primary-hover">
            Marca de ropa preocupada por el impacto medioambiente
          </span>
        </Heading1>
      </div>
    </Section>
  );
}
