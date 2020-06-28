import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

export default function BackgroundCover({ className, children, ...props }) {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "bg.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "bg.jpg" }) {
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
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-primary opacity-50" />
      <a className="absolute bottom-0 right-0 text-xs text-white px-2 py-1" href="https://unsplash.com/@billow926?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from billow 926">Photo by billow 926</a>
      {children}
    </BackgroundImage>
  )
}
