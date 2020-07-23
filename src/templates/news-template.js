import React from "react"
import { graphql } from "gatsby"

import Img from "gatsby-image"
import scrollTo from 'gatsby-plugin-smoothscroll';

import Layout from "../components/layout"
import SEO from "../components/seo"
import CalculateArtist from '../components/CalculateArtist'

import {
  FaChevronDown
} from 'react-icons/fa';

class BlogPostTemplate extends React.Component {

  render() {
    const news = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={news.frontmatter.title}
          description={news.frontmatter.description || news.excerpt}
        />
        <article>
          <div className = "news-content-container">
            <div className = "news-banner">
              <div className="news-image-container">
                <Img
                  className="kg-image"
                  fluid={news.frontmatter.thumbnail2.childImageSharp.fluid}
                  alt={news.frontmatter.title}
                />
              </div>
              <div className = "news-content">
                <div className = "news-content-date">
                  <h6>
                    {news.frontmatter.date}
                  </h6>
                </div>
                <div className = "news-content-title">
                  <h2>{news.frontmatter.title}</h2>          
                </div> 
                <div className = "news-links">
                  {news.frontmatter.links && 
                    <a href={news.frontmatter.links} className="button large primary">
                      Listen Now
                    </a>   
                  }
                  {news.frontmatter.links &&
                    <CalculateArtist category={news.frontmatter.category} tags={news.frontmatter.tags} currentArticleSlug={news.frontmatter.slug}/>   
                  }                
                </div>
                <div>
                  <FaChevronDown onClick={() => scrollTo('#content')} className = "down-arrow"/>
                </div>             
              </div>
            </div>   
            <div
              className="news-content-body"
              id = "content"
              dangerouslySetInnerHTML={{ __html: news.html }}
            />         
          </div>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query NewsPostBySlug($slug: String!) {
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
        links
        date(formatString: "MMMM DD, YYYY")
        description
        thumbnail1 {
          childImageSharp {
            fluid(maxWidth: 1360) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        thumbnail2 {
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