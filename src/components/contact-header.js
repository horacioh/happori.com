import React from "react";
import { Section } from "./page-layout";
import { MainMenu } from "./page-menu";

export function TitleSection({ children }) {
  return (
    <Section className="bg-secondary-hover">
      <MainMenu />
      <div className="mt-32">{children}</div>
    </Section>
  );
}
