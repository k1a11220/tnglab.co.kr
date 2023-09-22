module.exports = {
  siteMetadata: {
    siteUrl: "https://www.tnglab.co.kr",
    title: "tnglab.co.kr",
    vpLinks: [
      {
        link: "/viewport/jk-series",
        name: "JK-Series",
      },
      {
        link: "/viewport/jkr-series",
        name: "JKR-Series",
      },
      {
        link: "/viewport/nys-series",
        name: "NYS-Series",
      },
    ],
    vcLinks: [
      {
        link: "/vacuum/sliding",
        name: "Sliding Shutter",
      },
    ],
  },

  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
};
