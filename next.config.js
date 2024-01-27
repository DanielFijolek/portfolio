/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;

const nextConfig =
  env === "development"
    ? {}
    : {
        output: "export",
        assetPrefix: "https://www.danielfijolek.com/",
      };

module.exports = nextConfig;
