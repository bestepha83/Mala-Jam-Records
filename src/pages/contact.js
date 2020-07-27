import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { navigateTo } from "gatsby-link"

import "../utils/normalize.css"
import "../utils/css/screen.css"

// function encode(data) {
//   const formData = new FormData();

//   for (const key of Object.keys(data)) {
//     formData.append(key, data[key]);
//   }

//   return formData;
// }

// export default class Contact extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleAttachment = e => {
//     this.setState({ [e.target.name]: e.target.files[0] });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     fetch("/", {
//       method: "POST",
//       body: encode({
//         "form-name": form.getAttribute("name"),
//         ...this.state
//       })
//     })
//       .then(() => navigateTo(form.getAttribute("action")))
//       .catch(error => alert(error));
//   };

//   render() {
//     return (
//       <Layout>
//         {/* <SEO
//           title="Contact"
//           keywords={[
//             `mala jam`,
//             `malajam`,
//             `record label`,
//             `music`,
//             `artists`,
//             `releases`,
//           ]}
//         /> */}

//         <article className="contact page-template">
//           <div className="post-content-body">
//             <div className="contact-header">
//               <h2>Work With Us!</h2>
//               <p>
//                 For bookings and general inquiries, please fill out the form
//                 below.
//               </p>
//               <p>For demo submissions, please include a file or link.</p>
//             </div>
//             <div className="row contact-content">
//               <div className="col-6">
//                 <figure className="kg-image-card">
//                   <Img
//                     fluid={data.contact.childImageSharp.fluid}
//                     className="kg-image"
//                   />
//                 </figure>
//               </div>
//               <div className="col-6">
//                 <form
//                   name="contact"
//                   method="post"
//                   action="/success"
//                   data-netlify="true"
//                   data-netlify-honeypot="bot-field"
//                   onSubmit= {handleSubmit}
//                 >
//                   <input type="hidden" name="bot-field" />
//                   <input type="hidden" name="form-name" value="contact" />
//                   <p className="contact-input">
//                     <label>
//                       <input
//                         type="text"
//                         name="name"
//                         id="name"
//                         placeholder="Name"
//                         value = {formState.name}
//                         onChange = {handleChange}
//                       />
//                     </label>
//                   </p>
//                   <p className="contact-input">
//                     <label>
//                       <input
//                         type="email"
//                         name="email"
//                         id="email"
//                         placeholder="Email"
//                         value = {formState.email}
//                         onChange = {handleChange}
//                       />
//                     </label>
//                   </p>
//                   <div className="contact-input">
//                     <label>
//                       <select name="role[]" id="category">
//                         <option value>- Category -</option>
//                         <option value="Bookings">Bookings</option>
//                         <option value="Demos">Demo Submissions</option>
//                         <option value="Inquiries">General Inquiries</option>
//                         <option value="Other">Just Wanna Say Hi!</option>
//                       </select>
//                     </label>
//                   </div>
//                   <div className="">
//                     <label>
//                       <input
//                         type="file"
//                         name="file"
//                         placeholder="Upload Demo"
//                         onChange={handleAttachment}
//                       />
//                     </label>
//                   </div>
//                   <p className="contact-input">
//                     <label>
//                       <textarea
//                         name="message"
//                         id="message"
//                         placeholder="Enter your message"
//                         rows={6}
//                         defaultValue={""}
//                       />
//                     </label>
//                   </p>
//                   <div data-netlify-recaptcha="true"></div>
//                   <p className="actions">
//                     <button type="submit" className="primary">
//                       Send
//                     </button>
//                     <input type="reset" defaultValue="Reset" />
//                   </p>
//                   <input type="hidden" name="bot-field" />
//                 </form>
//               </div>
//             </div>
//           </div>
//         </article>
//       </Layout>
//     );
//   }
// }

// const ContactPage = ({ data }) => {
//   const siteTitle = data.site.siteMetadata.title

//   // const [formState, setFormState] = useState({
//   //   name: '',
//   //   email: '',
//   // })

//   const encode = (data) => {
//     return Object.keys(data)
//         .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//         .join("&");
//   }

//   const handleChange = e => {
//     setFormState({
//       ...formState,
//       [e.target.name]: e.target.value,
//     })
//   }
//   const handleAttachment = e => {
//     this.setState({ [e.target.name]: e.target.files[0] });
//   };

//   const handleSubmit = e => {
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", ...this.state })
//     })
//       .then(() => alert("Success!"))
//       .catch(error => alert(error));

//     e.preventDefault();
//   };

//   return (
//     <Layout title={siteTitle}>
//       <SEO
//         title="Contact"
//         keywords={[
//           `mala jam`,
//           `malajam`,
//           `record label`,
//           `music`,
//           `artists`,
//           `releases`,
//         ]}
//       />

//       <article className="contact page-template">
//         <div className="post-content-body">
//           <div className="contact-header">
//             <h2>Work With Us!</h2>
//             <p>
//               For bookings and general inquiries, please fill out the form
//               below.
//             </p>
//             <p>For demo submissions, please include a file or link.</p>
//           </div>
//           <div className="row contact-content">
//             <div className="col-6">
//               <figure className="kg-image-card">
//                 <Img
//                   fluid={data.contact.childImageSharp.fluid}
//                   className="kg-image"
//                 />
//               </figure>
//             </div>
//             <div className="col-6">
//               <form
//                 name="contact"
//                 method="post"
//                 action="/success"
//                 data-netlify="true"
//                 data-netlify-honeypot="bot-field"
//                 onSubmit= {handleSubmit}
//               >
//                 <input type="hidden" name="bot-field" />
//                 <input type="hidden" name="form-name" value="contact" />
//                 <p className="contact-input">
//                   <label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       placeholder="Name"
//                       value = {formState.name}
//                       onChange = {handleChange}
//                     />
//                   </label>
//                 </p>
//                 <p className="contact-input">
//                   <label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       placeholder="Email"
//                       value = {formState.email}
//                       onChange = {handleChange}
//                     />
//                   </label>
//                 </p>
//                 <div className="contact-input">
//                   <label>
//                     <select name="role[]" id="category">
//                       <option value>- Category -</option>
//                       <option value="Bookings">Bookings</option>
//                       <option value="Demos">Demo Submissions</option>
//                       <option value="Inquiries">General Inquiries</option>
//                       <option value="Other">Just Wanna Say Hi!</option>
//                     </select>
//                   </label>
//                 </div>
//                 <div className="">
//                   <label>
//                     <input
//                       type="file"
//                       name="file"
//                       placeholder="Upload Demo"
//                       onChange={handleAttachment}
//                     />
//                   </label>
//                 </div>
//                 <p className="contact-input">
//                   <label>
//                     <textarea
//                       name="message"
//                       id="message"
//                       placeholder="Enter your message"
//                       rows={6}
//                       defaultValue={""}
//                     />
//                   </label>
//                 </p>
//                 <div data-netlify-recaptcha="true"></div>
//                 <p className="actions">
//                   <button type="submit" className="primary">
//                     Send
//                   </button>
//                   <input type="reset" defaultValue="Reset" />
//                 </p>
//                 <input type="hidden" name="bot-field" />
//               </form>
//             </div>
//           </div>
//         </div>
//       </article>
//     </Layout>
//   )
// }

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleName = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleEmail = e => {
    this.setState({ [e.target.email]: e.target.value })
  }
  handleMessage = e => {
    this.setState({ [e.target.message]: e.target.value })
  }

  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
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
              {/* <div className="col-6">
                <figure className="kg-image-card">
                  <Img
                    fluid={data.contact.childImageSharp.fluid}
                    className="kg-image"
                  />
                </figure>
              </div> */}
              <div className="col-6">
                <form
                  name="contact"
                  method="post"
                  action="/success"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="contact-input">
                    <label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={this.handleName}
                      />
                    </label>
                  </p>
                  <p className="contact-input">
                    <label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={this.handleEmail}
                      />
                    </label>
                  </p>
                  <div className="contact-input">
                    <label>
                      <select name="role[]" id="category">
                        <option value>- Category -</option>
                        <option value="Bookings">Bookings</option>
                        <option value="Demos">Demo Submissions</option>
                        <option value="Inquiries">General Inquiries</option>
                        <option value="Other">Just Wanna Say Hi!</option>
                      </select>
                    </label>
                  </div>
                  <div className="">
                    <label>
                      <input
                        type="file"
                        name="file"
                        placeholder="Upload Demo"
                        onChange={this.handleAttachment}
                      />
                    </label>
                  </div>
                  <p className="contact-input">
                    <label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Enter your message"
                        rows={6}
                        defaultValue={""}
                        onChange={this.handleMessage}
                      />
                    </label>
                  </p>
                  <div data-netlify-recaptcha="true"></div>
                  <p className="actions">
                    <button type="submit" className="primary">
                      Send
                    </button>
                    <input type="reset" defaultValue="Reset" />
                  </p>
                  <input type="hidden" name="bot-field" />
                </form>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
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

// export default props => (
//   <StaticQuery
//     query={indexQuery}
//     render={data => (
//       <ContactPage location={props.location} data={data} {...props} />
//     )}
//   />
// )
