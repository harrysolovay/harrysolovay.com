module.exports = (config, env) => {

  // automatically import antd component CSS when the JS module is imported
  config = require('react-app-rewire-import')(config, env, {
    libraryName: 'antd',
    style: 'css',
  })

  // enable SCSS modules
  config = require('react-app-rewire-css-modules')(config, env)

  // generate site favicon and device shortcut icons in document head
  config = require('react-app-rewire-favicons-plugin')(config, env, {
    logo: './public/icon.png',
    prefix: 'icons-[hash]/',
    background: '#fff',
    title: `Harry Solovay's Portfolio`,
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

  return config

}