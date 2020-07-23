import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SimilarArticlesComponent from "../components/ArtistReleases"

import {
  FaFacebookSquare,
  FaInstagram,
  FaSpotify,
  FaYoutubeSquare,
  FaSoundcloud,
} from "react-icons/fa"

class BlogPostTemplate extends React.Component {
  render() {
    const artist = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={artist.frontmatter.title}
          description={artist.frontmatter.description || artist.excerpt}
        />
        <article
          className={`artist-content ${artist.frontmatter.thumbnail ||
            `no-image`}`}
        >
          <div className="artist-banner">
            <h1 className="artist-content-title">{artist.frontmatter.title}</h1>
            <div className="artist-image-container">
              {artist.frontmatter.thumbnail && (
                <div className="artist-content-image">
                  <Img
                    className="kg-image"
                    fluid={artist.frontmatter.thumbnail.childImageSharp.fluid}
                    alt={artist.frontmatter.title}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="artist-links">
            {artist.frontmatter.facebook && (
              <a
                href={artist.frontmatter.facebook}
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
            )}
            {artist.frontmatter.instagram && (
              <a
                href={artist.frontmatter.instagram}
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            )}
            {artist.frontmatter.spotify && (
              <a
                href={artist.frontmatter.spotify}
                target="_blank"
                title="Spotify"
                rel="noopener noreferrer"
              >
                <FaSpotify />
              </a>
            )}
            {artist.frontmatter.youtube && (
              <a
                href="https://www.youtube.com"
                target="_blank"
                title="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutubeSquare />
              </a>
            )}
            {artist.frontmatter.soundcloud && (
              <a
                href="https://www.soundcloud.com"
                target="_blank"
                title="Soundcloud"
                rel="noopener noreferrer"
              >
                <FaSoundcloud />
              </a>
            )}
          </div>
          {artist.frontmatter.description && (
            <p class="artist-content-excerpt">
              "{artist.frontmatter.description}"
            </p>
          )}
          <div className="artist-about">
            <h2>About {artist.frontmatter.title}</h2>
            <div
              className="artist-content-body"
              dangerouslySetInnerHTML={{ __html: artist.html }}
            />
          </div>
          <SimilarArticlesComponent
            releases={artist.frontmatter.releases}
            tags={artist.frontmatter.tags}
            currentArticleSlug={artist.frontmatter.slug}
          />
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ArtistPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        category
        tags
        date(formatString: "MMMM DD, YYYY")
        description
        releases
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        facebook
        instagram
        spotify
      }
    }
  }
`
BlogPostTemplate.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}
