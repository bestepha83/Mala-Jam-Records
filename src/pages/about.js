import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Scroll from "../components/backToTop"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        keywords={[
          `mala jam`,
          `malajam`,
          `record label`,
          `music`,
          `artists`,
          `releases`,
        ]}
      />

      <article className="about page-template no-image" id="top">
        <Scroll showBelow={250} />
        <div className="post-content-body">
          <h2 className="page-title">About Malajam Records</h2>

          <div className="main-about ">
            <div>
              <figure className="kg-image-card">
                <Img
                  fluid={data.mainAbout.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
            </div>
            <div className="main-about-content">
              <h4>The Dream</h4>
              <p>
                Mala Jam Records was started initially with one thing in mind:
                producing records. As students of art all their lives, Jack and
                Henry have a deep and ever expanding passion for
                interdisciplinary art. The pair is focused on curating and
                creating great music and they believe in what they work on every
                step of the way. Mala Jam works with artists who have something
                to say, and the team hopes to make the process of expression as
                beautiful and easy as possible.
              </p>
            </div>
          </div>
          <div className="main-about">
            <div>
              <figure className="kg-image-card">
                <Img
                  fluid={data.mainAbout.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
            </div>
            <div className="main-about-content">
              <h4>The Beginning</h4>
              <p>
                As the project evolved, the pair began to understand the
                wonderful web of artistry they found themselves intertwined in,
                something that is exceedingly rare and incredibly exciting. Now
                the concept of Mala Jam permeates beyond making hits and into
                creating a community of like minded artists hungry for creating
                amazing work.
              </p>
            </div>
          </div>
          <div className="row bus-model">
            <div className="bus-model-box"></div>
            <div className="col-6">
              <h5>Our Mission</h5>
              <p>
                Malajam Records is an independent record label dedicated to
                promoting artists. Our mission is to create a community
                dedicated to artist development and success.
              </p>
              <h5>What We Do</h5>
              <p>
                Mala Jam Records partners with musical and visual artists to
                offer a holistic musical experience through production,
                distribution, branding, and promotion of each musical artist.
              </p>
            </div>
            <div className="col-6">
              <h6>What We Offer</h6>
              <ol>
                <li>Vision</li>
                <p>
                  With our experienced producers and designers, we offer
                  unparalleled knowledge and skill of the music industry to our
                  artists.
                </p>
                <li>Resources</li>
                <p>Recording, Mixing, Branding? We take care of everything!</p>
                <li>Connection</li>
                <p>
                  Our distribution channels your music to all the major
                  streaming platforms for our artists to get the most attention
                  possible.
                </p>
              </ol>
            </div>
          </div>
        </div>

        <div className="meet-the-team">
          <h2>Meet The Team!</h2>
          <div className="team-cards">
            <div className="team-card">
              <figure className="kg-image-card">
                <Img
                  fluid={data.mainAbout.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <h6>Label Executives</h6>
              <p>Top dogs. They run this shit.</p>
              <AnchorLink
                to="/employee#executives"
                className="button primary large"
              >
                Meet the Executives
              </AnchorLink>
            </div>
            <div className="team-card">
              <figure className="kg-image-card">
                <Img
                  fluid={data.mainAbout.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <h6>Visual Artists</h6>
              <p>For all your visual needs.</p>
              <AnchorLink
                to="/employee#visual"
                className="button primary large"
              >
                Meet the Visual Artists
              </AnchorLink>
            </div>
            <div className="team-card">
              <figure className="kg-image-card">
                <Img
                  fluid={data.mainAbout.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <h6>The Studio</h6>
              <p>They make the magic happen.</p>
              <AnchorLink
                to="/employee#studio"
                className="button primary large"
              >
                Meet the Studio
              </AnchorLink>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    mainAbout: file(relativePath: { eq: "GBE.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
