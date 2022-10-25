/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  //mudar o package.json dev
  // basePath: "/vpromed2",
  env: {
    API_KEY: "t8rAzpkJR8O3kDZdw63h85GDrV86VOeX",
  }
}

module.exports = nextConfig
