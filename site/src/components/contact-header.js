import React from "react";
import { Section } from "./page-layout";
import { MainMenu } from "./page-menu";
import { Heading1 } from "./headings";

export function ContactHeader() {
  return (
    <Section className="bg-secondary-hover">
      <MainMenu />
      <div className="mt-32">
        <Heading1>
          <span
            className="text-2xl block text-primary"
            style={{ fontWeight: "300" }}
          >
            Cont&aacute;ctanos
          </span>
          <span className="text-primary-hover">
            ¿Qu&eacute; necesitas de nosotos?
          </span>
        </Heading1>
      </div>
    </Section>
  );
}
