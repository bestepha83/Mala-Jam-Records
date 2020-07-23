import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
//TODO: switch to staticQuery, get rid of comments, remove unnecessary components, export as draft template
const POST = () => {

  return (
    <Layout>
      <SEO 
        title="post" 
        keywords={[`mala jam`, `malajam`, `record label`, `music`, `artists`, `releases`]} 
      />

        <section className = "POST">
            <header>
                <h1>Thank You!</h1>
                <h3>We'll Get Back To You As Soon As Possible!</h3>
                <Link to = "/artists">
                    <button>Keep Exploring</button>
                </Link>
            </header>
        </section>
     </Layout>


  )
}

export default POST
