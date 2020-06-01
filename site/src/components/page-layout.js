import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { CovidCallout } from "./callout";
import { MainNav } from "./page-menu";
import { AboutHeader } from "./about-header";
import { ContactHeader } from "./contact-header";

export function Container(props) {
  return <div className="mx-auto w-full max-w-4xl" {...props} />;
}

export function Section({ className, children, ...rest }) {
  return (
    <div className={`py-20 px-4 md:px-8 relative ${className}`} {...rest}>
      <Container>{children}</Container>
    </div>
  );
}

const components = {
  Container,
  Section,
  CovidCallout,
  p: (props) => (
    <p
      className="mt-10 first:mt-0 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover"
      {...props}
    />
  ),
  b: (props) => <b className="font-bold" {...props} />,
};

export function MainLayout({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
      <PageFooter />
    </MDXProvider>
  );
}

export function AboutLayout({ children }) {
  return (
    <MDXProvider components={components}>
      <CovidCallout />
      <AboutHeader />
      <Section>{children}</Section>
      <PageFooter />
    </MDXProvider>
  );
}

export function ContactLayout({ children }) {
  return (
    <MDXProvider components={components}>
      <CovidCallout />
      <ContactHeader />
      <Section>{children}</Section>
      <PageFooter />
    </MDXProvider>
  );
}

export function PageFooter(props) {
  return (
    <Section className="bg-primary text-white">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <p>Happori</p>
        <MainNav />
      </div>
      <p className="absolute bottom-0 left-0 w-full p-2 text-center text-white opacity-75 text-xs">
        Todos los derechos reservados
      </p>
    </Section>
  );
}
