import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CalculateArtist from "../components/calculateartist"

class BlogPostTemplate extends React.Component {
  render() {
    const release = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={release.frontmatter.title}
          description={release.frontmatter.description || release.excerpt}
        />
        <article className={`${release.frontmatter.thumbnail || `no-image`}`}>
          <div className="release-content">
            <div className="release-banner">
              {release.frontmatter.thumbnail && (
                <div className="release-content-image">
                  <Img
                    className="kg-image"
                    fluid={release.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={release.frontmatter.title}
                  />
                </div>
              )}
              <div className="release-content-title">
                <h2>{release.frontmatter.title}</h2>
                <h6>{release.frontmatter.artist}</h6>
              </div>
            </div>
            <div>
              {release.frontmatter.description && (
                <p className="release-content-excerpt">
                  "{release.frontmatter.description}"
                </p>
              )}
            </div>
            <div className="release-links">
              <a
                href={release.frontmatter.links}
                className="button large primary"
              >
                Listen Now
              </a>
              <CalculateArtist
                tags={release.frontmatter.tags}
                currentArticleSlug={release.frontmatter.slug}
              />
            </div>
            <div
              className="artist-content-body"
              dangerouslySetInnerHTML={{ __html: release.html }}
            />
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ReleasePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        category
        tags
        artist
        date(formatString: "MMMM DD, YYYY")
        description
        links
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
`
