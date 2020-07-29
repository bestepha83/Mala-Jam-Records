import React from "react"
import Layout from "../components/layout"
import Scroll from "../components/backToTop"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Employees"
        keywords={[
          `mala jam records`,
          `mala jam employees`,
          `mala jam leaders`,
          `mala jam workers`,
          `malajam records`,
          `malajam employees`,
          `mala jam photographers`,
          `malajam photographers`,
          `mala jam graphic designers`,
          `malajam graphic designers`,
          `mala jam designers`,
          `malajam designers`,
          `wisconsin record label`,
          `mala jam ceo`,
          `malajam ceo`,
          `mala jam leader board`,
          `malajam leader board`,
          `malajam executives`,
          `mala jam executives`,
        ]}
        description="Mala Jam Records employees are experienced in all aspects of the music industry. The combined Mala Jam community help cultivate a complete musical experience for the audience."
      />
      <article className="page-template no-image">
        <Scroll showBelow={250} />
        <div className="team-content-body">
          <h2 className="page-title">The Team</h2>
          <div className="leader-team" id="executives">
            <h3>Label Executives</h3>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.henry.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Henry Ptacek</h4>
                <h6>Founder, Partner</h6>
                <p>
                  Henry Ptacek is a music producer, musician, and industrial
                  thinker. With his past musical projects, Henry has found a
                  common theme: deep longing for diversity and artistic
                  connection. Henry wants to make great music; music that is
                  intrinsically beautiful no matter the genre. Because of this
                  desire, he began to realize that record labels are meant to
                  put out good records. That is what Mala Jam, to its core, is
                  about- creating good music. Henry has become obsessed with the
                  full range of music production in order to create work that
                  can be artistically competitive with any music.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.jack.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Jack Cain</h4>
                <h6>Partner</h6>
                <p>
                  Jack Cain is a man of many passions. As a music producer,
                  musician, actor, and songwriter, he is ecstatic to bring his
                  experience in the arts to the musicians he works with. First
                  beginning his artistic development as a toddler on stage, he
                  is currently studying in a rigorous acting program at The
                  University of Southern California. Jack firmly believes that
                  the arts are interconnected, and when creators explore other
                  mediums or ways to express themselves, all of their art is
                  enhanced. Fascinated by the process of perpetual learning, no
                  challenge is too great as he strives to make beautiful music
                  and lasting art.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.sarah.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Sarah Stephan</h4>
                <h6>CFO</h6>
                <p>
                  Drawn to Jack and Henry’s passion for producing music, Sarah
                  was one of the first members to join the Mala Jams team. Sarah
                  has previously worked on many small business projects,
                  focusing on improving marketing and efficiency. She currently
                  runs her own sustainable shopping platform and a photography
                  business.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.ben.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Ben Stephan</h4>
                <h6>CTO</h6>
                <p>
                  Ben brings a unique set of skills to the table, including his
                  logical mind for technology and his creative eye for design.
                  The developer and designer of this website, Ben is always
                  working to improve the usability, accesibility, and beauty of
                  Mala Jam Records as a company and as a community.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.daniel.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Daniel Bomier</h4>
                <h6>Director of Booking</h6>
                <p>
                  Daniel is currently studying at University of Southern
                  California, which has nourished his love for music through
                  being involved with the Los Angeles art scene. Daniel has
                  taken advantage of the robust art scene at USC by studying the
                  Music Industry. In addition to Daniel’s new home, he also
                  enjoys managing a band out of Appleton, Wisconsin called The
                  Accords. He has booked countless shows in venues across the
                  Midwest. Some of his musical inspirations include John Mayer,
                  The Grateful Dead, Miles Davis, and Roy Hargrove.
                </p>
              </div>
            </div>
          </div>
          <div className="visual-artist-team" id="visual">
            <h3>Visual Artists</h3>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.annah.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Annah Holmes</h4>
                <h6>Digital Media Designer</h6>
                <p>
                  Annah has a great devotion for many different art mediums.
                  From mural painting to digital designing, her passion with art
                  has brought her work all across the nation. Currently, she has
                  been working on several freelance graphic design projects. She
                  enjoys working one on one to help rebrand and express her
                  clients’ business through the visual arts. She is excited to
                  be working with Mala Jam as they exhibit such amazing talents
                  within each artist.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.isabella.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Isabella Covert</h4>
                <h6>Oil/Acrylic Artist</h6>
                <p>
                  Isabella Covert is a sophomore at the University of
                  Wisconsin-Madison studying Fine Arts. Originally from
                  Cedarburg, Wisconsin, she has known from a young age that art
                  is her passion. Being a part of Mala Jam is an opportunity to
                  share her work with the world. Displaying her paintings
                  alongside works by other artists and musicians, Mala Jam
                  showcases the diversity of the arts community.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.sarah.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Sarah Stephan</h4>
                <h6>Photographer</h6>
                <p>
                  Born with a flair for the arts, Sarah offers a creative and
                  precise eye for design and photography alike. As a house
                  photographer, Sarah works directly with artists:
                  conceptualizing, planning, and executing dynamic photoshoots
                  that capture their unique creative vision.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.elaina.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Elaina Anderson</h4>
                <h6>Photographer</h6>
                <p>
                  Self-taught and always looking for new takes on her hometown
                  landscape, Elaina loves capturing unique personalities of her
                  friends and the talent within Mala Jam!
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.joeyDuehring.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Joey</h4>
                <h6>Graphic Designer</h6>
                <p>
                  Joey Duehring is a 19 year old artist from Appleton, Wisconsin
                  who’s focuses are graphic design and photography. He started
                  designing album covers, posters, and t-shirts for the artist
                  Poet22 in early 2019, and has been working with her ever
                  since. Joey completed his first year of classes at Peck School
                  of the Arts in Milwaukee. His biggest artistic inspirations
                  are Jenny Holzer, Francisco Goya, Todd Hido, Solange, and
                  Hayao Miyazaki.
                </p>
              </div>
            </div>
          </div>
          <div className="studio-team" id="studio">
            <h3>Studio Members</h3>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.henry.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Henry Ptacek</h4>
                <h6>Drums, Percussion, Songwriter, Producer</h6>
                <p>
                  Henry Ptacek has always been innately drawn to rhythm. He
                  practices a wide range of percussion styles, from Western
                  classical percussion such as mallet and orchestral playing, to
                  the rhythms of Brazil and Carnival, and even to the religious
                  music of Santeria or the Black American music jazz. Beyond
                  learning more of his craft, Henry has been recording drums and
                  songwriting in his home studio for the past year. Above all
                  else, Henry loves to see his instrument make a song burst with
                  feeling.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.jack.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Jack Cain</h4>
                <h6>Vocals, Songwriter, Producer</h6>
                <p>
                  Jack combines poetry, vocal techniques from his musical
                  theatre background, and his passion for rock, pop, and jazz
                  music to create an intoxicating vocal expression and power. As
                  an actor, his ability to delicately convey emotion through
                  spoken or sung word can liven lyrics and enhance melodies.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.tony.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Tony Krueger</h4>
                <h6>Head Producer</h6>
                <p>
                  Tony Kreuger, or The Missing Link, is a music producer and
                  audio engineer working in Wisconsin, best known for his
                  production in collaboration with the lightly esteemed GCP
                  Spittas hip hop collective. While specializing in rap vocals
                  and beat making, Link also mixes songs within various other
                  genres. Link's background in percussion and music theory
                  contributes to his production, which is ultimately inspired by
                  his passion for 19th century architecture.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.danny.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Danny Lopez</h4>
                <h6>Guitarist</h6>
                <p>
                  Danny Lopez is a Chicago-born guitarist who specializes in the
                  soul/jazz/blues/funk world. Danny keeps himself connected to
                  the music scene of the Fox Valley playing gigs and writing
                  music with many. Danny started playing at the age of 13 with
                  his middle school jazz band. Later he would join bands such as
                  Minus One, and be the accompanist guitarist for live shows of
                  Poet22. With a deep love for pocket playing and rhythmic
                  mastery, he is the ideal rhythm guitarist. Not to mention his
                  many years of playing jazz have lent to an amazing soloing
                  ability.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.ben.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Ben Stephan</h4>
                <h6>Guitarist</h6>
                <p>
                  Ben is a blues guitarist with a jazzy flair. His extensive
                  experience in a plethora of genres, including hard rock, funk,
                  jazz, alternative, and indie bands, makes him the perfect
                  candidate for all recording needs.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.jando.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Alejandro Valdez</h4>
                <h6>Bass</h6>
                <p>
                  Jando Valdez began playing bass in high school and hasn't
                  turned back. Originally a percussionist, he is very connected
                  to groove and rhythm, which is essential for the bass.
                  Inspired by bassists such as Flea of the Red Hot Chili
                  Peppers, Jando began playing all types of music, especially
                  jazz and rock. Jando is starting his journey at the Lawrence
                  Conservatory of Music this year as a Jazz Bass performance
                  major.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.charlie.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Charlie Palm</h4>
                <h6>Trumpet, Bass, Piano</h6>
                <p>
                  Charlie Palm is a jazz player, but his music-making doesn't
                  stop there. With a deep knowledge for jazz theory, he is able
                  to create stunning solos as well as thoughtful tunes. His
                  primary instrument is the trumpet, for which he is receiving a
                  full ride to study at Madison. In addition to the trumpet, he
                  plays the bass and piano beautifully and with a depth of
                  knowledge in not only notes but feelings as well.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.isabella2.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Isabelle Krier</h4>
                <h6>Violin</h6>
                <p>
                  Isabelle Krier is a violinist out of Madison, Wisconsin. Her
                  musical ability led her to stay in her hometown to pursue a BM
                  in Violin performance under a full ride scholarship as well as
                  majoring in Biology. After winning a couple concerto
                  competitions she has been focused on ensemble and recorded
                  playing for various genres.
                </p>
              </div>
            </div>
            <div className="team-row">
              <figure className="kg-image-card team-col-4">
                <Img
                  fluid={data.meredith.childImageSharp.fluid}
                  className="kg-image"
                />
              </figure>
              <div className="team-col-8">
                <h4>Meredith Nesbitt</h4>
                <h6>Bass, Cello</h6>
                <p>
                  Meredith Nesbitt is an acoustic and electric bassist and
                  cellist. She has studied under a variety of teachers including
                  Uri Vardi, Nick Moran, Hana John Taylor and John Christensen.
                  Originally classically trained, she now spans a variety of
                  styles including free and straight ahead jazz, rock, folk and
                  Afrocuban. She draws inspiration from Fred Hopkins and Tomeka
                  Reid to Cachaito and Andy Shauf, to name a few.
                </p>
              </div>
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
    henry: file(relativePath: { eq: "henry-about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jack: file(relativePath: { eq: "jack-about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sarah: file(relativePath: { eq: "sarah.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ben: file(relativePath: { eq: "ben.png" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    daniel: file(relativePath: { eq: "daniel.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    annah: file(relativePath: { eq: "annah.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    isabella: file(relativePath: { eq: "isabella.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    elaina: file(relativePath: { eq: "elaina.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    joeyDuehring: file(relativePath: { eq: "joey-duehring.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tony: file(relativePath: { eq: "tony.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    charlie: file(relativePath: { eq: "charlie.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    danny: file(relativePath: { eq: "danny.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jando: file(relativePath: { eq: "jando-about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    isabella2: file(relativePath: { eq: "isabella-2.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    meredith: file(relativePath: { eq: "meredith.PNG" }) {
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
