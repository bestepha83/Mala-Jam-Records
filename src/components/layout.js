import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Layout = props => {
  const { children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const linkStyles = {
    opacity: "0.4",
  }
  const activeStyles = {
    opacity: 1,
  }
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <div
            className="nav-burger"
            onClick={() => setToggleNav(!toggleNav)}
            onKeyDown={() => setToggleNav(!toggleNav)}
            role="button"
            tabIndex={0}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
          <nav id="swup" className="site-head-left">
            <ul className="nav">
              <li className="nav-home">
                <Link to={`/`} style={linkStyles} activeStyle={activeStyles}>
                  Home
                </Link>
              </li>
              <li className="nav-home">
                <Link
                  to={`/artists`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                  partiallyActive={true}
                >
                  Artists
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/releases`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Discography
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/news`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  News
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/about`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  About
                </Link>
              </li>
              <li className="nav-elements">
                <Link
                  to={`/contact`}
                  style={linkStyles}
                  activeStyle={activeStyles}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              className="kg-image site-head-logo"
            />
          </div>

          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com/Mala-Jam-Records-106976547742113/?modal=admin_todo_tour"
                target="_blank"
                title="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.instagram.com/malajamrecords/"
                target="_blank"
                title="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
