import React from "react"
import { Link } from "gatsby"
import "../utils/css/screen.css"

export default props => (
  <article
    className={`news-card ${
      props.postClass
    } ${props.node.frontmatter.thumbnail1 ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail1 && {
        backgroundImage: `url(${
          props.node.frontmatter.thumbnail1.childImageSharp.fluid.src
        })`,
      }
    }
  >
    <div className="news-card-content-container">
      <div className = "news-card-content-image">
        <Link to={props.node.fields.slug}>
          <img src = {props.node.frontmatter.thumbnail2.childImageSharp.fluid.src} alt = "news feed"/>
        </Link>
      </div>
      <div className = "news-card-content">
        <h2 className="news-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
        <p>
          {props.node.frontmatter.description}
        </p>
        <Link to={props.node.fields.slug} className="news-card-link">
          <button className = "button primary">
              Read More
          </button>
        </Link>    
      </div>
    </div>

  </article>
)
