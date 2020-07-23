import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import "../utils/css/screen.css"

const ArtistReleaseCard = (props) => {
  const {
    thumbnail,
    slug,
  } = props;
  return (
    <div className="artist-release-card">
      <Link to={slug}>
        <img src={thumbnail.childImageSharp.fluid.src} alt = "artist releases"/>
      </Link>
    </div>
  )
}

export default ArtistReleaseCard;

ArtistReleaseCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}