import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

import BannerVideo from "../video/Banner.mp4"

const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <section title={siteTitle} className="home-banner">
      <SEO
        title="Home"
        keywords={[
          `mala jam records`,
          `mala jam artists`,
          `malajam records`,
          `malajam artists`,
          `mala jam music`,
          `malajam music`,
          `wisconsin record label`,
          `record label near me`,
          `madison record label`,
          `best record labels`,
          `record label website`,
          `record studios`,
          `studios for music`,
          `record company`,
          `la record label`,
        ]}
        description="Mala Jam Records is an independent record label dedicated to enabling, producing, and procurring a new generation of self-made music."
      />
      <video
        className="video-player"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: "100%",
          width: "100%",
          zIndex: "-1",
          objectFit: "fill",
          objectPosition: "center",
        }}
        playsInline
        loop
        muted
        autoPlay
      >
        <source src={BannerVideo} type="video/mp4" />
      </video>
      <header className="page-head">
        <h1>Mala Jam Records</h1>
        <h2 className="page-head-title">
          Producing and enabling the next generation of self-made music
        </h2>
        <Link to="/artists" className="button primary large">
          Explore
        </Link>
      </header>
    </section>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "artist" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
