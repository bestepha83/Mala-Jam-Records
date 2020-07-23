import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { getPostsFromQuery } from "./related"
import { includes, orderBy } from "lodash"
import ArtistReleaseCard from "./artistreleasecard"
import "../utils/css/screen.css"

class SimilarArticlesFactory {
  constructor(articles, currentArticleSlug) {
    this.currentArticleSlug = currentArticleSlug
    this.articles = articles.filter(
      aArticle => aArticle.slug !== currentArticleSlug
    )
    this.tags = []
  }

  setMaxArticles(m) {
    this.maxArticles = m
    return this
  }

  setTags(tagsArray) {
    this.tags = tagsArray
    return this
  }

  getArticles() {
    const { tags, articles, maxArticles } = this
    const identityMap = {}

    function getSlug(article) {
      return article.slug
    }

    function addToMap(article) {
      const slug = getSlug(article)

      if (!identityMap.hasOwnProperty(slug)) {
        identityMap[slug] = {
          article: article,
          points: 0,
        }
      }
    }

    function addTagsPoints(article, tags) {
      const tagPoint = 3
      const slug = getSlug(article)

      article.tags.forEach(aTag => {
        if (includes(tags, aTag)) {
          identityMap[slug].points += tagPoint
        }
      })
    }

    function getIdentityMapAsArray() {
      return Object.keys(identityMap).map(slug => identityMap[slug])
    }

    for (let article of articles) {
      addToMap(article)
      addTagsPoints(article, tags)
    }

    const arrayIdentityMap = getIdentityMapAsArray()
    const similarArticles = orderBy(arrayIdentityMap, ["points"], ["desc"])
    return similarArticles.splice(0, maxArticles)
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query SimilarArticles {
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { category: { eq: "release" } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                artist
                date
                description
                tags
                releases
                category
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
    `}
    render={data => {
      const { releases, tags, currentArticleSlug } = props

      const articles = getPostsFromQuery(data.posts)
      const similarArticles = new SimilarArticlesFactory(
        articles,
        currentArticleSlug
      )
        .setMaxArticles(releases)
        .setTags(tags)
        .getArticles()

      return <SimilarArticlesComponent articles={similarArticles} />
    }}
  />
)

const SimilarArticlesComponent = ({ articles }) => (
  <section>
    <h1>Releases</h1>
    <div className="artist-release-card-container">
      {articles.map((article, i) => (
        <ArtistReleaseCard {...article.article} key={i} />
      ))}
    </div>
  </section>
)
