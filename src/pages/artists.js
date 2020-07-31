import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/artistCard"
import Scroll from "../components/backToTop"

import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title
  const artists = data.allMarkdownRemark.edges
  let artistCounter = 0

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Artists"
        keywords={[
          `mala jam artists`,
          `malajam artists`,
          `record label artists`,
          `record label website`,
          `wisconsin record label`,
          `record label near me`,
          `madison record label`,
          `best record labels`,
          `musical art`,
          `transforming art`,
          `goodbye eden`,
          `good bye eden`,
          `the tarantino experience`,
          `stray roses`,
          `susie mccollum`,
        ]}
        description="The artists of mala jam records are a unqiue blend of genres and styles"
      />

      <section>
        <Scroll showBelow={250} />
        <h2 className="page-title">Artists</h2>
        <div className="artist-feed">
          {artists.map(({ node }) => {
            artistCounter++
            return (
              <PostCard
                key={node.fields.slug}
                count={artistCounter}
                node={node}
                postClass={`post`}
              />
            )
          })}
        </div>
      </section>
    </Layout>
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
