
import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { getPostsFromQuery } from './related'
import { includes, orderBy } from 'lodash'
import ArticleCard from './artistLink'
import "../utils/css/screen.css"

const CalculateArtistComponent = ({ articles }) => (
  <div>
    {articles.map((article, i) => (
      <ArticleCard {...article.article} key={i}/>
    ))}
  </div>
)

class CalculateArtistFactory {
  constructor (articles, currentArticleSlug) {
    this.articles = articles.filter((aArticle) => aArticle.slug !== currentArticleSlug);
    this.currentArticleSlug = currentArticleSlug;
    this.maxArticles = 3;
    this.tags = []
  }

  setMaxArticles (m) {
    this.maxArticles = m;
    return this;
  }
  
  setTags (tagsArray) {
    this.tags = tagsArray;
    return this;
  }

  getArticles () {
    const { tags, articles, maxArticles } = this;
    const identityMap = {};

    function getSlug (article) {
      return article.slug;
    }

    function addToMap (article) {
      const slug = getSlug(article);

      if (!identityMap.hasOwnProperty(slug)) {
        identityMap[slug] = {
          article: article,
          points: 0
        }
      }
    }

    function addTagsPoints (article, tags) {
      const tagPoint = 3;
      const slug = getSlug(article);
      
      article.tags.forEach((aTag) => {
        if (includes(tags, aTag)) {
          identityMap[slug].points += tagPoint;
        }
      })
    }

    function getIdentityMapAsArray () {
      return Object.keys(identityMap).map((slug) => identityMap[slug]);
    }
    
    for (let article of articles) {
      addToMap(article);
      addTagsPoints(article, tags)
    }
    
    const arrayIdentityMap = getIdentityMapAsArray();
    const calculateArtist = orderBy(arrayIdentityMap, ['points'], ['desc'])
    return calculateArtist.splice(0, maxArticles);
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query CalculateArtist {    
        posts: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {category: {eq: "artist"}}}
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
      const { tags, currentArticleSlug } = props;

      const articles = getPostsFromQuery(data.posts);
      const calculateArtist = new CalculateArtistFactory(articles, currentArticleSlug)
        .setMaxArticles(1)
        .setTags(tags)
        .getArticles()

      return (
        <CalculateArtistComponent
          articles={calculateArtist}
        />
      )
    }}
  />
)