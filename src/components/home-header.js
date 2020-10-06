import React from "react";
import { Section } from "./page-layout";
import { MainMenu } from "./page-menu";
import { Heading1 } from "./headings";

export function HomeHeader() {
  return (
    <Section className="bg-secondary-hover">
      <MainMenu />
      <div className="mt-32">
        <Heading1>
          <span
            className="text-2xl block text-primary"
            style={{ fontWeight: "300" }}
          >
            Somos Happori.
          </span>
          <span className="text-primary-hover">Hacemos ropa de tu ropa.</span>
        </Heading1>
        <p className="mt-10 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover">
          Happori nace como una marca de ropa preocupada por el impacto
          medioambiente. Nuestro objetivo es llegar a ser una empresa enfocada a
          la Economía circular.{" "}
          <b className="font-bold">De tu ropa hacemos tu ropa.</b>
        </p>
      </div>
    </Section>
  );
}
