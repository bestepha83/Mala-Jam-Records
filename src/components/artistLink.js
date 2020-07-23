import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import "../utils/css/screen.css"

const ArticleCard = (props) => {
  const {
    title,
    slug,
  } = props;
  return (
    <Link to={slug}>
      <button className = "button">
        Visit {title}
      </button>
    </Link>
  )
}

export default ArticleCard;

ArticleCard.propTypes = {
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}