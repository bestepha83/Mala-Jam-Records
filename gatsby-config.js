const urljoin = require("url-join")
const siteConfig = require("./siteConfig")

module.exports = {
  siteMetadata: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteUrl: urljoin(siteConfig.url, siteConfig.prefix),
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/artists`,
        name: `artists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/releases`,
        name: `releases`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/news`,
        name: `news`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: true,
              showCaptions: true,
              quality: 75,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-remark-copy-linked-files`,
      options: {},
    },
    {
      resolve: `gatsby-remark-videos`,
      options: {
        pipelines: [
          {
            name: "vp9",
            transcode: chain =>
              chain
                .videoCodec("libvpx-vp9")
                .noAudio()
                .outputOptions(["-crf 20", "-b:v 0"]),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "webm",
          },
          {
            name: "h264",
            transcode: chain =>
              chain
                .videoCodec("libx264")
                .noAudio()
                .addOption("-profile:v", "main")
                .addOption("-pix_fmt", "yuv420p")
                .outputOptions(["-movflags faststart"])
                .videoBitrate("1000k"),
            maxHeight: 480,
            maxWidth: 900,
            fileExtension: "mp4",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -100,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-easy-import")(),
          require("postcss-custom-properties")({ preserve: false }),
          require("postcss-color-function")(),
          require("autoprefixer")({
            overrideBrowserslist: ["last 2 versions"],
          }),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-173302768-1`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mala Jam",
        short_name: "Malajam",
        start_url: "/",
        background_color: "white",
        theme_color: "white",
        display: "standalone",
        icon: "src/images/logo-circle.png",
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
