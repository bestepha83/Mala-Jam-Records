import React from "react"
import { Link } from "gatsby"

const Contact = props => {
  const { title } = props
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
        <h2 id="forms">Contact Us</h2>
          <form method="post" action="#">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  placeholder="Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <select name="demo-category" id="demo-category">
                  <option value>- Category -</option>
                  <option value={1}>Bookings</option>
                  <option value={1}>Demo Submissions</option>
                  <option value={1}>General Inquiries</option>
                  <option value={1}>Just Wanna Say Hi!</option>
                </select>
              </div>
              <div className="col-6 col-12-small">
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>
              <div className="col-12">
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
    </div>
  )
}

export default Contact
