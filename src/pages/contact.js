import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact"
        keywords={[
          `mala jam`,
          `malajam`,
          `record label`,
          `music`,
          `artists`,
          `releases`,
        ]}
      />

      <article className="contact page-template">
        <div className="post-content-body">
          <div className="contact-header">
            <h2>Work With Us!</h2>
            <p>
              For bookings and general inquiries, please fill out the form
              below.
            </p>
            <p>For demo submissions, please include a file or link.</p>
          </div>
          <div className="row contact-content">
            <div className="col-6">
              <figure className="kg-image-card">
                <Img
                  fluid={data.contact.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
            </div>
            <div className="col-6">
              <form
                method="post"
                action="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <div className="contact-input">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="contact-input">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="contact-input">
                  <select name="category" id="category">
                    <option value>- Category -</option>
                    <option value={1}>Bookings</option>
                    <option value={1}>Demo Submissions</option>
                    <option value={1}>General Inquiries</option>
                    <option value={1}>Just Wanna Say Hi!</option>
                  </select>
                </div>
                <div className="">
                  <input
                    type="file"
                    name="myFile"
                    id="myFile"
                    placeholder="Upload Demo"
                  />
                </div>
                <div>
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <div className="contact-input">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter your message"
                    rows={6}
                    defaultValue={""}
                  />
                </div>
                <div>
                  <ul className="actions">
                    {/* <li>
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="primary"
                      />
                    </li> */}
                    <button type="submit" className="primary">
                      Send Message
                    </button>
                    <li>
                      <input type="reset" defaultValue="Reset" />
                    </li>
                  </ul>
                </div>
              </form>
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
    contact: file(relativePath: { eq: "contact.jpg" }) {
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
