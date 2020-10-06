import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { CovidCallout } from "./callout"
import { MainNav } from "./page-menu"
import { AboutHeader } from "./about-header"
import { TitleSection } from "./contact-header"
import { Heading1 } from "./headings"
import { Link } from "./link"
import { Instagram, Twitter, Facebook } from "react-feather"

export function Container(props) {
  return <div className="mx-auto w-full max-w-4xl" {...props} />
}

export function Section({ className, children, ...rest }) {
  return (
    <div className={`py-20 px-4 md:px-8 relative ${className}`} {...rest}>
      <Container>{children}</Container>
    </div>
  )
}

export function SocialMedia() {
  return (
    <div className="py-4 rounded flex items-center">
      <Link
        to="https://instagram.com/happori_com"
        className="text-primary hover:text-secondary transition duration-200 mr-8"
      >
        <Twitter color="currentColor" />
      </Link>
      <Link
        to="https://instagram.com/happori_com"
        className="text-primary hover:text-secondary transition duration-200 mr-8"
      >
        <Instagram color="currentColor" />
      </Link>
      <Link
        to="https://instagram.com/happori_com"
        className="text-primary hover:text-secondary transition duration-200 mr-8"
      >
        <Facebook color="currentColor" />
      </Link>
    </div>
  )
}

const components = {
  Container,
  Section,
  CovidCallout,
  SocialMedia,
  p: (props) => (
    <p
      className="mt-10 first:mt-0 w-full max-w-2xl mb-0 text-xl font-light text-primary-hover"
      {...props}
    />
  ),
  strong: (props) => <span className="font-bold" {...props} />,
  a: (props) => <Link {...props} />,
}

export function MainLayout({ children }) {
  return (
    <MDXProvider components={components}>
      {children}
      <PageFooter />
    </MDXProvider>
  )
}

export function AboutLayout({ children }) {
  return (
    <MDXProvider components={components}>
      <CovidCallout />
      <AboutHeader />
      <Section>{children}</Section>
      <PageFooter />
    </MDXProvider>
  )
}

export function PageLayout({ children, pageContext: { frontmatter } }) {
  const { title } = frontmatter
  return (
    <MDXProvider components={components}>
      <CovidCallout />
      <TitleSection>
        <Heading1>
          <span className="text-primary-hover">{title}</span>
        </Heading1>
      </TitleSection>
      <Section>{children}</Section>
      <PageFooter />
    </MDXProvider>
  )
}

export function ContactLayout({ children, ...props }) {
  return (
    <MDXProvider components={components}>
      <CovidCallout />
      <TitleSection>
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
      </TitleSection>
      <Section>{children}</Section>
      <PageFooter />
    </MDXProvider>
  )
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
  )
}
