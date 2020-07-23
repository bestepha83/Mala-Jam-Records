import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerVideo from "../assets/Banner.mp4"

import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <section title={siteTitle} className="home-banner">
      <SEO
        title="Home"
        keywords={[
          `mala jam`,
          `malajam`,
          `record label`,
          `music`,
          `artists`,
          `releases`,
          `la record label`,
        ]}
      />

      <div id="top"></div>
      <video className="video-player" loop muted autoPlay>
        <source src={BannerVideo} type="video/mp4" />
      </video>
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h1>Mala Jam Records</h1>
          <h2 className="page-head-title">
            {data.site.siteMetadata.description}
          </h2>
          <Link to="/artists" className="button primary large">
            Explore
          </Link>
        </header>
      )}
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
