const path = require('path')

module.exports = {
  async rewrites() {
    return [
      {
        source: `/robots.txt`,
        destination: `/robotstxt`,
      },
    ]
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['url-loader'],
    })
    return config
  },
  reactStrictMode: true,
  sassOptions: {
    indentWidth: 4,
    includePaths: [path.join(__dirname, 'src', 'packages')],
    additionalData: "@import 'styles/scale/scale.mixin';",
  },
  publicRuntimeConfig: {
    APP_LOCALE: process.env.APP_LOCALE || 'ru-RU',
  },
}
