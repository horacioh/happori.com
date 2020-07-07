import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "./page-layout";

export function SectionBackground({ className, children, ...props }) {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "" }) {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "" }) {
          childImageSharp {
            fluid(maxWidth: 4160, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
  ];

  return (
    <BackgroundImage
      {...props}
      Tag="section"
      id="media-test"
      className={`py-20 px-4 md:px-8 relative bg-transparent text-center ${className}`}
      fluid={sources}
    >
      <Container>{children}</Container>
    </BackgroundImage>
  );
}
