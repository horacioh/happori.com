import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery } from "gatsby"

export default function BackgroundCover({ className, children, ...props }) {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "bg1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "bg1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4160, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 1024px)`,
    },
  ]

  return (
    <BackgroundImage
      {...props}
      Tag="section"
      id="media-test"
      className={`absolute w-full min-h-screen bg-transparent ${className}`}
      fluid={sources}
    >
      {children}
    </BackgroundImage>
  )
}
