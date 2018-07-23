const generateIcons = (config, env) => (
  require('react-app-rewire-favicons-plugin')(config, env, {
    logo: './public/icon.png',
    prefix: 'icons-[hash]/',
    background: '#fff',
    title: 'harrysolovay.com',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  })
)

const minifyImages = (config, env) => (
  require('react-app-rewire-imagemin-plugin')(config, env, {
    pngquant: {
      quality: '95-100',
    },
  })
)

const executeBuildOnlyTasks = (config, env) => {
  if(process.env.NODE_ENV === 'production') {
    config = generateIcons(config, env)
    config = minifyImages(config, env),
    config = require('react-app-rewire-preload-plugin')(config, env)
  }
}

module.exports = (config, env) => {
  config = require('react-app-rewire-idx')(config, env)
  config = require('react-app-rewire-css-modules')(config, env)
  executeBuildOnlyTasks(config, env)
  return config
}