const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  plugins: [
    require("autoprefixer")(),
    !isDev && require("cssnano")({
      preset: ["default"]
    })
  ].filter(Boolean)
}
