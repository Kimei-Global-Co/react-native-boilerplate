module.exports = function (api) {
  api.cache(true)
  const plugins = [
    'react-native-reanimated/plugin',
    ['babel-plugin-react-compiler', { target: '19' }]
  ]

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          lazyImports: true
        }
      ]
    ],
    plugins
  }
}
